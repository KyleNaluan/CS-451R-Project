import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#006649", padding: "0.5rem 1rem", color: 'white'}}>
      <Container fluid>
        <Navbar.Brand href="#" className="fw-bold">BankApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#accounts">Accounts</Nav.Link>
            <Nav.Link href="#budget">Budget Tracking</Nav.Link>
            <Nav.Link href="#transfer">Transfer</Nav.Link>
            <Nav.Link href="#expenses">Expenses</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#profile">
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
