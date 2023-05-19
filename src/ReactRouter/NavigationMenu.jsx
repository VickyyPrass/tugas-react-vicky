import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";

function Navigation() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <Link to="/" className="link-menu">
                            ReddBoom
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">
                                <Link to="/" className="link-menu">
                                    Home
                                </Link>
                            </Nav.Link>

                            <Nav.Link href="#">
                                <Link to="/about" className="link-menu">
                                    About
                                </Link>
                            </Nav.Link>

                            <Nav.Link href="#">
                                <Link to="/skill" className="link-menu">
                                    Skills
                                </Link>
                            </Nav.Link>

                            <Nav.Link href="#">
                                <Link to="/education" className="link-menu">
                                    Education
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />
        </>
    );
}

export default Navigation;
