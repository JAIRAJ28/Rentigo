import {Button,Center,Checkbox,color,FormControl,FormLabel,Input} from "@chakra-ui/react"
import { useReducer, useState } from "react"
import axios from "axios"
const initialState = {
  name: "",
  ownerName: "",
  address: "",
  areaCode: "",
  rent: "",
  isBachelorAllowed: false,
  isMarriedAllowed: false,
}
const reducer = (state, action) => {
    switch (action.type) {
  
      case "name": {
        return {
          ...state, name: action.payload
        }
      }
      case "password": {
        return {
          ...state, ownerName: action.payload
        }
      }
     
      case "reset": {
        return initialState
      }
      default: {
        return state
      }
    }
  }

export const Admin=()=>{
     
    const [state, dispatch] = useReducer(reducer, initialState)

  const { name, ownerName, address, areaCode, rent, isBachelorAllowed, isMarriedAllowed }=state
  const handleSubmit = () => {
    console.log(state)


    axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`, {
      name: name,
      ownerName: ownerName,
      address: address,
      areaCode: areaCode,
      rent: rent,
      isBachelorAllowed: isBachelorAllowed,
      isMarriedAllowed: isMarriedAllowed

    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });




  }
  return (
      <div className = "addHouseContainer" 
      style={{
        width:"30%",
        padding:"40px",
        textAlign:"center",
        margin:"auto",
        marginTop:"50px",
        borderRadius:"20px",
        backgroundColor:"rgb(89,0,179)",
        color:"black"
      }}
      >
      <h1>Admin</h1>
        

      <form className="form"  >
          <FormControl>
          <Input mt={"20px"} bg={"white"} className="name" placeholder="Name" onChange={(e) => dispatch({ type: "name", payload: e.target.value })} />
          <Input mt={"20px"} bg={"white"} className="ownerName" placeholder="Admin name"
            onChange={(e) => dispatch({ type: "ownerName", payload: e.target.value })}


          />
          <Input mt={"20px"} bg={"white"} className="address" placeholder="password" 
            onChange={(e) => dispatch({ type: "address", payload: e.target.value })}

            />
         
     
              <br />
          <Button mt={"20px"} bg={"red"} className="submitBtn" onClick={handleSubmit}     > Submit</Button>
          </FormControl>
        </form>
      </div>
  )
}