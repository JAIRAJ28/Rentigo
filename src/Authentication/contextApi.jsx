import React, {useState} from 'react'

export  const AuthContext=React.createContext();

export default function AuthContextProvider({children}) {
  const [isAuth,setAuth]=React.useState(true);
  const[alldata,setData]=React.useState([]);
  const [token,setToken]=React.useState("");
  const [loading,setLoading]=React.useState(false);
  const [error,setError]=React.useState("null");
  
  const togglleAuth=(data)=>{
   setAuth(data)
  }

const toggelToken=(tok)=>{
  setToken(tok)
  console.log(token)
}
const toggleLoading=()=>{
  setLoading(!loading)
}
const data=(item)=>{
  setData(item)
  
}
const err=(e)=>{
  setError(e)
}
  
  return (
    <AuthContext.Provider value={{alldata,data,token,toggelToken,loading,toggleLoading,error,err,isAuth,togglleAuth}}>
    <div>
    {children}
    </div>
    </AuthContext.Provider>
  )
}