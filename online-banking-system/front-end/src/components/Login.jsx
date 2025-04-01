import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const user = await response.json();
        console.log("Login success:", user);
        navigate("/dashboard");
      } else {
        const message = await response.text();
        alert("Login failed: " + message);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Login request failed.");
    }
  };

  return (
    <div className="login-page d-flex flex-column vh-100">
      {/* Green Header */}
      <div className="w-100 position-absolute top-0 start-0" style={{ backgroundColor: "#006649", height: "100px" }}></div>
      <Container className="d-flex justify-content-center align-items-center flex-grow-1">
        {/* Login Form */}
        <Row className="shadow-lg rounded overflow-hidden" style={{ width: "750px" }}>
          <Col className="p-4 bg-white">
            <h2 className="fw-bold">Welcome Back!</h2>
            <p className="text-muted">Enter login details below</p>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Email or Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={loginData.username}
                  onChange={handleChange}
                  placeholder="Enter email or username"
                />
              </Form.Group>
              <Form.Group className="mb-3 text-start">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                />
              </Form.Group>
              <div className="text-end mb-3">
                <a href="#" className="text-primary" style={{ fontSize: "small" }}>Forgot Password?</a>
              </div>
              <Button type="submit" className="w-100 text-white" style={{ backgroundColor: "#006649" }}>Login</Button>
            </Form>
            <hr />
            <p className="text-center text-muted">
              <strong>Don’t have an account?</strong>
              <Button variant="link" onClick={() => navigate("/register")}>Sign up</Button>
            </p>
          </Col>
          <Col className="rounded-end d-none d-md-block" style={{ backgroundColor: "#005f43", width: "50%" }}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
