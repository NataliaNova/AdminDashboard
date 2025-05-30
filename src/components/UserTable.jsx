import { useState } from 'react';

const initialUsers = [
  { id: 1, nombre: 'Ana', email: 'ana@email.com', rol: 'Admin' },
  { id: 2, nombre: 'Luis', email: 'luis@email.com', rol: 'Editor' },
  { id: 3, nombre: 'Marta', email: 'marta@email.com', rol: 'Invitado' },
];

function UserTable() {
  const [users, setUsers] = useState(initialUsers);
  const [editingId, setEditingId] = useState(null);
  const [backup, setBackup] = useState(null);

  const startEdit = (user) => {
    setEditingId(user.id);
    setBackup({ ...user });
  };

  const cancelEdit = () => {
    setUsers(users.map(user => (user.id === backup.id ? backup : user)));
    setEditingId(null);
    setBackup(null);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setUsers(users.map(user => (user.id === id ? { ...user, [name]: value } : user)));
  };

  const handleSave = () => {
    setEditingId(null);
    setBackup(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-8 overflow-x-auto">
      <h3 className="text-lg font-semibold mb-4">Usuarios recientes</h3>
      <div className="hidden md:block">
        <table className="min-w-full text-sm text-gray-800">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">ID</th>
              <th className="p-3">Nombre</th>
              <th className="p-3">Email</th>
              <th className="p-3">Rol</th>
              <th className="p-3">Acción</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{user.id}</td>

                <td className="p-3">
                  {editingId === user.id ? (
                    <input
                      name="nombre"
                      value={user.nombre}
                      onChange={(e) => handleChange(e, user.id)}
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : user.nombre}
                </td>

                <td className="p-3">
                  {editingId === user.id ? (
                    <input
                      name="email"
                      value={user.email}
                      onChange={(e) => handleChange(e, user.id)}
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : user.email}
                </td>

                <td className="p-3">
                  {editingId === user.id ? (
                    <select
                      name="rol"
                      value={user.rol}
                      onChange={(e) => handleChange(e, user.id)}
                      className="border px-2 py-1 rounded w-full"
                    >
                      <option>Admin</option>
                      <option>Editor</option>
                      <option>Invitado</option>
                    </select>
                  ) : user.rol}
                </td>

                <td className="p-3 flex gap-2">
                  {editingId === user.id ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Guardar
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400"
                      >
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => startEdit(user)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Editar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

 
      <div className="md:hidden space-y-4">
        {users.map(user => (
          <div key={user.id} className="border rounded p-4 shadow-sm">
            <p><strong>ID:</strong> {user.id}</p>
            <p>
              <strong>Nombre:</strong>{' '}
              {editingId === user.id ? (
                <input
                  name="nombre"
                  value={user.nombre}
                  onChange={(e) => handleChange(e, user.id)}
                  className="border px-2 py-1 rounded w-full"
                />
              ) : user.nombre}
            </p>
            <p>
              <strong>Email:</strong>{' '}
              {editingId === user.id ? (
                <input
                  name="email"
                  value={user.email}
                  onChange={(e) => handleChange(e, user.id)}
                  className="border px-2 py-1 rounded w-full"
                />
              ) : user.email}
            </p>
            <p>
              <strong>Rol:</strong>{' '}
              {editingId === user.id ? (
                <select
                  name="rol"
                  value={user.rol}
                  onChange={(e) => handleChange(e, user.id)}
                  className="border px-2 py-1 rounded w-full"
                >
                  <option>Admin</option>
                  <option>Editor</option>
                  <option>Invitado</option>
                </select>
              ) : user.rol}
            </p>
            <div className="mt-3 flex gap-2">
              {editingId === user.id ? (
                <>
                  <button
                    onClick={handleSave}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400"
                  >
                    Cancelar
                  </button>
                </>
              ) : (
                <button
                  onClick={() => startEdit(user)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Editar
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserTable;
 