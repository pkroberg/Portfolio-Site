import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact">
      <h1>Contact</h1>
      <div>
        <p>Let's get in touch!</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Insert your name here..."
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="What's your email address?"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            placeholder="What would you like to say?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="send">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
