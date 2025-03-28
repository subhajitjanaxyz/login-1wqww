
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export function Header() {
  const login=useSelector((state)=>state.authx);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="m-3">Home</NavLink>
            <NavLink to="/login" className="m-3">login</NavLink>
            <NavLink to="/a" className="m-3">Pricing</NavLink>
          </Nav>
          <div className='text-white'>{login &&"YOUR PROFILE"}</div>
        </Container>
      </Navbar>
      
    </>
  );
}

