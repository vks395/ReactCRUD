import { Outlet, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col } from "reactstrap";
import "./Layout.css"; // Optional external CSS for additional styling

const Layout = () => {
    return (
        <>
            {/* Navbar Section */}
            <header>
                <Navbar color="dark" dark expand="md" className="shadow-lg">
                    <Container>
                        <NavbarBrand href="/">MyApp</NavbarBrand>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/task">Task</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/passanger">Passanger</NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </header>

            {/* Main Content Section */}
            <main>
                <Container className="mt-4">
                    <Row>
                        <Col xs="12">
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            </main>

            {/* Footer Section */}
            <footer className="bg-dark text-white text-center py-3 mt-4">
                <Container>
                    <Row>
                        <Col md="6" sm="12" className="mb-2 mb-md-0">
                            <p>&copy; {new Date().getFullYear()} MyApp. All Rights Reserved.</p>
                        </Col>
                        <Col md="6" sm="12">
                            <div className="social-icons">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Layout;
