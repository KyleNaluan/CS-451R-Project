import React, { useState } from "react";
import AccountBox from "./AccountBox";
import NavBar from "./NavBar";
import { Button, Container, Form, Modal } from "react-bootstrap";

function Accounts() {
    const [showModal, setShowModal] = useState(false);
    const [accountType, setAccountType] = useState("Checking");
    const [initialBalance, setInitialBalance] = useState("");

    const handleCreateAccount = () => {
        setShowModal(false);
        setAccountType("Checking");
        setInitialBalance("");
    };

    return (
        <>
            <NavBar />
            <Container className="mt-5 d-flex flex-column align-items-center">
                <h2 className="fw-bold mb-4">Accounts</h2>

                <div className="w-75 p-4 rounded shadow-sm bg-light">
                    <AccountBox type="CHECKING *XXXX" available="4500.00" current="4700.00" />
                    <AccountBox type="SAVINGS *XXXX" available="1500.00" current="1500.00" />

                    <div className="text-center mt-4">
                        <Button size="lg" onClick={() => setShowModal(true)} style={{ backgroundColor: '#006649', color: "white"}}>
                            Create Account
                        </Button>
                    </div>
                </div>

                <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Create New Account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="accountType" className="mb-3">
                                <Form.Label>Account Type</Form.Label>
                                <Form.Select
                                    value={accountType}
                                    onChange={(e) => setAccountType(e.target.value)}
                                >
                                    <option>Checking</option>
                                    <option>Savings</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId="initialBalance">
                                <Form.Label>Initial Balance</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter amount"
                                    value={initialBalance}
                                    onChange={(e) => setInitialBalance(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cancel
                        </Button>
                        <Button onClick={handleCreateAccount} style={{ backgroundColor: '#006649', color: "white"}}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
}

export default Accounts;
