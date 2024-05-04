import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ExtensionIcon from "@mui/icons-material/Extension";
const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-search">
          <FacebookIcon />
          <div className="search-input">
            <SearchIcon />
            <input type="text" placeholder="Search facebook" />
          </div>
        </div>
        <div className="header-icon">
          <ul>
            <li>
              <HomeIcon />
            </li>
            <li>
              <OndemandVideoIcon />
            </li>
            <li>
              <StorefrontIcon />
            </li>
            <li>
              <GroupIcon />
            </li>
            <li>
              <ExtensionIcon />
            </li>
          </ul>
        </div>
        <div className="header-alert"></div>
      </div>
    </>
  );
};

export default Header;
