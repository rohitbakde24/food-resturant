import React from 'react'
import { Container,Form,Button } from 'react-bootstrap'
import '../style.css'

const Login = () => {
  return (
    <>
        <Container fluid className=' vh-100 border d-flex align-items-center justify-content-center bg-gradient'>
            <Container className='w-50 bg-white p-5 rounded shadow'>
                <h2 className='text-center'>Login</h2>
                <div >
                <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='text-left'>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className='bg-btn' type="submit">
    Submit
  </Button>
</Form>
<p className='text-center'>New to Computer Services ? <a href='/register'>Register</a></p>
</div>
            </Container>
        </Container>
        
    </>
  )
}

export default Login