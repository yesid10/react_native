import type React from "react";
import type { User } from "../interfaces/reques.response";

interface Props {
  user: User;
}

const UserRow: React.FC<Props> = ({ user }) => {
  return (
    <tr className="p-2">
      <td>
        <img
          className="ml-2 mb-2 rounded-full w-14"
          src={user.avatar}
          alt={user.first_name}
        />
      </td>
      <td>
        {user.first_name} {user.last_name}
      </td>
      <td> {user.email}</td>
    </tr>
  );
};

export default UserRow;
