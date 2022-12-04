import React, { useState } from 'react'

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  
   const  Login =() => {

    const [email, setEmail] = useState("");
    const [pass,setPass] = useState("");
    const[msg,setMsg] = useState("");

    const nav = useNavigate()

    const handleSubmit = () => {
        axios.post('http://localhost:5000/user/login', {
            email: email,
            password: pass
          })
          .then(function (response) {
            console.log(response.data);
            if(response.data.token){
                alert("Login Success");
                localStorage.setItem("cointag-user-email",JSON.stringify(email))
                nav("/logout")
            }
            else{
                setMsg(response.data.msg)
            }
           
          
       
          })
          .catch(function (error) {
            console.log(error);
            alert(error)
           
          });
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={10} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading color={"teal"} fontSize={'4xl'}>Please Login to your account</Heading>
            
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={10} alignItems={'center'}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input w={350} margin="10px" type="email" onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input w={350} margin="10px" type="password" onChange={(e) => setPass(e.target.value)} />
              </FormControl>
              <Text color="red" fontSize='lg'  as='u'>{msg}</Text>
              <Stack spacing={10}>
                
                <Button
                w={100}
                  bg={'teal.400'}
                  color={'white'}
                  _hover={{
                    bg: 'white',
                    color : "teal"
                  }}
                  onClick={handleSubmit}
                  >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }

export default Login