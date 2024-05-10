import React from "react";
import "./Home.css";
import LeftHome from "../../components/home/LeftHome";
import NewsFeed from "../../components/home/NewsFeed";
import RightHome from "../../components/home/RightHome";
import likePages from "../../data/LikePages.json";
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
