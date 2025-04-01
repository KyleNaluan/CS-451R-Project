import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col, Container } from "react-bootstrap";

function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.text();
      alert(result);
  
      if (response.ok) {
        navigate("/login");
      }
    } catch (err) {
      console.error("Registration failed:", err);
      alert("Registration error" + err.message);
    }
  };
  

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="shadow-lg rounded p-4 bg-white" style={{ width: "750px" }}>
        <Col>
          <h2 className="fw-bold text-center">Create an Account</h2>
          <p className="text-muted text-center">Fill in your details below</p>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3 text-start">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="fName" value={formData.fName} onChange={handleChange} placeholder="Enter first name" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3 text-start">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lName" value={formData.lName} onChange={handleChange} placeholder="Enter last name" required />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3 text-start">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3 text-start">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter username" required />
            </Form.Group>
            <Form.Group className="mb-3 text-start">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password" required />
            </Form.Group>
            <Form.Group className="mb-3 text-start">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm password" required />
            </Form.Group>
            <Form.Group className="mb-3 text-start">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
            </Form.Group>
            <Button type="submit" className="w-100 text-white" style={{ backgroundColor: "#006649" }}>Register</Button>
          </Form>
          <hr />
          <p className="text-center text-muted">
            <strong>Already have an account?</strong> 
            <Button variant="link" onClick={() => navigate("/login")}>Login</Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Registration;
