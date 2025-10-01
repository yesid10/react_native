import { useEffect, useState } from "react";
import { type User } from "../interfaces/reques.response";
import { loadUsersActions } from "../actions/load-users.action";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsersActions(1).then(setUsers);
  }, []);

  return {
    users,
  };
};

export default useUsers;
