import React from "react";
import style from "./footer.module.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className={style.footerOuterContainer}>
      <div className={style.footerContainer}>
        <div className={style.footerIcons}>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <XIcon />
          <YouTubeIcon />
        </div>
        <div className={style.footerData}>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className={style.serviceCode}>
          <p>service Code</p>
        </div>
        <div className={style.copyWrite}>
          <p>&copy; 1997-2024 Netflix, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
