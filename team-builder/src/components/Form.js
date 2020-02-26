import React, { useState } from "react";

export default function Form(props) {
  const [newTeamMember, setNewTeamMember] = useState({
    name: "",
    role: "",
    email: ""
  });

  const changeHandler = ev => {
    setNewTeamMember({ ...newTeamMember, [ev.target.name]: ev.target.value });
  };

  return (
    <form>
      <label>
        Name:{" "}
        <input
          onChange={changeHandler}
          value={newTeamMember.name}
          name="name"
          type="text"
        />
      </label>
      <label>
        Role:{" "}
        <input
          onChange={changeHandler}
          value={newTeamMember.role}
          name="role"
          type="text"
        />
      </label>
      <label>
        Email:{" "}
        <input
          onChange={changeHandler}
          value={newTeamMember.email}
          name="email"
          type="text"
        />
      </label>
      <input type="submit" value="Create Team Member" />
    </form>
  );
}
