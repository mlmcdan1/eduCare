import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import logo from '../../images/eduCARE (1).png'

export default function Header() {
    const [pageState, setPageState] = useState("Sign in")
    const location = useLocation()

    //fast routing from react
    const navigate = useNavigate()

    const auth = getAuth();
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setPageState("Profile")
            }else{
                setPageState("Sign in")
            }
        })
    })

    function pathMatchRoute(route){
        if(route === location.pathname){
            return true;
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-40'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img className="h-28 cursor-pointer" src= {logo} alt="logo" 
                onClick={()=> navigate("/")}/>
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                    ${pathMatchRoute("/") && "text-black border-b-red-500"}`} onClick={()=> navigate("/")}>Home</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                    ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`} onClick={()=> navigate("/offers")}>Offers</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                    ${(pathMatchRoute("/profile") || pathMatchRoute("/profile")) && "text-black border-b-red-500"}`} 
                    onClick={()=> navigate("/profile")}>{pageState }</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                    ${pathMatchRoute("/business-login") && "text-black border-b-red-500"}`} onClick={()=> navigate("/business-login")}>Business</li>

                </ul>
            </div>
        </header>
      
    </div>
  )
}
