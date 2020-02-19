import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './Cssreset.css'
import './App.css'
import Cookies from 'js-cookie'
import Login from './components/Login/Login'
import Homepage from './components/Homepage/Homepage'
import HomeLoggedIn from './components/HomeLoggedIn/HomeLoggedIn'
import RegisterContainer from './components/RegisterContainer/RegisterContainer'
import ActivityPage from './components/ActivityPage/ActivityPage'
import Favourites from './components/FavouritesContainer/FavouritesContainer'
import Progress from './components/Progress/Progress'
import AboutUs from './components/AboutUs/AboutUs'
import Settings from './components/Settings/Settings'
import AddContent from './components/AddContent/AddContent'
import getUserData from './utils/getUserData'
import getUserLibrary from './utils/getUserLibrary'

function App() {
  // when user is logged in, keep details that are used throughout app here
  // to include: username, childs name, childs bday, childs gender
  const [userData, setUserData] = React.useState(null)
  const [userLibrary, setUserLibrary] = React.useState(null)
  const [currentActivity, setCurrentActivity] = React.useState(null)

  //when app loads, make BE call to get user data state
  //it will only send if user has valid token
  React.useEffect(() => {
    getUserData()
      .then(result =>
        setUserData({
          userName: result.name,
          userEmail: result.email,
          childName: result.child_name,
          childBirthday: result.child_birthday,
          childGender: result.child_gender,
        })
      )
      .catch(console.log)
  }, [])

  React.useEffect(() => {
    console.log(userData)
    if (userData) {
      getUserLibrary(userData.userEmail)
        .then(result => setUserLibrary(result))
        .catch(console.log)
    }
  }, [userData])

  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => {
          const cookie = Cookies.get('user') ? Cookies.get('user') : null
          //check if there is a user cookie (change key to something more unique?)
          //is so, send to /home
          return cookie ? <Redirect to="/home" /> : <Homepage />
        }}
      />
      <Route
        exact
        path="/aboutus"
        render={() => {
          const cookie = Cookies.get('user') ? Cookies.get('user') : null
          return cookie ? <AboutUs /> : <Redirect to="/" />
        }}
      />
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
        render={() => {
          const cookie = Cookies.get('user') ? Cookies.get('user') : null
          return cookie ? (
            <HomeLoggedIn
              userData={userData}
              userLibrary={userLibrary}
              setCurrentActivity={setCurrentActivity}
            />
          ) : (
            <Redirect to="/" />
          )
        }}
      />
      <Route
        exact
        path="/activity"
        render={() => {
          const cookie = Cookies.get('user') ? Cookies.get('user') : null
          return cookie ? (
            <ActivityPage currentActivity={currentActivity} />
          ) : (
            <Redirect to="/" />
          )
        }}
      />
      <Route
        exact
        path="/favourites"
        render={() => {
          const cookie = Cookies.get('user') ? Cookies.get('user') : null
          return cookie ? (
            <Favourites userData={userData} />
          ) : (
            <Redirect to="/" />
          )
        }}
      />
      <Route
        exact
        path="/progress"
        render={() => {
          const cookie = Cookies.get('user') ? Cookies.get('user') : null
          return cookie ? <Progress userData={userData} /> : <Redirect to="/" />
        }}
      />
      <Route
        exact
        path="/settings"
        render={() => {
          const cookie = Cookies.get('user') ? Cookies.get('user') : null
          return cookie ? <Settings userData={userData} /> : <Redirect to="/" />
        }}
      />
      <Route
        exact
        path="/addcontent"
        render={() => {
          const cookie = Cookies.get('user') ? Cookies.get('user') : null
          return cookie ? <AddContent /> : <Redirect to="/" />
        }}
      />
    </Router>
  )
}

export default App
