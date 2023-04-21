import React from "react";

const Post = ({ id, posts }) => {
  const getPost = (id) => {
    return posts.find((post) => String(post.id) === id);
  };
  const post = getPost(id);

  return <h1>{post ? post.title : `Post id: ${id} is not found`}</h1>;
};

export default Post;
