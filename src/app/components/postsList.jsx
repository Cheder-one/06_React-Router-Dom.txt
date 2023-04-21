import React from "react";
import { Link } from "react-router-dom";

const PostsList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <h3 key={post.id}>
          {post.title} <Link to={`/posts/${post.id}`}>читать</Link>
        </h3>
      ))}
    </div>
  );
};

export default PostsList;
