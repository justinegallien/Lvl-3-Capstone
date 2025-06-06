import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Contact({show, onHide, form, onChange, onSave}) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Connect With Me:</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={form.name} onChange={onChange}  />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Ideal Session Date</Form.Label>
              <Form.Control name="date" value={form.date} onChange={onChange} type="date" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                value={form.email}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                name="message"
                value={form.message}
                onChange={onChange}
                as="textarea"
                rows={5}
              />
                <small id="messageinfo">
           Please add any relevant details about the session that you
           would like to schedule.</small>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onHide} variant="secondary">
            Cancel
          </Button>
          <Button onClick={onSave} variant="info">
            Send Message
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
