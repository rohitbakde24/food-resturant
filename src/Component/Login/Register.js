import React from 'react'
import { Container,Button,Form } from 'react-bootstrap'
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Register = () => {
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm();
  
  
  const onSubmit = (data) => {
    console.log({data});
  };

  const handleValidate = (value) => {
    const isValid = isValidPhoneNumber(value);
    console.log({ isValid })
    return isValid
  }
 
  return (
    <>
      <Container fluid className=' vh-100 border d-flex align-items-center justify-content-center bg-gradient'>
        <Container className='w-50 bg-white p-5 rounded shadow'>
          <h2 className='text-center'>Create your Account</h2>
            <div >
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className='text-left'>Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="password" />
                </Form.Group>
          
                <form onSubmit={handleSubmit(onSubmit)} className="user-info-form">
       <div>
           <label htmlFor="phone-input">Phone Number</label>
           <Controller
           name="phone-input"
           control={control}
           rules={{
               validate: (value) => handleValidate(value)
           }}
           render={({ field: { onChange, value } }) => (
            <PhoneInput
            value={value}
            onChange={onChange}
            defaultCountry="IND"
            id="phone-input"
            />
           )}
           />
       </div>
       </form>
       <br/>
       
                <Button className='bg-btn' type="submit">
                Submit
                </Button>
              </Form>
              
            </div>
          </Container>
        </Container>
      </>
    )
  }

export default Register