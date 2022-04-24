import React from 'react';
import { Navbar, Nav, Container,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi"



export default function Header() {
    const navigate = useNavigate();

  const LogOut = () => {

    window.sessionStorage.clear()

    alert("You have successfully logged out your account. ")
    navigate('/Login')
  }
    return (
        <>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                        <img className='logo' src='../../../../../Images/Logo.jfif' alt='logo' />
                        <Nav className="me-auto space">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/features">Features</Nav.Link>
                            <Nav.Link as={Link} to="/Contact">ContactUs</Nav.Link>
                            <Nav.Link as={Link} to="/Registration">Registration</Nav.Link>
                            <Nav.Link as={Link} to="/Login">Login</Nav.Link>

                            <Button variant="outline-dark" style={{ color:"#fff" }} onClick={LogOut}>
              <i style={{ marginRight: "15px", fontSize: "22px",  }}> <FiLogOut/> </i>Log Out</Button>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
