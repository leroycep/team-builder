import React, { useState } from "react";

export default function TeamMembers(props) {
    console.log(props);
  return <div>{props.teamMembers.map(TeamMember)}</div>;
}

function TeamMember(teamMember) {
  return (
    <div>
      <h2>{teamMember.name}</h2>
      <h3>{teamMember.role}</h3>
      <p>{teamMember.email}</p>
    </div>
  );
}
