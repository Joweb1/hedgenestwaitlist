import "../Css/WaitlistInfo.css";
import { 
  HiOutlineArrowTrendingDown, 
  HiOutlineShieldCheck, 
  HiOutlineGift, 
  HiCheck 
} from "react-icons/hi2";

const WaitlistInfo = () => {
  return (
    <div className="waitlist-info-container">
      <h1 className="hero-title">
        Your Naira is losing <br />
        value. <span>Nest it before it</span> <br />
        <span>slips.</span>
      </h1>

      {/* The Problem */}
      <div className="info-section">
        <div className="info-icon">
          <HiOutlineArrowTrendingDown className="section-icon problem-icon" />
        </div>
        <div className="info-content">
          <p>
            <span className="info-label">The problem.</span>{" "}
            Inflation and a sliding Naira quietly eat your savings. Many young
            Nigerians save in an account that loses purchasing power every single
            month, and investing feels gated behind jargon and big minimums.
          </p>
        </div>
      </div>

      {/* How HedgeNest helps */}
      <div className="info-section">
        <div className="info-icon">
          <HiOutlineShieldCheck className="section-icon helps-icon" />
        </div>
        <div className="info-content">
          <p>
            <span className="info-label">How HedgeNest helps.</span>{" "}
            Smart Saving Vaults build the saving habit for you, beginner-friendly
            investments grow the balance, and one-tap Naira → USDT conversion
            hedges what you hold, all in a single, simple app.
          </p>
        </div>
      </div>

      {/* Waitlist Bonus */}
      <div className="waitlist-bonus">
        <h2>
          <HiOutlineGift className="bonus-header-icon" /> Your waitlist bonus
        </h2>
        <ul>
          <li>
            <HiCheck className="check-icon" />
            <span>₦5,000 bonus savings credit into your first Smart Vault</span>
          </li>
          <li>
            <HiCheck className="check-icon" />
            <span>Zero conversion fees on Naira → USDT for your first 3 months</span>
          </li>
          <li>
            <HiCheck className="check-icon" />
            <span>Earn ₦2,000 for every friend who joins with your referral link</span>
          </li>
          <li>
            <HiCheck className="check-icon" />
            <span>Priority access ahead of the public launch</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WaitlistInfo;