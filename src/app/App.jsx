import Home from "./components/navigation/home";
import Login from "./components/navigation/login";
import NavBar from "./components/navigation/navBar";
import { Route, Switch } from "react-router-dom";
import Posts from "./components/navigation/posts";
import Contacts from "./components/navigation/contacts";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/posts" component={Posts} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </>
  );
}

export default App;
