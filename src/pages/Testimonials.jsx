import axios from "axios";
import { useEffect, useState } from "react";

function Testimonials() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  return (
    <div className="page">
      <h1>Testimonials</h1>

      <div className="grid">
        {users.slice(0, 6).map((user) => (
          <div className="card" key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;