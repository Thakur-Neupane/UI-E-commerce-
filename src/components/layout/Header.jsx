import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logoutUserAction } from "../../features/users/userAction";
export const Header = () => {
  const dispatch = useDispatch();

  // remove all tokens
  // logout from front end
  // ...user: {}
  // --remove jwts
  // logout from backend
  // --remove jwts from both table

  return (
    <Navbar expand="md" className="bg-dark " data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title={<FaUser />} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={dispatch(logoutUserAction)}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
