import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  useEffect(() => {
    const submitFeedback = async () => {
      if (email && feedback) {
        try {
          const response = await fetch(
            "https://mdishidatabase.vercel.app/form",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, feedback }),
            }
          );

          if (!response.ok) {
            throw new Error("Failed to submit feedback");
          }

          console.log("Feedback submitted successfully");
          setEmail("");
          setFeedback("");
        } catch (error) {
          console.error("Error submitting feedback:", error.message);
        }
      }
    };

    submitFeedback();
  }, [email, feedback]);

  return (
    <footer className="footer-container">
      <div className="contact-form">
        <h2>Feedback</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            required
          ></textarea>
          {/* Removed onSubmit handler from form */}
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="social-media">
        <a href="https://www.facebook.com">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com">
          <i className="fa fa-instagram"></i>{" "}
        </a>
        <a href="https://www.x.com">X</a>
      </div>

      <div className="address">38 Street, Apa Kanairo, Nairobi , Kenya</div>
    </footer>
  );
};

export default Footer;
