import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col, Container, Alert } from "react-bootstrap";

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

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (!alphanumericRegex.test(formData.username)) {
      setErrorMessage("Username must only contain letters and numbers.");
      return;
    }


    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!passwordRegex.test(formData.password)) {
      setErrorMessage("Password must be at least 8 characters and include an uppercase letter, a number, and a special character.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.text();

      if (response.ok && result === "User registered successfully!") {
        navigate("/login");
      } else {
        setErrorMessage(result);
      }

    } catch (err) {
      console.error("Registration failed:", err);
      setErrorMessage("Registration error: " + err.message);
    }
  };



  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="shadow-lg rounded p-4 bg-white" style={{ width: "750px" }}>
        <Col>
          <h2 className="fw-bold text-center">Create an Account</h2>
          <p className="text-muted text-center">Fill in your details below</p>
          {errorMessage && (
            <Alert key="warning" variant="warning">
              {errorMessage}
            </Alert>
          )}
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
              <Form.Control type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required max={new Date(new Date().setFullYear(new Date().getFullYear() - 16)).toISOString().split("T")[0]} />
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
