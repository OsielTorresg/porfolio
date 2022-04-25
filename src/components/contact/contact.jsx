import { useState, useRef } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1wh19fb",
      "template_1gikxqq",
      form.current,
      "JFuMwY9h1BX-pQsHz"
    );
    alert("Thank you for submitting a message.");
    e.target.reset();
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="./assest/handshake.jpeg" alt="hand" />
      </div>
      <div className="right">
        <h2>CONTACT ME</h2>
        <form onSubmit={sendEmail} ref={form}>
          <input
            type="email"
            placeholder=" Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder=" Your Message"
            name="user_message"
            required
          ></textarea>
          <button type="submit" name="message">
            Send
          </button>
          {message && <span>Thanks, I'll reply to you ASAP</span>}
        </form>
      </div>
    </div>
  );
}
