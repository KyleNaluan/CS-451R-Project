import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Form, Container, Row, Col } from 'react-bootstrap';

function Login() {
  return (
    <div className = "login-page">
      {/* Header */}
      <div className="w-100 h-60px position-absolute top-0 start-0" style={{ backgroundColor: "#006649", height: "100px" }}></div>
      
      {/* Centered login form */}
      <Container className="d-flex justify-content-center align-items-center flex-grow-1">
        <Row className="shadow-lg rounded d-flex" style={{ width: "750px", backgroundColor: "#ffffff" }}>
          <Col className="p-4" style={{ width: "50%" }}>
            <h2 className="fw-bold">Welcome Back!</h2>
            <p className="text-muted">Enter login details below</p>
            <Form>
              <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label>Email or Username</Form.Label>
                <Form.Control type="text" placeholder="Enter email or username" />
              </Form.Group>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>
              <div className="text-end mb-3">
                <a href="#" className="text-primary" style={{ fontSize: "small" }}>Forgot Password?</a>
              </div>
              <Button className="w-100 text-white" style={{ backgroundColor: "#006649" }}>Login</Button>
            </Form>
            <hr />
            <p className="text-center text-muted">
              <strong>Don’t have an account?</strong> <a href="#" className="text-primary">Sign up</a>
            </p>
          </Col>
          <Col className="rounded-end" style={{ backgroundColor: "#005f43" }}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
