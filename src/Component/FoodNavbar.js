import React, { useState } from 'react'
import user from './images/user.png'
import knife from './images/knife.png'
import { Link,Outlet } from 'react-router-dom'
import shoppingcart from './images/shopping-cart.png'
import { Navbar,Container,Nav,Badge,Modal,Button } from 'react-bootstrap'
import { useParams } from 'react-router' 
import { useSelector } from 'react-redux'
import './style.css'


const FoodNavbar = () => {
  const [state, setState] = useState(false)
  const {id} = useParams();
  const openModal = () => setState(true);
  const closeModal = () => setState(false);

  const num = useSelector((state)=> state.handleCart)
  return (
    <>
      <Navbar variant='dark' fluid className="navbar fixed-top navbg shadow-lg scrolling-navbar">
        <Container fluid >
          <Navbar.Brand href="#home" ><img
              alt=""
              src={knife}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
             Rohit's Resturant
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end auto">
            <Nav>
              <Nav.Link as={Link} to='/login' ><img src={user} alt="cart" width='25px'/></Nav.Link>
              <Nav.Link onClick={openModal}><img src={shoppingcart} alt="cart" width='25px'/><span><Badge pill bg="danger"className='edit-badge' >{num.length}</Badge></span></Nav.Link>                
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal  show={state} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>total itemv: <b>3</b></Modal.Body>
        <Modal.Footer>
          <Button variant="navbg" onClick={closeModal}><Nav.Link as={Link} to='/thankyou' className='placr-order'>Place order</Nav.Link></Button>
        </Modal.Footer>
      </Modal>
      <Outlet>
      </Outlet>
    </>
  )
}

export default FoodNavbar