import * as React from "react";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

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
  {
    id: 5,
    icon: AccessTimeIcon,
    text: "ABC",
  },
  {
    id: 6,
    icon: AccessTimeIcon,
    text: "XYZ",
  },
  {
    id: 7,
    icon: AccessTimeIcon,
    text: "CDE",
  },
  {
    id: 8,
    icon: AccessTimeIcon,
    text: "FGH",
  },
];
const LeftHome = ({ likePages }) => {
  const initNumberList = 4;
  const [dataList, setDataList] = React.useState([]);
  const [dataPages, setDataPages] = React.useState(likePages);
  const [numberList, setNumberList] = React.useState(initNumberList);
  const [numberPages, setNumberPages] = React.useState(initNumberList);
  React.useEffect(() => {
    setDataList(listItem.slice(0, numberList));
    setDataPages(likePages.slice(0, numberPages));
  }, [numberList, numberPages]);
  const handleShow = () => {
    setNumberList(listItem.length);
  };
  const handleHide = () => {
    setNumberList(initNumberList);
  };

  return (
    <div className="lefthome-container">
      <div className="topleft">
        <ul>
          {dataList.map((item) => (
            <li key={item.id}>
              <div className="icon">
                <item.icon />
              </div>
              <span className="text">{item.text}</span>
            </li>
          ))}
        </ul>

        <button
          className="btn-see-more"
          onClick={() => {
            {
              numberList === initNumberList && handleShow();
            }
            {
              numberList === listItem.length && handleHide();
            }
          }}
        >
          <span className="text">
            {numberList === initNumberList ? "See more" : "Hide"}
          </span>
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
            {dataPages.map((page) => (
              <li>
                <img src={page.image} className="image" />
                <span className="text">{page.pageName}</span>
              </li>
            ))}
          </ul>
          <button
            className="btn-see-more"
            onClick={() => {
              {
                numberPages === initNumberList &&
                  setNumberPages(likePages.length);
              }
              {
                numberPages === likePages.length &&
                  setNumberPages(initNumberList);
              }
            }}
          >
            <span className="text">
              {numberPages === initNumberList ? "See more" : "Hide"}
            </span>

            <KeyboardArrowDownIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftHome;
