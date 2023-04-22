import React from "react";

const Post = ({ id, posts, history }) => {
  const getPost = (id) => {
    return posts.find((post) => String(post.id) === id);
  };
  const post = getPost(id);

  const handelMoveToList = () => {
    post ? history.push("/posts") : history.replace("/posts");
  };

  return (
    <>
      <h1>{post ? post.title : `Post id: ${id} is not found`}</h1>
      <button
        onClick={handelMoveToList}
        className="btn btn-outline-primary mt-2"
      >
        В список записей
      </button>
    </>
  );
};

export default Post;
