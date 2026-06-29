import { useState } from "react";
import "../styles/Contact.css";

import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("https://portfolio-backend-ydea.onrender.com/api/contact", 
       {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Backend not connected. Please try again.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-heading">Contact Me</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Let's Connect</p>

          <div className="contact-icons">
            <a
              href="mailto:vkrahul225@gmail.com"
              className="icon email"
              aria-label="Email"
            >
              <MdEmail />
            </a>

            <a
              href="https://www.linkedin.com/in/kyathi-rahul/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;