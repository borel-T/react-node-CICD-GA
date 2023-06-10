import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // states
  const [userName, setUserName] = useState("default-name");

  useEffect(() => {
    getNames();
  }, []);

  // api call
  const getNames = async () => {
    const names = await axios
      .get("/names")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log("App: GET server error");
      });
    setUserName(names);
  };

  return (
    <div className="App" style={{ paddingRight: 30, paddingLeft: 30 }}>
      <h1>CI/CD Application using github actions</h1>
      <h3>{`My name is ${userName}`}</h3>
    </div>
  );
}

export default App;
