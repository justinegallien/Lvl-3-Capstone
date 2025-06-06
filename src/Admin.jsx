import React, { useEffect } from "react";
import DisplayMessages from "./Components/DisplayMessages";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { deleteMessage, scanMessages } from "./dynamo";
import { useState } from "react";

export default function Admin() {
  
  async function handleDelete(id) {
    await deleteMessage(id);
    setMessages((prev) => prev.filter((message) => message.id !== id));
  }
  const [messages, setMessages] = useState([]);

    useEffect(() => {
      scanMessages().then(setMessages);
    }, []);
  
  return (
    <div className="d-flex flex-column justify-content-between main">
      <Header />
      <DisplayMessages onDelete={handleDelete} messages={messages} />
      <Footer />
    </div>
  );
}
