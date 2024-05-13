import React from "react";
import Stories from "./Stories";
import PostStatus from "./PostStatus";
import NewsContent from "./NewsContent";
import "./NewsFeed.css";
const NewsFeed = () => {
  return (
    <div className="newsfeed-container">
      <Stories />
      <PostStatus />
      <NewsContent />
    </div>
  );
};

export default NewsFeed;
