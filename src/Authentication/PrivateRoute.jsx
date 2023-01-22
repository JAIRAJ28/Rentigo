import React from 'react'
import { Cardemos } from '../Components/cardemos'

import { useContext } from 'react'
import { AuthContext } from './contextApi'
import { useNavigate } from 'react-router-dom'
export const PrivateRoute=()=>{
let {isAuth}=useContext(AuthContext)
 let navigate=useNavigate()
if(!isAuth){
    alert("Please Provide Valid Credentials")   
    
}

  return (
    <div>
       {isAuth?<Cardemos/>: navigate('/signin')}  
    </div>
  )
}
