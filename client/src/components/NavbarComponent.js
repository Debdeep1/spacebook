import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./styles/navbar.css"
import {useNavigate} from 'react-router-dom'

function NavbarCompo() {
  const navigate = useNavigate()
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className='Logo NavItemLinks' href="/">SpaceBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='NavItemLinks' href="/">Home</Nav.Link>
            <Nav.Link className='NavItemLinks' href="/profile">Profile</Nav.Link>
            <NavDropdown title="Action" id="basic-nav-dropdown">
            <NavDropdown.Item className='NavItemLinks' href="/create">
                Create Post
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='NavItemLinks' onClick={()=>{
                localStorage.clear(); navigate(`/login`) }}>LogOut</NavDropdown.Item>
              <NavDropdown.Item className='NavItemLinks' href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item className='NavItemLinks' href="/signup">
                Sign Up
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCompo;