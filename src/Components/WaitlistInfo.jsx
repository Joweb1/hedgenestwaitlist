import "../Css/WaitlistInfo.css";

const WaitlistInfo = () => {
  return (
    <div className="waitlist-info-container">
      <h1 className="hero-title">
  Your Naira is losing <br />
  value. <span>Nest it before it</span> <br />
  <span>slips.</span>
</h1>

      
      <div className="info-section">
        <div className="info-icon"></div>
        <div className="info-content">
          <p>
      <span className="info-label">The problem.</span>{" "}
      Inflation and a sliding Naira quietly eat your savings. Many young
      Nigerians save in an account that loses purchasing power every single
      month, and investing feels gated behind jargon and big minimums.
    </p>
        </div>
      </div>

      <div className="info-section">
        <div className="info-icon"></div>
        <div className="info-content">
          <p>
      <span className="info-label">How HedgeNest helps.</span>{" "}
      Smart Saving Vaults build the saving habit for you, beginner-friendly
      investments grow the balance, and one-tap Naira to USDT conversion
      hedges what you hold, all in a single, simple app.
      </p>
        </div>
      </div>

      <div className="waitlist-bonus">
        <h2>Your waitlist bonus</h2>
        <ul>
          <li>₦5,000 bonus savings credit into your first Smart Vault</li>
          <li>
            Zero conversion fees on Naira → USDT for your first 3 months
          </li>
          <li>
            Earn ₦2,000 for every friend who joins with your referral link
          </li>
          <li>Priority access ahead of the public launch</li>
        </ul>
      </div>
    </div>
  );
};

export default WaitlistInfo;