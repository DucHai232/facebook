import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import listStories from "../../../data/StoriesList.json";
const Stories = () => {
  const [position, setPosition] = useState(0);
  const [showLeftButton, setLeftButton] = useState(false);
  const [showRightButton, setRightButton] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [storiesWidth, setStoriesWidth] = useState(0);
  const space = 200;
  useEffect(() => {
    const storiesContainer = document.querySelector(".stories-container"); //lấy thẻ có class stories-container
    const stories = document.querySelector(".stories"); //lấy thẻ có class stories
    const parentWidth = storiesContainer.clientWidth; //lấy chiều dài width của thằng classstories-container
    const storiesWidth = stories.clientWidth; //lấy chiều dài width của thằng class stories
    setContainerWidth(parentWidth); //lưu lại độ dài stories-container
    setStoriesWidth(storiesWidth); //lưu lại độ dài stories
    handleScroll(parentWidth, storiesWidth, position);
  }, [position]);

  //parentWidth: 1114, storiesWidth: 1850
  const handleScroll = (containerWidth, storiesWidth, position) => {
    setLeftButton(position < 0); //false true
    setRightButton(containerWidth - position < storiesWidth); //true true true false
  };

  //1114 - (-200-200-200-200) < 1850
  const styleStory = (urlImage) => {
    return {
      position: "relative",
      backgroundImage: `url(${urlImage})`,
      width: "130px",
      height: "200px",
      padding: "10px",
      borderRadius: "10px",
      color: "white",
      cursor: "pointer",
      flex: "0 0 auto",
    };
  };

  const handleScrollLeft = () => {
    setPosition((prev) => prev + space);
  };
  const handleScrollRight = () => {
    setPosition((prev) => prev - space);
  };
  return (
    <div className="stories-container">
      {showLeftButton && (
        <div className="scroll-button left" onClick={handleScrollLeft}>
          <ArrowBackIosIcon />
        </div>
      )}

      {showRightButton && (
        <div className="scroll-button right" onClick={handleScrollRight}>
          <ArrowForwardIosIcon />
        </div>
      )}
      <div
        className="stories"
        style={{ transform: `translateX(${position}px)` }}
      >
        {listStories.map((story) => (
          <div className="story-box" style={styleStory(story.background)}>
            <Avatar
              alt="Remy Sharp"
              src={story.avatar}
              style={{ zIndex: "2", border: "3px solid white" }}
            />
            <p className="username">{story.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
