import "./Footer.css";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* Logo */}

        <div className="footer-logo">
          <img
            src="/images/logo2.svg"
            alt="AimFit"
          />
        </div>

        {/* Company */}

        <div className="footer-column">

          <h4>COMPANY</h4>

          <a href="#">FAQs</a>

        </div>

        {/* Legal */}

        <div className="footer-column">

          <h4>LEGAL</h4>

          <a href="#">Privacy Policy</a>

          <a href="#">Terms of Service</a>

          <a href="#">
            Studio General T&Cs
          </a>

          <a href="#">
            Online General T&Cs
          </a>

          <a href="#">
            Reformer T&Cs
          </a>

          <a href="#">
            Strength X T&Cs
          </a>

          <a href="#">
            Terms of Application
          </a>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h4>CONTACT</h4>

          <div className="phone-box">
            <FaPhoneAlt />
          </div>

          <p>+92 333 1140795</p>

          <div className="store-buttons">

            <img
              src="/images/app.svg"
              alt="App Store"
            />

            <img
              src="/images/play.svg"
              alt="Google Play"
            />

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          Copyright © 2023 AimFit |
          All Rights Reserved
        </p>

        <div className="social-icons">

          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube />

        </div>

      </div>

    </footer>
  );
}

export default Footer;