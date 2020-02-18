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
import Progress from "./components/Progress/Progress";
import AboutUs from "./components/AboutUs/AboutUs";
import Settings from "./components/Settings/Settings";
import getUserData from "./utils/getUserData";

function App() {
  // when user is logged in, keep details that are used throughout app here
  // to include: username, childs name, childs bday, childs gender
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    console.log(userData);
  }, [userData]);

  //when app loads, make BE call to get user data state
  //it will only send if user has valid token
  React.useEffect(() => {
    getUserData().then(result =>
      setUserData({
        userName: result.name,
        userEmail: result.email,
        childName: result.child_name,
        childBirthday: result.child_birthday,
        childGender: result.child_gender
      })
    );
  }, []);

  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route
        exact
        path="/login"
        render={() => <Login setUserData={setUserData} />}
      />
      <Route
        exact
        path="/signup"
        render={() => (
          <RegisterContainer userData={userData} setUserData={setUserData} />
        )}
      />
      <Route
        exact
        path="/home"
        render={() => <HomeLoggedIn userData={userData} />}
      />
      <Route exact path="/activity" component={ActivityPage} />
      <Route exact path="/favourites" render={() => <Favourites />} />
      <Route exact path="/progress" render={() => <Progress />} />
      <Route
        exact
        path="/settings"
        render={() => <Settings userData={userData} />}
      />
    </Router>
  );
}

export default App;
