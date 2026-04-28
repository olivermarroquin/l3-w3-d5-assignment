import React from "react";

export default function UserCard({ firstName, lastName, email, showEmail }) {
  return (
    <div>
      <h2>
        {firstName} {lastName}
      </h2>
      {showEmail && <p>{email}</p>}
    </div>
  );
}
