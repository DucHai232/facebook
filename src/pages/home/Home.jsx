import React, { useEffect, useState } from "react";
import "./Home.css";
import LeftHome from "../../components/home/LeftHome";
import NewsFeed from "../../components/home/newsfeed/NewsFeed";
import RightHome from "../../components/home/RightHome";
import likePages from "../../data/LikePages";
import { getUser } from "../../apis/userRequest";
import { useDispatch } from "react-redux";
import { getDataUser } from "../../redux/actions/userAction";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataUser());
  }, []);
  return (
    <div className="home-container">
      <LeftHome likePages={likePages} />
      <NewsFeed />
      <RightHome />
    </div>
  );
};

export default Home;
