import React from "react";
import "./Home.css";
import LeftHome from "../../components/home/LeftHome";
import NewsFeed from "../../components/home/newsfeed/NewsFeed";
import RightHome from "../../components/home/RightHome";
import likePages from "../../data/LikePages";
const Home = () => {
  return (
    <div className="home-container">
      <LeftHome likePages={likePages} />
      <NewsFeed />
      <RightHome />
    </div>
  );
};

export default Home;
