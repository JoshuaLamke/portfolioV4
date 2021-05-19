import { Navbar, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './navbar.css'
let NavbarComponent = () => {
    return (
       <Navbar id="navbar-container" expand="md">
            <Navbar.Brand className="px-3" style={{color: "#FF5722"}}>Joshua Lamke Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav>
                    <LinkContainer to="/">
                        <Nav.Link className="nav-link px-2">Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link className="nav-link px-2">About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/skills">
                        <Nav.Link className="nav-link px-2">Skills</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/coursework">
                        <Nav.Link className="nav-link px-2">Coursework</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/experience">
                        <Nav.Link className="nav-link px-2">Experience</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/projects">
                        <Nav.Link className="nav-link px-2">Projects</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
       </Navbar>
    )
}

export default NavbarComponent