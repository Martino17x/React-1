import React, { useState, useEffect } from 'react';

// Definimos la interfaz para los datos del usuario
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

function MasterDetail() {
  // Usamos la interfaz `User[]` para tipar el estado `users`
  const [users, setUsers] = useState<User[]>([]);
  // `selectedUser` puede ser `User` o `null`, por lo que lo tipamos como `User | null`
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch user data from an API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data: User[]) => setUsers(data)); // Especificamos el tipo `User[]` en `data`
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      {/* Master View */}
      <ul style={{ width: '40%', borderRight: '1px solid #ccc' }}>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setSelectedUser(user)}
            style={{ cursor: 'pointer', padding: '8px' }}
          >
            {user.name}
          </li>
        ))}
      </ul>

      {/* Detail View */}
      <div style={{ padding: '16px', width: '60%' }}>
        {selectedUser ? (
          <div>
            <h2>{selectedUser.name}</h2>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Website:</strong> {selectedUser.website}</p>
          </div>
        ) : (
          <p>Select a user to see details</p>
        )}
      </div>
    </div>
  );
}

export default MasterDetail;