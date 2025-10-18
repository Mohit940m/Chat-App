import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import React from "react";


const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
axios.defaults.baseURL = backendUrl;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = React.useState(localStorage.getItem("token"));
    const [authUser, setAuthUser] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [socket, setSocket] = useState(null);

    // Check if user is authenticated and if so, set the user data connected to the socket
    const checkAuth = async () => {
        if (token) {
            try {
                const { data } = await axios.get(`/api/auth/check`)
                if(data.success){
                    setAuthUser(data.user);
                    connectSocket(data.user);
                } else {
                    toast.error(data.message);
                }
            } catch (error) {
                toast.error(error.message);
            }
        }
    }


    //login function to handle user authentication and socket connection

    const login = async (state, credentials) => {
        try {
            const { data } = await axios.post(`/api/auth/${state}`, credentials);
            if (data.success) {
                setAuthUser(data.userResponse);
                connectSocket(data.userResponse);
                axios.defaults.headers.common["token"] = data.token;
                setToken(data.token);
                localStorage.setItem("token", data.token);
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    // logout function to handle user logout and socket disconnection

    const logout = async () => {
        localStorage.removeItem("token");
        setToken(null);
        setAuthUser(null);
        axios.defaults.headers.common["token"] = null;
        toast.success("Logout successful");
        socket?.disconnect();
    }


    // Update user data function to update the user data in the context and local storage
    const updateProfile = async (body)=>{
        try {
            const {data} = await axios.put(`/api/auth/update-profile`, body);
            if(data.success){
                setAuthUser(data.user);
                toast.success("Profile updated successfully");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    // Connect socket functon to handle socket connection and online users update
    const connectSocket = (user) => {
        if(!user || socket?._connected) return;
        const newSocket = io(backendUrl, {
            query: {
                userId: user._id
            }
        });
        newSocket.connect();
        setSocket(newSocket);

        newSocket.on("getOnlineUsers", (userIds) => {
            setOnlineUsers(userIds);
        });
    }

    useEffect(() =>{
        if(token){
            axios.defaults.headers.common["token"] = token;
        }
        checkAuth();
    }, [token])


    const value = {
        axios,
        authUser,
        onlineUsers,
        socket,
        login,
        logout,
        updateProfile,
        token
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
