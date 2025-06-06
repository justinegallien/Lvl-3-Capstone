import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Contact from "./Components/Contact";
import { createMessage } from "./dynamo";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Button } from "react-bootstrap";

function Home() {
  const [form, setform] = useState({
    name: "",
    date: "",
    email: "",
    message: "",
  });
  const [messages, setMessages] = useState([]);
  const [show, setshow] = useState(true);

  async function addMessage() {
    if (!form.name || !form.date || !form.email || !form.message) return;
    const message = {
      id: crypto.randomUUID(),
      name: form.name,
      date: form.date,
      email: form.email,
      message: form.message,
    };

    await createMessage(message);
    setMessages((prev) => [...prev, message]);
    setshow(false);
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setform((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }

  return (
    <div className="d-flex flex-column justify-content-between main">
      <Header />
      <h2 className="flashing">I Came. I Saw. I Captured. </h2>
      <main>
        <Button size="lg" variant="info" onClick={() => setshow(true)}>
          Connect With Me!
        </Button>

        <Contact
          onHide={() => setshow(false)}
          form={form}
          onChange={handleChange}
          onSave={addMessage}
          show={show}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
