import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./Cssreset.css";
import "./App.css";
import Login from "./components/Login/Login";
import Homepage from "./components/Homepage/Homepage";
import HomeLoggedIn from "./components/HomeLoggedIn/HomeLoggedIn";
import RegisterContainer from "./components/RegisterContainer/RegisterContainer";

function App() {
  const [data, setData] = React.useState(null);

  //this is just to demonstrate that a back end call is working
  const makeBackendCall = () => {
    // Get the passwords and store them in state
    fetch("/api/test")
      .then(res => res.json())
      .then(newData => setData(newData));
  };

  React.useEffect(() => {
    makeBackendCall();
  }, []);

  // app state: replace with objects?
  const [username, setUsername] = React.useState(null);

  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route
        exact
        path="/login"
        render={() => <Login setUsername={setUsername} />}
      />
      <Route exact path="/signup" render={() => <RegisterContainer />} />
      <Route
        exact
        path="/home"
        render={() => <HomeLoggedIn username={username} />}
      />
    </Router>
  );
}

export default App;
