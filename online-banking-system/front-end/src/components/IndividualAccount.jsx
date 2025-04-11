import React, { useState } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

import { Button, Container, Row, Col, Modal, Form } from "react-bootstrap";

function IndividualAccount() {
    const { accountId } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [amount, setAmount] = useState("");

    const handleAddBalance = () => {
        setShowModal(false);
        setAmount("");
      };

    return (
        <>
            <NavBar />
            <Container fluid className="mt-4 px-4">
                <Row style={{ minHeight: "75vh" }}>
                    <Col md={4} className="d-flex flex-column justify-content-between border-end pe-4">
                        <div>
                            <h4 className="fw-bold mb-3">ACCOUNT *XXXX</h4>

                            <div className="mb-2 d-flex justify-content-between">
                                <span className="text-muted">ACCOUNT</span>
                                <span>XXXXXXXXXX</span>
                            </div>
                            <div className="mb-2 d-flex justify-content-between">
                                <span className="text-muted">Available</span>
                                <span>$XXXX.XX</span>
                            </div>
                            <div className="mb-2 d-flex justify-content-between">
                                <span className="text-muted">Current</span>
                                <span>$XXXX.XX</span>
                            </div>
                            <div className="mb-2 d-flex justify-content-between">
                                <span className="text-muted">Routing Number</span>
                                <span>XXXXXXXXXX</span>
                            </div>
                            <div className="mb-2 d-flex justify-content-between">
                                <span className="text-muted">Interest Rate</span>
                                <span>X.X%</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <Button size="lg" className="w-100" onClick={() => setShowModal(true)} style={{ backgroundColor: '#006649', color: "white"}}>
                                Add Balance
                            </Button>
                        </div>
                    </Col>

                    <Col md={8} className="ps-4">
                        <h5 className="fw-bold mb-3">Transaction History</h5>
                    </Col>
                </Row>

                <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Balance</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="balanceAmount">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cancel
                        </Button>
                        <Button onClick={handleAddBalance} style={{ backgroundColor: '#006649', color: "white"}}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
}

export default IndividualAccount;
