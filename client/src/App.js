import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./Cssreset.css";
import "./App.css";
import Login from "./components/Login/Login";
import Homepage from "./components/Homepage/Homepage";
import HomeLoggedIn from "./components/HomeLoggedIn/HomeLoggedIn";
import RegisterContainer from "./components/RegisterContainer/RegisterContainer";
import ActivityPage from "./components/ActivityPage/ActivityPage";
import Favourites from "./components/FavouritesContainer/FavouritesContainer";

function App() {
  // when user is logged in, keep details that are used throughout app here
  // to include: username, childs name, childs bday, childs gender, ?email
  const [userData, setUserData] = React.useState(null);

  console.log(userData);

  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route
        exact
        path="/login"
        render={() => <Login setUserData={setUserData} />}
      />
      <Route
        exact
        path="/signup"
        render={() => <RegisterContainer setUserData={setUserData} />}
      />
      <Route
        exact
        path="/home"
        render={() => <HomeLoggedIn userData={userData} />}
      />
      <Route
        exact
        path="/activity"
        render={() => <ActivityPage userData={userData} />}
      />
      <Route exact path="/favourites" render={() => <Favourites />} />
    </Router>
  );
}

export default App;
