import React, { useState } from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import { Card,Button,Row,Col,Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, delCart } from '../../redux/action'

const Menu = () => {
  const list = MOCK_DATA
  const [inc,setInc] = useState(0)

  const state = useSelector((state)=> state.handleCart)
  const dispatch = useDispatch();
  const addProduct = (item) =>{
    dispatch(addCart(item));
  }

  const delProduct =(item) =>{
    dispatch(delCart(item));
  }


  
  
  
  return (
    <>
    <h1>menu</h1>
    <Container  >
      <Row >
        {
          list.map((item) => (
          <Col className='py-4  text-center' key={item.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.image} width="350px" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.price}
                </Card.Text>
                <Button variant="secondary" onClick={()=>delProduct(item)} className='me-1'>-</Button>
                <Button variant="primary" onClick={()=>addProduct(item)} className='me-1'>+</Button>
              </Card.Body>
            </Card>
          </Col>
          ))
        }
      </Row>
    </Container>
    </>
  )
}

export default Menu