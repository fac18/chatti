import React from "react";
import "./Cssreset.css";
import "./App.css";
import Login  from "./components/Login/Login"

import Homepage from "./components/Homepage/Homepage";


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

  return (

    <>
      <p>{data}</p>
      {/* <Homepage /> */}
      <Login primary />


    </>

  );
}

export default App;
