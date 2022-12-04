import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "../styles/LogOut.module.css"

const LogOut = () => {

    const nav = useNavigate()
    var email = JSON.parse(localStorage.getItem("cointag-user-email"));

    const handleClick = () => {
nav("/login")
    }


  return (
    <div>
<Box className={styles.container}>
    <Heading className={styles.head}>Hi,   {email}</Heading>
    
</Box>
<button onClick={handleClick} className={styles.btn}>Log Out</button>

    </div>
  )
}

export default LogOut