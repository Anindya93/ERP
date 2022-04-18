import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';


export default function Header() {
    return (
        <>

            <Navbar bg="primary" variant="dark">
                <Container>
                    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                    <img className='logo' src='../../../../../Images/Logo.jfif' alt='logo'/>
                    <Nav className="me-auto space">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link as={Link} to="/Registration">Registration</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
