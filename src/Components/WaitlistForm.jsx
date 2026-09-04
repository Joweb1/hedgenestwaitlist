import {useState} from "react";
import "../Css/WaitlistForm.css";

const WaitlistForm = () => {
const [showModal, setShowModal] = useState(false);
  return (
    <section className="waitlist-form">
      <h1>Join the waitlist</h1>
      <p className="form-description">
        Takes 20 seconds. We'll send your invite and referral reward link by
        email.
      </p>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          placeholder="Adaeze"
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          placeholder="Agnes"
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="you@email.com"
        />
      </div>

      <div className="form-group">
        <label>
          What amount range do you want to save, invest or hold in stablecoin?
        </label>
        <select>
          <option>₦5,000 - ₦100,000 annually</option>
          <option>₦100,000 - ₦500,000 annually</option>
          <option>₦500,000 - ₦1,000,000 annually</option>
          <option>₦1,000,000 and above annually</option>
        </select>
      </div>

      <button
  type="button"
  className="reserve-button"
  onClick={() => setShowModal(true)}
>
  Reserve my spot →
</button>

<p className="terms-text">
  By joining, you agree to our <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>.
</p>

      {showModal && (
  <div className="modal-overlay">
    <div className="success-modal">
      <button
        className="close-button"
        onClick={() => setShowModal(false)}
      >
        x
      </button>

      <div className="success-icon">
        ✓
      </div>
      <h2>You're on the list, Adaeze!</h2>

      <p className="success-message">
        We've reserved your spot. Your referral link and ₦5,000
        bonus details are on their way to{" "}
        <strong>bchi443@gmail.com.</strong>
      </p>

      <button className="whatsapp-button">
        <span className="whatsapp-icon">◉</span>
        Join our WhatsApp Community
      </button>

      <div className="referral-card">
        <h3>Your referral link — ₦2,000 per friend</h3>
        <div className="referral-link-container">
          <p className="referral-link">
            https://referral-code--d3f03e8g7o...
          </p>

          <button className="copy-button">
            📋 Copy
          </button>
        </div>
      </div>

      <button
        className="homepage-button"
        onClick={() => setShowModal(false)}
      >
        Back to Homepage
      </button>
    </div>
  </div>
)}
    </section>
  );
};

export default WaitlistForm;
