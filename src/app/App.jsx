import Home from "./components/navBar/home";
import Login from "./components/navBar/login";
import NavBar from "./components/navBar/navBar";
import { Route } from "react-router-dom";
import Posts from "./components/navBar/posts";
import Contacts from "./components/navBar/contacts";

function App() {
  return (
    <>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/posts" exact component={Posts} />
      <Route path="/contacts" exact component={Contacts} />
    </>
  );
}

export default App;
