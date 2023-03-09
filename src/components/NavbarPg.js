import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarPg = () => (

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className=" border-bottom  ">
    <Container>
      <Navbar.Brand href="/" className=" fw-bolder fs-3">
        <img
          alt=""
          src=""
          width="50"
          height="40"
          className="d-inline-block align-top"
        />
        {' '}
        Space Travelers&lsquo; Hub
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto  flex-grow-1 pe-3 justify-content-end ">
          <NavLink
            to="missions"
            end
            className={({ isActive }) => (isActive ? 'activeLink' : 'nonActiveLink')}
          >
            Missions
          </NavLink>
          <NavLink
            to="my-profile"
            className={({ isActive }) => (isActive ? 'activeLink' : 'nonActiveLink')}
          >
            My Profile
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

);

export default NavbarPg;
