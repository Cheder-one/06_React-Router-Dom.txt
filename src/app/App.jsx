import Home from "./components/navigation/home";
import Login from "./components/navigation/login";
import NavBar from "./components/navigation/navBar";
import { Route, Switch } from "react-router-dom";
import Posts from "./components/navigation/posts";
import Contacts from "./components/navigation/contacts";
import Post from "./components/post";
import PostsList from "./components/postsList";

const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
];

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/posts/:postId">
          {(props) => <Post {...props} posts={posts} />}
        </Route>
        <Route path="/posts" component={Posts}>
          {(props) => <PostsList {...props} posts={posts} />}
        </Route>
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </>
  );
}

export default App;
