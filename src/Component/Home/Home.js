import React from 'react'
import { Button, Container } from 'react-bootstrap'
import '../style.css'

const Home = () => {
  return (
    <>
    <Container className=' text-center'>
    <h1 className='display-1 mt-5 pt-5'>Welcome to Rohit's<br/> Kitchen</h1>
        <Button className='mt-3 bg-btn'><a href='/menu' className='link'>Go To Menu</a></Button>
    </Container>
        
    </>
  )
}

export default Home