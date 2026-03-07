import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
  FaRedditAlien,
  FaHeadphonesAlt,
} from "react-icons/fa";
import "../assets/css/footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t }=useTranslation();
  return (
    <footer className="footer">
      <div className="footer-container">


        <div className="footer-col large">
          <h4>{t("footer.socialMedia")}</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />
            <FaInstagram />
            <FaYoutube />
            <FaRedditAlien />
          </div>

          <h5>{t("footer.downloadApps")}</h5>
          <div className="apps">
            <img src="https://cdn.freebiesupply.com/logos/large/2x/download-on-the-app-store-apple-logo-png-transparent.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
          </div>

          <h4>{t("footer.newsletter")}</h4>
          <div className="newsletter">
            <input type="email" placeholder="Your E-mail" />
            <button>{t("footer.submit")}</button>
          </div>

          <div className="help">
            <FaHeadphonesAlt />
            <div>
              <span>{t("footer.help")}</span>
              <strong>(500) 8001 8588, (500) 544 6550</strong>
            </div>
          </div>
        </div>


        <div className="footer-col">
          <h4>{t("footer.about")}</h4>
          <ul>
            <li>Electron Inside</li>
            <li>About Us</li>
            <li>Company</li>
            <li>Careers</li>
            <li>Brands</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t("footer.quickLinks")}</h4>
          <ul>
            <li>Electron Inside</li>
            <li>About Us</li>
            <li>Company</li>
            <li>Careers</li>
            <li>Brands</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t("footer.policies")}</h4>
          <ul>
            <li>Electron Inside</li>
            <li>About Us</li>
            <li>Company</li>
            <li>Careers</li>
            <li>Brands</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t("footer.brands")}</h4>
          <ul>
            <li>Samsung</li>
            <li>Apple</li>
            <li>LG</li>
            <li>Bosch</li>
            <li>Beko</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t("footer.smartPhones")}</h4>
          <ul>
            <li>Order Tracking</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Tutorials</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t("footer.smartTV")}</h4>
          <ul>
            <li>Order Tracking</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Tutorials</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t("footer.accessories")}</h4>
          <ul>
            <li>Order Tracking</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Tutorials</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t("footer.bestseller")}</h4>
          <ul>
            <li>iPhone 14 Pro Max</li>
            <li>iPhone 13 Pro Max</li>
            <li>Samsung Note 21 Ultra</li>
            <li>Xiaomi Vacuum Cleaner</li>
          </ul>
        </div>

      </div>

   
      <div className="footer-bottom">
        <p>
        {t("footer.footerNote")}
        </p>

        <div className="payments">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Skrill_logo.svg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
