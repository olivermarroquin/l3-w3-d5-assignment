import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        setUsers(data.users);
      } catch (error) {
        console.log(error);
        setError("Could not get users");
      }
    }

    getUsers();
  }, []);

  return (
    <div>
      <h1>Users Page</h1>

      <button onClick={() => setShowEmail(!showEmail)}>
        {showEmail ? "Hide Emails" : "Show Emails"}
      </button>

      {error && <p>{error}</p>}

      {users.map((user) => (
        <UserCard
          key={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          showEmail={showEmail}
        />
      ))}
    </div>
  );
}
