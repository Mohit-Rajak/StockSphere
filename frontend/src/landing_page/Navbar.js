import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  // This function handles the redirect to the market route
  const market = () => {
    window.location.href = "http://localhost:3001"; // Redirect to market route
  };

  const navLinkClass = (path) =>
    `nav-link mx-2 ${location.pathname === path ? "text-primary fw-bold" : "text-dark"}`;

  return (
    <nav className="navbar navbar-expand-lg shadow-sm border-bottom" style={{ backgroundColor: "#fff" }}>
      <div className="container py-2">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/media/images/logo.svg" alt="Logo" style={{ width: "150px", marginRight: "10px" }} />
          <span className="fw-bold fs-5"></span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className={navLinkClass("/home")} to="/home">
                <i className="bi bi-house-door me-1"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={navLinkClass("/about")} to="/about">
                <i className="bi bi-info-circle me-1"></i>About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={navLinkClass("/product")} to="/product">
                <i className="bi bi-box-seam me-1"></i>Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className={navLinkClass("/pricing")} to="/pricing">
                <i className="bi bi-tags me-1"></i>Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className={navLinkClass("/support")} to="/support">
                <i className="bi bi-headset me-1"></i>Support
              </Link>
            </li>

            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className={navLinkClass("/signup")} to="/signup">
                    <i className="bi bi-person-plus me-1"></i>Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={navLinkClass("/login")} to="/login">
                    <i className="bi bi-box-arrow-in-right me-1"></i>Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a
                    className={navLinkClass("/stock-market")}
                    onClick={market}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="bi bi-graph-up-arrow me-1"></i>Stock Market
                  </a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger ms-3" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right me-1"></i>Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
