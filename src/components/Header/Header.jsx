import React from "react";
import style from "./header.module.css";
import NetflixLogo from "../../assets/images/netflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div className={style.headerOuterContainer}>
      <div className={style.headerContainer}>
        <div className={style.headerLeft}>
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix log" width="100" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>New & Popular</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by languages</li>
          </ul>
        </div>
        <div className={style.headerRight}>
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
