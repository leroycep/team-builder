import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TeamMembers from "./components/TeamMembers";
import Form from "./components/Form";

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

  const addTeamMember = teamMember => {
    setTeamMembers([...teamMembers, teamMember]);
  };

  return (
    <div className="App">
      <TeamMembers teamMembers={teamMembers} />
      <Form addTeamMember={addTeamMember} />
    </div>
  );
}

export default App;
