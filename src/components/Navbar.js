import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


const NavbarPage = () => {

    const navigate=useNavigate()

  return (
    <>
      <Navbar  style={{borderBottom:"2px solid red"}} bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand onClick={()=> navigate("/")} href="#home"><span style={{color:"purple"}}>Clarusway</span> Web Design</Navbar.Brand>
          <Nav >
            <Nav.Link onClick={()=> navigate("/")} href="#home">Home</Nav.Link>
            <Nav.Link onClick={()=> navigate("/about")} href="#features">About</Nav.Link>
            <Nav.Link onClick={()=> navigate("/services")} href="#pricing">Services</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default NavbarPage