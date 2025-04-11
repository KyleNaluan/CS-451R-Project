import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";

const ProfileToggle = React.forwardRef(({ onClick }, ref) => (
  <div
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
    style={{
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      backgroundColor: "#ccc",
      cursor: "pointer",
    }}
  />
));

function NavBar() {
  const navigate = useNavigate();

  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#006649", padding: "0.5rem 1rem", color: 'white' }}>
      <Container fluid>
        <Navbar.Brand href="#" className="fw-bold">Team7Banking</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/dashboard")}>Dashboard</Nav.Link>
            <Nav.Link onClick={() => navigate("/accounts")}>Accounts</Nav.Link>
            <Nav.Link>Budget Tracking</Nav.Link>
            <Nav.Link>Transfer</Nav.Link>
            <Nav.Link>Expenses</Nav.Link>
          </Nav>
          <Dropdown align="end">
            <Dropdown.Toggle as={ProfileToggle} />
            <Dropdown.Menu>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => navigate("/login")}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
