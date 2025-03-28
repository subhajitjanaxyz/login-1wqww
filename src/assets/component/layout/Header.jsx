
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><NavLink to="/">Home</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="/entry">login</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="/a">Pricing</NavLink></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

