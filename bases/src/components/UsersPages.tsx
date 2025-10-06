import useUsers from "../hooks/useUsers";
import UserRow from "./UserRow";

const UsersPages = () => {
  const { users, nextPage, previusPage } = useUsers();

  return (
    <>
      <h1>Usuarios</h1>
      <table className="w-[500px] bg-black rounded-xl text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div className="flex justify-between w-[500px] mt-2">
        <button
          onClick={previusPage}
          className="p-2 bg-blue-500 text-white rounded-xl"
        >
          Anterior
        </button>
        <button
          onClick={nextPage}
          className="p-2 bg-blue-500 text-white rounded-xl"
        >
          Siguiente
        </button>
      </div>
    </>
  );
};

export default UsersPages;
