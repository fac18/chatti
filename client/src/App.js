import React from "react";
import logo from "./logo.svg";
import "./Cssreset.css";
import "./App.css";
import { Button } from "./components/masterCss";

function App() {
  const [data, setData] = React.useState(null);

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
    <div className="App">
      <header className="App-header">
        <p>{data}</p>
        <Button>Gunners</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
