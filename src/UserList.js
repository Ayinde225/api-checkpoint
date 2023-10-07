import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite : ", error);
      });
  }, []);

  return (
    <div className="user-list">
      <h1>Nom Et Prénom</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id} className="user-item">
            {user.name} {user.username}
            <div>
              Address: {user.address.street}, {user.address.suite},{" "}
              {user.address.city}
            </div>
            <div>
              Geo: Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
