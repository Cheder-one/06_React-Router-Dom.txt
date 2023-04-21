import Home from "./components/navigation/home";
import Login from "./components/navigation/login";
import NavBar from "./components/navigation/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Posts from "./components/navigation/posts";
import Contacts from "./components/navigation/contacts";
import NotFound from "./components/redirect/notFound";

function App() {
  return (
    <>
      <NavBar />
      <div className="ms-3 mt-2">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/posts/:postId?" component={Posts} />
          <Route path="/contacts" component={Contacts} />
          <Redirect from="/lk" to="/login" />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
