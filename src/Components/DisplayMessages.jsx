import React from "react";
import { Button, ListGroup } from "react-bootstrap";

export default function DisplayMessages({ messages, title, onDelete }) {
  if (messages.length == 0) return <h2>There are no new messages!</h2>;

  return (
    <div>
      <h2>{title}</h2>
      <ListGroup>
        {messages.map((message) => (
          <ListGroup.Item key={message.id}>
            <div>
              <strong>{message.name}</strong> - {message.email}, Date:{" "}
              {message.date} , {message.message}
              {""}
            </div>

            <Button
              onClick={() => onDelete(message.id)}
              variant="info"
              size="sm"
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
