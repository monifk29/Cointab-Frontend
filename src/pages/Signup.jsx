import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'



const Signup = () => {

    const [email, setEmail] = useState("");
    const [pass,setPass] = useState("");

    const nav = useNavigate();


   const handleSubmit = () => {
        axios.post('http://localhost:5000/user/reg', {
            email: email,
            password: pass
          })
          .then(function (response) {
            console.log(response);
            alert("SingUp success")
          nav("/login")
          })
          .catch(function (error) {
            console.log(error);
           
          });
    }

  return (
    <div>Signup
{/* <div>
<input type="email" onChange={(e) => setEmail(e.target.value)} />
<input type="password" onChange={(e) => setPass(e.target.value)}/>

<button onClick={handleSubmit}>submit</button> */}
{/* </div> */}
<Flex
      minH={'70vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
<Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => setPass(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
           
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}>
                  
                Register
              </Button>
            </Stack>
          </Stack>
        </Box>
        </Stack>
    </Flex>

    </div>
  )
}

export default Signup