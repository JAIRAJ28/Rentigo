import React from "react"
import { Switch,FormLabel,Flex,Box,Text,Link ,Input,Button,Image,SimpleGrid} from "@chakra-ui/react"
import "./Componentscss/login.css"



export const Login=()=>{


let [yeno,setYesNo]=React.useState(false)
const HandelClick=()=>{
setYesNo(!yeno)
}
    return(
        <>
        <div className="Loginup  hey"
        style={{
            fontFamily:"  gothic-italic"
        }}
        >
        <h1
        style={{
            fontWeight:"800",
            fontSize:"20px",
            marginDown:"30px"
        }}
        >LOG INTO YOUR RENTIGO ACCOUNT.</h1>
            <form 
            bg={"linear-gradient(0deg,rgb(21, 20, 20),rgb(57, 56, 56))"}
            >
               
                <div>
                <Input mt={"20px"} mb={"30px"} type="text" variant='filled' placeholder="Username/Wizard Number" isRequired="true" />
                   
                    <br />

                    <Input type="number" variant='filled' placeholder="Password (Case Sensitive)" isRequired="true" />
                 
                </div>
               <Flex justifyContent={"space-between"} mt={"20px"} mb={"20px"}>
                <FormLabel htmlFor='email-alerts' >
                    Remember Me
                    </FormLabel>
                    <Box>
                    <Switch id='email-alerts' onChange={HandelClick} />
                    <span>{yeno?"Yes":"No"}</span>
                    </Box>

                    </Flex>

                    <Box mt={"20px"} mb={"20px"}>
                        <Text>This site is protected by reCAPTCHA Enterprise and the Google 
                            <span><Link color={"blue"}> Privacy Policy </Link></span>
                             and  <Link color={"blue"}> Terms of Service </Link>apply.</Text>
                    </Box>
                    <Button w="80%" color={"black"} mt={"10px"} mb={"30px"}>Log In</Button>
              <hr />
       <Flex justifyContent={"space-between"} mt={"20px"}>
        <Link color={"green"}>Forgot UserName</Link>
        <Link color={"green"}>Forgot password</Link>
       </Flex>
     <hr />
      
     </form>


</div>


  

        </>
    )
}



