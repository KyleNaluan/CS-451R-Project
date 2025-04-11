import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Card, InputGroup } from "react-bootstrap";
import NavBar from "./NavBar";

function Transfer() {
    const [formData, setFormData] = useState({
        sourceBank: "",
        transferNote: "",
        accountNumber: "",
        amount: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Transfer Data:", formData);
        // Add transfer submission logic here
    };

    return (
        <>
            <NavBar />
            <Container className="mt-4">
                <h3 className="fw-bold mb-3">Payment Transfer</h3>
                <p className="text-muted">Please provide any specific details or notes related to the payment transfer</p>

                <Card className="p-4 shadow-sm">
                    <Form onSubmit={handleSubmit}>
                        <h5 className="mb-3 fw-semibold">Transfer details</h5>

                        <Form.Group className="mb-3" controlId="sourceBank">
                            <Form.Label>Select Source Bank</Form.Label>
                            <Form.Select name="sourceBank" onChange={handleChange} value={formData.sourceBank}>
                                <option value="">Select Account</option>
                                <option value="checking">Checking - 1234</option>
                                <option value="savings">Savings - 5678</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="transferNote">
                            <Form.Label>Transfer Note (Optional)</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Write a message..."
                                name="transferNote"
                                onChange={handleChange}
                                value={formData.transferNote}
                            />
                        </Form.Group>

                        <h5 className="mb-3 fw-semibold">Bank account details</h5>

                        <Form.Group className="mb-3" controlId="accountNumber">
                            <Form.Label>Recipient's Bank Account Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter the account number"
                                name="accountNumber"
                                onChange={handleChange}
                                value={formData.accountNumber}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="amount">
                            <Form.Label>Amount</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control
                                    type="number"
                                    placeholder="0.00"
                                    name="amount"
                                    onChange={handleChange}
                                    value={formData.amount}
                                />
                            </InputGroup>
                        </Form.Group>

                        <Button variant="custom" type="submit" className="w-100" style={{ backgroundColor: '#006649', color: "white"}}>
                            Transfer Funds
                        </Button>
                    </Form>
                </Card>
            </Container>
        </>
    );
}

export default Transfer;
