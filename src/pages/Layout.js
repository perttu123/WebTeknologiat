import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand >My Website</Navbar.Brand>
        <Nav className="me-auto">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/blogs" className="nav-link">Blogs</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;