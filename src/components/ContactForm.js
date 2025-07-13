import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <h2>CONTACT</h2>
      <p className="company-name">
        NEXTGEN INDIA LIMITED <br />
        <span>(Formerly known as "NextGen Impex (India) Private Limited")</span>
      </p>

      <h3>Inquiries</h3>
      <p>For any inquiries, questions or commendations, please fill out the following form:</p>

      <form className="contact-form">
        <label>Enter Your Name</label>
        <input type="text" placeholder="NextGen" />

        <label>Enter Your Email</label>
        <input type="email" placeholder="Email" />

        <label>Phone</label>
        <input type="tel" placeholder="Phone" />

        <label>Enter Your Subject</label>
        <input type="text" placeholder="Subject" />

        <label>Enter Your Message</label>
        <textarea rows="4" placeholder="Message"></textarea>

        <button type="submit" className="submit">Submit</button>
      </form>

      <div className="contact-info">
        <h3>Head Office</h3>
        <p>
          2nd Floor, Saraf Chambers, Mount Road, Sadar, Nagpur - 440001 Maharashtra India <br />
          <strong>Ph. No.:</strong> 1800-123-0854
        </p>

        <h3>Employment</h3>
        <p>
          To apply for a job with NextGen Lands, please send a cover letter together with your C.V. to: <br />
          <a href="mailto:info@nextgenlands.com">info@nextgenlands.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
