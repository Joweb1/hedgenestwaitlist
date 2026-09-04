import { useState } from "react";
import "../Css/Header.css";
import logo from "../assets/Hedge.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isAuthenticated = false;
  const user = null;

  const handleNavigation = (tab, route) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
    navigate(route);
  };

  return (
    <header className="header-container">
      <section className="header-wrapper">
        <img
          src={logo}
          alt="HedgeNest Logo"
          className="logo"
          onClick={() => handleNavigation("home", "/")}
        />

        <ul className={`navigation ${isMenuOpen ? "open" : ""}`}>
          <li
            onClick={() => handleNavigation("protect", "/protect")}
            style={{ color: activeTab === "protect" ? "#c9922a" : "" }}
          >
            Protect
          </li>
          <li
            onClick={() => handleNavigation("save", "/save")}
            style={{ color: activeTab === "save" ? "#c9922a" : "" }}
          >
            Save
          </li>
          <li
            onClick={() => handleNavigation("invest", "/investPage")}
            style={{ color: activeTab === "invest" ? "#c9922a" : "" }}
          >
            Invest
          </li>

          {/* MOBILE BUTTONS */}
          <li className="mobile-dropdown-logs">
            {!isAuthenticated ? (
              <>
                <button
                  className="login"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/login");
                  }}
                >
                  Log in
                </button>
                <button
                  className="create"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/signup");
                  }}
                >
                  Create an account
                </button>
              </>
            ) : (
              <button
                className="create"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/dashboard");
                }}
              >
                Dashboard
              </button>
            )}
          </li>
        </ul>

        {/* DESKTOP BUTTONS */}
        <div className="logs">
          {!isAuthenticated ? (
            <>
              <button className="login" onClick={() => navigate("/login")}>
                Log in
              </button>
              <button className="create" onClick={() => navigate("/signup")}>
                Create an account
              </button>
            </>
          ) : (
            <div className="desktop-user-section">
              <button className="create" onClick={() => navigate("/dashboard")}>
                Dashboard
              </button>
              <div className="user-avatar-container" style={{ cursor: "pointer" }}>
                {user?.profilePicture?.url ? (
                  <img
                    src={user.profilePicture.url}
                    alt="Profile"
                    className="user-avatar-img"
                  />
                ) : (
                  <FaUserCircle size={28} className="user-avatar-icon" />
                )}
              </div>
            </div>
          )}
        </div>

        {/* MENU ICON */}
        <div className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </div>
      </section>
    </header>
  );
};

export default Header;