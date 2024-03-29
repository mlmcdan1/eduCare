import React, { useState } from 'react'
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai"
import { Link } from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword, updateProfile, } from "firebase/auth"
import OAuth from './components/OAuth';
import {db} from "../firebase"
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Checkbox from '@mui/material/Checkbox';


async function setCustomUserClaims(userId, claims){
  try{
  // Set custom claims
  await setDoc(doc(db, "customClaims", userId), {
    ...claims,
    timestamp: serverTimestamp(),
  });
} catch (error){
  console.error("Error setting custom claims:", error);
  throw error;
}
}

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
  });
  const {name, email, password} = formData;
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked((prevChecked) => !prevChecked);
  };

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await 
      createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      //set the user's display name
      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      //set the custom claim indicating whether the user wants to create a business page

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      //console.log(user);
      await setDoc(doc(db, "users", user.uid), formDataCopy);

      //Set custom claim only if the box is checked
       if (checked) {
        await setCustomUserClaims(user.uid, {isBusinessUser: true});
       }

       const idTokenResult = await user.getIdTokenResult();
       console.log("User Claims:", idTokenResult.claims);

       toast.success("Sign up was successful");

       //Navigate after setting the custom claim
       if (checked){
        navigate("/business-login")
        } 
        else {
        navigate("/")
      }
    } 
    catch (error) {
      console.error("Error during sign up:", error);
      toast.error("Something went wrong with the registration");
    }
  }

  function onChange(e){
    setFormData((prevState) =>({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold '>
        Sign Up
      </h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1120&q=80" alt="sign-in"
          className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={onSubmit}>
           <input type="text" id='name' value={name} onChange={onChange} placeholder='Full Name' className='mb-6 w-full px-4 py-2 text-xl
            text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'/>
            <input type="email" id='email' value={email} onChange={onChange} placeholder='Email' className='mb-6 w-full px-4 py-2 text-xl
            text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'/>
            <div className='relative mb-6'>
              <input type={showPassword ? "text" : "password"} id='password' value={password} onChange={onChange} placeholder='Password' className='w-full px-4 py-2 text-xl
                text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'/>
                {showPassword ? (
                  <AiFillEyeInvisible className='absolute right-3
                  top-3 text-xl cursor-pointer'
                  onClick={()=> setShowPassword
                  ((prevState)=>!prevState)}/>
                ): (
                  <AiFillEye className='absolute right-3
                  top-3 text-xl cursor-pointer'
                  onClick={()=> setShowPassword
                  ((prevState)=>!prevState)}/>)}
            </div>
            <div className='mb-6'>
              <p>Check the box if you're registering for business page: </p>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              Business
            </div>
            <div className='flex justify-between 
            whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6 '>Have an account?
                <Link to="/sign-in" className='text-red-600
                 hover:text-red-700
                 transition duration-200
                  ease-in-out ml-1'>
                    Sign In
                    </Link>
              </p>
              <p>
                <Link to="/forgot-password" className='text-blue-600
                 hover:text-blue-800
                 transition duration-200
                  ease-in-out'>
                    Forgot Password?
                    </Link>
              </p>
            </div>
            <button type="submit"
              className='w-full bg-blue-600 text-white 
              px-7 py-3 text-sm font-medium uppercase rounded
              shadow-md hover:bg-blue-700 transition duration-150
              ease-in-out hover:shadow-lg active:bg-blue-800'>
                Sign Up
            </button>
            <div className='flex items-center 
                my-4 before:border-t before:flex-1
                before:border-gray-300
                after:border-t after:flex-1
                after:border-gray-300'>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>
            <OAuth/>
          </form>
        </div>
      </div>
    </section>
  )
}
