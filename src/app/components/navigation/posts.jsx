import { useState, useEffect } from "react";
import Post from "../post";
import PostsList from "../postsList";
import query from "query-string";

const Posts = ({ match, location, history }) => {
  const [showOffer, setShowOffer] = useState(false);

  const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
  ];

  const search = query.parse(location.search);
  const { block, fromUrl } = search;

  useEffect(() => {
    if (!showOffer && fromUrl && block) {
      setShowOffer(true);
    }
  }, [fromUrl, block, showOffer]);

  const postId = match.params.postId;

  return (
    <>
      {showOffer && (
        <h3 className="text-success" style={{ fontWeight: "bold" }}>
          Специальное предложение
        </h3>
      )}
      {postId ? (
        <Post id={postId} posts={posts} history={history} />
      ) : (
        <PostsList posts={posts} />
      )}
    </>
  );
};

export default Posts;
