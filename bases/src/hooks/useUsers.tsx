import { useEffect, useRef, useState } from "react";
import { type User } from "../interfaces/reques.response";
import { loadUsersActions } from "../actions/load-users.action";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPage = useRef(1);

  useEffect(() => {
    loadUsersActions(currentPage.current).then(setUsers);
  }, []);

  const nextPage = async () => {
    currentPage.current++;
    const users = await loadUsersActions(currentPage.current);

    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPage.current--;
    }
  };

  const previusPage = async () => {
    if (currentPage.current < 1) return;

    currentPage.current--;
    const users = await loadUsersActions(currentPage.current);
    setUsers(users);
  };

  return {
    users,
    nextPage,
    previusPage,
  };
};

export default useUsers;
