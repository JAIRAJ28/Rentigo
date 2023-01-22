import axios from "axios"
import React, { useState,useEffect } from "react";
import { useReducer } from "react";
import { SimpleGrid,Image ,Text,Flex,Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Footer from "../landingpage/Footer/Footer";
// import Carousel from "./Components/Carousel";
// import Data from "./Data.json";
let initialState={
    product:[],
    isLoading:false,
    isError:false,
}
const reducer=(state,action)=>{
    
switch (action.type){
    case "Sucess":{
       return{
        ...state,
        product:action.payload,
        isLoading:false,
        isError:false,
       }
      
    }
    case "Failed":{
        return{
         ...state,
        
         isError:true,
        }
     }
     case "Loading":{
        return{
         ...state,
         isLoading:true,
         
        }
       
     }
    default:{
        return state;
    }
}
}



export const Cardemos=()=>{
    let [page,setPage]=useState(1);
    let [data,setData]=React.useState([]);
    
    const [state,dispatch]=useReducer(reducer,initialState);
        
    const fecthData=(page)=>{
       dispatch({type:"Loading"})
        axios.get(`https://636d2336ab4814f2b279de8f.mockapi.io/meals?limit=10&page=${page}`)
        .then((res)=>{
            setData(res.data)
            dispatch({type:"Sucess",payLoad:res.data})
        })
        .catch((err)=>{
            dispatch({type:"Failed"})
        })
    }
    console.log(data) 
useEffect(()=>{
    fecthData(page)
},[page])

if(state.isLoading){
    return(
        <><Text
        fontWeight={"extrabold"}
        fontSize={"40px"}
        >Loading.....</Text></>
    )
}
  
    return(
    <>
    <div>
      
     
        <SimpleGrid columns={{base:"2",md:"4"}}
        gap={10}
        mt={"30px"}
        mb={"50px"}
        p={"30px"}
        >
        {
            // console.log(state.product)
    data?.map((item)=>(
            
        <div key={item.id}  >
                    <Link to={`/carsales/${item.id}`}>
                    <Image src={item.image}
                    h={"60%"}
                    />
                    </Link>
                    <p>Learn more "CLICK The Image</p>
             
             <Flex
             justifyContent={"space-between"}
             >
                <Text 
                fontSize={"20px"}
                fontWeight={"bold"}
                >{item.title}</Text>
        
                <Button
                color={"yellow"}
                background={"black"}
               onClick={(e)=>{
                let obhj={
                    id:item.id,
                    title:item.title,
                    image:item.image,
                    price:item.price,
                    description:item.description,

                }
                localStorage.setItem("onprocess",JSON.stringify(obhj));
               }}>
               <Link to="/checkout">Rent Me</Link>
                    
                </Button>
               
                </Flex>
        </div>
))
        }
</SimpleGrid>

    <div
        style={{
            width:"20%",
            margin:"auto"
        }}
        >
        <Button isDisabled={page===0} onClick={()=>setPage(page-1)}
        ml={"100px"}
        >
        Prev
        </Button>
     <Button>{page}</Button>
     <Button isDisabled={page===2} onClick={(e)=>{setPage(page+1)
             console.log(e)
      }}>Next</Button>
    </div>

    </div>
    
    {/* <Carousel start={Data.banner.start} /> */}
   
   
    <Footer/>
    </>
)
}