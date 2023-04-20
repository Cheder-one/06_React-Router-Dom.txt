import React from "react";

const Post = ({ match, posts }) => {
  const postId = match.params.postId;

  const getPost = (postId) => {
    return posts.find((post) => String(post.id) === postId);
  };
  const post = getPost(postId);

  return <h1>{post ? post.title : `Post id: ${postId} is not found`}</h1>;
};

export default Post;
