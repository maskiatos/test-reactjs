import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"; //import Link để dùng ở dưới để điều hướng trang mà không bị reload lại

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {/*<Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="users">Users</Nav.Link>
                    <Nav.Link href="admins">Admin</Nav.Link>
                    Nếu viết như trên thì khi bấm vào Home hay Users hay Admin đều sẽ reload lại trang, dùng <Link> để không reload 
                    phải dùng <Link> import vào ở đây để không reload như sau */}
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/users" className='nav-link'>Users</Link>
                    <Link to="/admins" className='nav-link'>Admin</Link>
                </Nav>
                <Nav>
                    <NavDropdown title="Settings" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;