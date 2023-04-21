import Post from "../post";
import PostsList from "../postsList";

const Posts = ({ match }) => {
  const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
  ];
  const postId = match.params.postId;

  return postId ? (
    <Post id={postId} posts={posts} />
  ) : (
    <PostsList posts={posts} />
  );
};

export default Posts;
