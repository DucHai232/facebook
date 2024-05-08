import React from "react";
import "./Home.css";
import LeftHome from "../../components/home/LeftHome";
import NewsFeed from "../../components/home/NewsFeed";
import RightHome from "../../components/home/RightHome";
const Home = () => {
  return (
    <div className="home-container">
      <LeftHome />
      <NewsFeed />
      <RightHome />
    </div>
  );
};

export default Home;
