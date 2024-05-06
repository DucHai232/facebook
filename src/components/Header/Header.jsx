import React, { useState } from "react";
import "./Header.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ExtensionIcon from "@mui/icons-material/Extension";
import { Avatar } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Header = () => {
  const listIcon = [
    {
      id: 1,
      item: HomeIcon,
      class: "homeicon",
    },
    {
      id: 2,
      item: OndemandVideoIcon,
      class: "videoicon",
    },
    {
      id: 3,
      item: StorefrontIcon,
      class: "storeicon",
    },
    {
      id: 4,
      item: GroupIcon,
      class: "groupicon",
    },
    {
      id: 5,
      item: ExtensionIcon,
      class: "extendsionicon",
    },
  ];
  const newList = [...listIcon];
  console.log(newList);
  return (
    <>
      <div className="header-container">
        <div className="header-search">
          <div className="header-search_logo">
            <FacebookIcon className="logo-facebook" />
          </div>
          <div className="search-input">
            <SearchIcon className="icon" />
            <input
              type="text"
              placeholder="Search facebook"
              className="input"
            />
          </div>
        </div>
        <div className="header-icon">
          <ul>
            {/* class= list storeicon */}
            {check &&
              listIcon.map((icon) => (
                <li key={icon.id} className={`list ${icon.class}`}>
                  <icon.item />
                </li>
              ))}
          </ul>
        </div>
        <div className="header-alert">
          <div className="header-alert_profile">
            <Avatar
              alt="Remy Sharp"
              src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
            />

            <span className="profile-name">Duc hai</span>
          </div>
          <div className="header-alert_communicate">
            <div className="icon_item">
              <ChatBubbleIcon />
              <span className="number_alert">1</span>
            </div>
            <div className="icon_item">
              <NotificationsIcon />
              <span className="number_alert">3</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
