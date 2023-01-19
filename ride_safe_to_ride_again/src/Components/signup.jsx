import Footer from "../landingpage/Footer/Footer";
import "./Componentscss/signup.css"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

  export default function Registration() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <>
    
      
      <Flex
        minH={'100vh'}
        
        align={'center'}
        justify={'center'}
        color={"white"}
        bg={useColorModeValue('gray.50', 'gray.500')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}
            color={"blue"}
            >
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'black'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={"black"}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
               
               
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel color={"#d3cefc"}>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>




                <Box>
                  <FormControl id="lastName">
                    <FormLabel color={"#d3cefc"}>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>



              </HStack>

              <FormControl id="number" isRequired>
                <FormLabel color={"#d3cefc"}>Mobile Number</FormLabel>
                <Input type="number" />
              </FormControl>


              <FormControl id="email" isRequired>
                <FormLabel color={"#d3cefc"}>Email address</FormLabel>
                <Input color={"white"} type="email" />
              </FormControl>




              <FormControl id="password" isRequired>
                <FormLabel color={"#d3cefc"}>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>



                  </InputRightElement>
                </InputGroup>
              </FormControl>
<hr />
             <Text fontWeight={"bold"}
             color={"cyan"}
             >
              For Faster Service's ,Please Provide
             </Text>

<FormControl id="address1" isRequired>
                <FormLabel color={"#d3cefc"}>Address 1</FormLabel>
                <Input color={"white"} type="text" />
              </FormControl>

              <FormControl id="address2" isRequired>
                <FormLabel color={"#d3cefc"}>Address 2</FormLabel>
                <Input color={"white"} type="text" />
              </FormControl>
   
   <HStack>
   <FormControl id="pin-code" isRequired>
                <FormLabel color={"#d3cefc"}>Zip Postal Code</FormLabel>
                <Input color={"white"} type="number" />
              </FormControl>

              <FormControl id="pin-code" >
                <FormLabel color={"#d3cefc"}>AWD Number (optional)</FormLabel>
                <Input color={"white"} type="number" />
              </FormControl>
   </HStack>


              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.500'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.700',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'} color={"white"}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>

   
      



      </Flex>

      
     <Footer/>
  </>
    );
  }


    
