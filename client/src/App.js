import React from "react";
import "./Cssreset.css";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";

function App() {
  const [data, setData] = React.useState(null);

  //this is just to demonstrate that a back end call is working
  const makeBackendCall = () => {
    // Get the test data string and store in state
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
      <Homepage />
    </>
  );
}

export default App;
