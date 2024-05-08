import React from "react";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import likePages from "../../data/LikePages.json";
const listItem = [
  {
    id: 1,
    icon: OndemandVideoIcon,
    text: "Watch",
  },
  {
    id: 2,
    icon: DateRangeIcon,
    text: "Events",
  },
  {
    id: 3,
    icon: PeopleAltIcon,
    text: "Friends",
  },
  {
    id: 4,
    icon: AccessTimeIcon,
    text: "Memories",
  },
];
const LeftHome = () => {
  const handleShow = () => {
    alert("hello");
  };
  const handleShowPage = () => {
    alert("page");
  };
  return (
    <div className="lefthome-container">
      <div className="topleft">
        <ul>
          {listItem.map((item) => (
            <li key={item.id}>
              <div className="icon">
                <item.icon />
              </div>
              <span className="text">{item.text}</span>
            </li>
          ))}
        </ul>
        <button className="btn-see-more" onClick={handleShow}>
          <span className="text">See more</span>
          <span className="icon">
            <KeyboardArrowDownIcon />
          </span>
        </button>
      </div>
      <div className="bottomleft">
        <div className="title">
          <span className="text">Shortcuts</span>
          <span className="icon">
            <MenuIcon />
          </span>
        </div>
        <div className="list-page">
          <ul>
            {likePages.map((page) => (
              <li>
                <img src={page.image} className="image" />
                <span className="text">{page.pageName}</span>
              </li>
            ))}
          </ul>
          <button className="btn-see-more" onClick={handleShowPage}>
            <span className="text">See more</span>
            <span className="icon">
              <KeyboardArrowDownIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftHome;
