import { createContext, use, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { io } from "socket.io-client";


const backendUrl = process.env.BACKEND_URL;

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
                const { data } = await axios.get(`${backendUrl}/api/auth/check`)
                if(data.success){
                    setAuthUser(data.user);
                    connectSocket();
                } else {
                    toast.error(data.message);
                }
            } catch (error) {
                toast.error(error.message);
            }
        }
    }

    // Connect socket functon to handle socket connection and online users update
    const connectSocket = () => {
        if(!userData || socket?._connected) return;
        const newSocket = io(backendUrl, {
            query: {
                userId: userData._id
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
    })


    const value = {
        axios,
        authUser,
        onlineUsers,
        socket
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
