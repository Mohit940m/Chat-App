import React from 'react'
import assets, { userDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
 

const Sidebar = ({selectedUser, setSelectedUser}) => {
  const navigate = useNavigate()
  return (
    <div className={`bg-[#8185B2]/10 h-full rounded-r-xl p-5 overflow-y-scroll text-white ${selectedUser ? "max-md:hidden": ''}`}>
      <div className='pb-5'>
        <div className='flex justify-between items-center'>
          <img src={assets.logo} alt="logo" className='max-w-40' />
          <div className=' relative py-2 group'>
            <img src={assets.menu_icon} alt="Menu" className='max-h-5 cursor-pointer' />
            <div className='absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block '>
              <p onClick={()=>navigate('/profile')} className='cursor-pointer text-sm'>
                Edit Profile
              </p>
              <hr className='my-2 border-t border-gray-500 ' />
              <p className='coursor-pointer text-sm'> 
                Logout
              </p>
            </div>
          </div>
        </div>

        <div className='bg-[#282142] rounded-full flex items-conter gap-2 px-4 py-3 mt-5'>
          <img src={assets.search_icon} alt="Search" className='w-4' />
          <input type="text" 
          placeholder='Search Users...' 
          className='bg-transparent  border-none outline-none text-white text-xs placeholder-[#c8c8c8] flex-1' />

        </div>

        <div>
          {userDummyData.map((user, index) =>(
            <div 
            key={index}
            onClick={()=>setSelectedUser(user)}
            className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm ${selectedUser?._id === user._id && 'bg-[#282142]/50'}`}>
              <img src={user?.profilePic|| assets.avatar_icon} alt="Profile Pic"
              className='w-[35px] assets[1/1] rounded-full' />
              <div>
                <p>{user.fullName}</p>
                {
                  index < 3 
                  ? <span className='text-green-500 text-xs'>Onine</span>
                  : <span className='text-gray-500 text-xs'>Offline</span> 
                }
              </div>
              {index > 2 && <p className='absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-violet-500/50'>{index}</p>}
            </div>
          ))
            }
        </div>

      </div>
    </div>
  )
}

export default Sidebar
