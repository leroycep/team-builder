import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TeamMembers from "./components/TeamMembers";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: "85b4d555-9371-40f8-b296-f448574c985f",
      name: "Parsy McParseface",
      email: "parser@mcparse.com",
      role: "Natural Language Processing Engineer"
    },
    {
      id: "85b4d555-9371-40f8-b296-f448574c985f",
      name: "Boaty McBoatface",
      email: "memes@the.internet.com",
      role: "Subaquatic ROV Engineer"
    }
  ]);

  return (
    <div className="App">
      <header className="App-header">
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
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;
