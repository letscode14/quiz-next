"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../../utils/auth';
import { toast } from 'react-toastify';
import './page.css'
export default function page() {
    const notify = (message) => toast(message)
   

    const router = useRouter()
    const [user,setUser] =useState({
     
      username:'',
      password:''
    })
  
    const signIn = () => {
       
        if(user.username ==''){
          return notify('Provide the user Name')
        }
        if(user.password ==''){
            return notify ('Provide password')
        }

        if(user.username !== 'arjun' && user.password !=='arjun'){
            return notify('invalid credentials')
        }


      login({user})
      router.push('/master')
       
    }
    return (

      <div className="vh-100 vw-100 d-flex align-items-center justify-content-center ">
        <div className="input-box">
          <div className="text-center mb-5">
            <label className="fw-bold fs-3">LOGIN</label>
          </div>
  
          <div className="form-floating mb-3">
            <input onChange={(e) => setUser({...user,username:e.target.value})} type="email" className="form-control" id="floatingInput" ></input>
            <label >User Name</label>
          </div>
         
          <div className="form-floating">
            <input onChange={(e) => setUser({...user,password:e.target.value})} type="password" className="form-control" id="floatingPassword"></input>
            <label >Password</label>
          </div>
          <div className="text-center">
            <button onClick={signIn} className="btn btn-danger mt-2"> Sign In</button>
          </div>
         
          
        </div>
      </div>
    )
  }
