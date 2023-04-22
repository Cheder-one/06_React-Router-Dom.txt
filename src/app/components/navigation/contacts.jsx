import { Link, Route, Switch } from "react-router-dom";

const Contacts = () => {
  return (
    <>
      <h1>Contacts</h1>
      <ul>
        <li>
          <Link to={"/contacts/departments-1"}>Depart 1</Link>
        </li>
        <li>
          <Link to={"/contacts/departments-2"}>Depart 2</Link>
        </li>
      </ul>
      <Switch>
        <Route
          path="/contacts/departments-1"
          component={() => <h3>Department 1</h3>}
        />
        <Route
          path="/contacts/departments-2"
          component={() => <h3>Department 2</h3>}
        />
      </Switch>
    </>
  );
};

export default Contacts;
