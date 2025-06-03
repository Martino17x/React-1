import React, { useState, useEffect } from 'react';



// Definimos la interfaz para los datos del usuario
interface User {
  id: number;
  name: string;
  helice: string;
  trenAterrizaje: string;
  alas: string;
  cubierta: string;
}

function Aeroplano() {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

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
            <h2>{selectedUser.trenAterrizaje}</h2>
            <p><strong>Helice: </strong> {selectedUser.helice}</p>
            <p><strong>Tren de Aterrizaje: </strong> {selectedUser.trenAterrizaje}</p>
            <p><strong>Alas: </strong> {selectedUser.alas}</p>
            <p><strong>Cubierta: </strong> {selectedUser.cubierta}</p>
          </div>
        ) : (
          <p>Select a user to see details</p>
        )}
      </div>
    </div>
  );
}
