import React, { useState } from 'react'
import assets from '../assets/assets'

const Login = () => {

  const [fullName,setFullName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [bio,setBio]=useState('')
  const [isDataSubmitted,setIsDataSubmitted]=useState(false)


  const handleSubmit=async(event)=>{
    event.preventDefault()

    if(currState==='Sign Up' && !isDataSubmitted){
      setIsDataSubmitted(true)
      return;
    }

  }

  const [currState,setCurrState]=useState('Sign Up')
  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>

      {/* left side */}

        <img src={assets.logo_icon} alt="logo-big"  className='w-[min(30vw,250px)]'/>     

      {/* right side */}

      <form onSubmit={handleSubmit} action="" className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'>
      <h2 className='font-medium text-2xl flex justify-between items-center'>
       {currState}
       {isDataSubmitted && <img onClick={()=>{setIsDataSubmitted(false)}}src={assets.arrow_icon} alt="arrow_icon" className='w-5 cursor-pointer' />}
      </h2>

      {currState==='Sign Up' && !isDataSubmitted && (<input onChange={(e)=>{setFullName(e.target.value)}}
      value={fullName} placeholder='Full Name' required className='p-2 border border-gray-500 rounded-md focus:outline-none'></input>)}


      {
        !isDataSubmitted && (
          <>
          <input type='email' placeholder='email' required className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' onChange={(e)=>{setEmail(e.target.value)} } value={email}
          >
          </input>

           <input type='password' placeholder='password' required className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' onChange={(e)=>{setPassword(e.target.value)} } value={password}
          >
          </input>
          </>
        )
      }



      {
        currState==='Sign Up' && isDataSubmitted &&(
         
          <textarea value={bio} className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' rows={4} required placeholder='Write a short bio of yourself...' onChange={(e)=>{setBio(e.target.value)}}></textarea>
        )
      }


      <button type='submit' className='py-3 bg-gradient-to-r from-purple-400 to-violet-500 text-white rounded-md cursor-pointer'>
        {currState==='Sign Up'? "Create Account":"Login"}
      </button>

      <div className='flex items-center gap-2 text-sm text-gray-500'>
        <input type="checkbox" />
        <p>Agree to terms and policy</p>
      </div>


      <div className='flex flex-col gap-2'>
        {currState==='Sign Up'?(
          <p className='text-sm text-gray-600'>Already have an account?
          <span onClick={()=>{setCurrState('Login'); setIsDataSubmitted(false)}}
           className='font-medium text-violet-500 cursor-pointer'>Login here</span></p>
        ):(
          <p className='text-sm text-gray-600'>Create an account
           <span onClick={()=>{setCurrState('Sign Up')}}
             className='font-medium text-violet-500 cursor-pointer'>Click Here</span></p>
        )}
      </div>
      </form>
    </div>
  )
}

export default Login
