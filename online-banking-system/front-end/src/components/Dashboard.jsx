import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import NavBar from "./NavBar";

function Dashboard() {
  return (
    <>
      <NavBar />
      <Container fluid className="mt-4 px-4">
        <h2 className="fw-bold">Welcome User!</h2>
        <Row>
          {/* Accounts */}
          <Col md={8}>
            <Card className="shadow-sm" style={{ height: "572px" }}>
              <Card.Body style={{ overflowY: "auto" }}>
                <Card.Title>Accounts</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* Transfer, Budget, Activity */}
          <Col md={4}>
            <Card className="shadow-sm mb-3" style={{ height: "180px" }}>
              <Card.Body>
                <Card.Title>Make a Transfer</Card.Title>
              </Card.Body>
            </Card>

            <Card className="shadow-sm mb-3" style={{ height: "180px" }}>
              <Card.Body>
                <Card.Title>Budget Overview</Card.Title>
              </Card.Body>
            </Card>

            <Card className="shadow-sm" style={{ minHeight: "180px" }}>
              <Card.Body>
                <Card.Title>Recent Activity</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
