import type React from "react";

const UserRow: React.FC = () => {
  return (
    <tr className="p-2">
      <td>
        <img className="rounded-full w-14" src="" alt="User Avatar" />
      </td>
      <td>
        {"Yesid"} {"Vanegas"}
      </td>
      <td> {"yesid.vanegas@example.com"}</td>
    </tr>
  );
};

export default UserRow;
