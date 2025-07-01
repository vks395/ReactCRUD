import { Outlet, Link, Navigate, redirect } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col } from "reactstrap";
import { useState } from "react";
import "./Layout.css";

const LayoutFooter = () => {
    return (
        <footer className="bg-dark text-white text-center py-3 mt-4">
            <Container>
                <Row>
                    <Col md="6" sm="12" className="mb-2 mb-md-0">
                        <p>&copy; {new Date().getFullYear()} MyApp. All Rights Reserved..</p>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
}
const LayoutMain = () => {
    return (<main>
        <Container className="mt-4">
            <Row>
                <Col xs="12">
                    <Outlet />
                </Col>
            </Row>
        </Container>
    </main>)
}
const Layout = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <>
            {/* Navbar Section */}
            <header>
                <Navbar color="dark" dark expand="md" className="shadow-lg">
                    <Container>
                        <button className="navbar-toggler" type="button" onClick={toggleMobileMenu}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <NavbarBrand href="/">MyApp </NavbarBrand>
                        <Nav className="me-auto d-none d-md-flex" navbar>

                            <NavItem>
                                <NavLink tag={Link} to="/"><i className="fas fa-home"></i>
                                    Home
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={Link} to="/mypassanger"><i className="fas fa-user"></i> My Passanger</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={Link} to="/logout"><i className="fas fa-logout"></i> Signout</NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </header>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <Nav vertical>
                    <NavItem>
                        <NavLink tag={Link} to="/" onClick={toggleMobileMenu}><i className="fas fa-home"></i> Sign in</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink tag={Link} to="/mypassanger" onClick={toggleMobileMenu}><i className="fas fa-user"></i> My Passanger</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink tag={Link} to="/logout" onClick={toggleMobileMenu}><i className="fas fa-logout"></i> Signout</NavLink>
                    </NavItem>
                </Nav>
            </div>

            {/* Main Content Section */}

            <LayoutMain />
            {/* Footer Section */}
            <LayoutFooter />

        </>
    );
};

export default Layout;