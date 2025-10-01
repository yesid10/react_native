import { useAuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { isChecking, isAuthenticated, loginWithEmailPassword, user, logout } =
    useAuthContext();

  if (isChecking) {
    return <h1>En proceso de autenticación...</h1>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <h1>Bienvenido</h1>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button
            onClick={logout}
            className="bg-blue-500 p-2 text-white rounded-xl mt-2"
          >
            Salir
          </button>
        </>
      ) : (
        <>
          <h1>Ingresa a la applicacion</h1>
          <button
            onClick={() =>
              loginWithEmailPassword("yesid@domain.com", "password")
            }
            className="bg-blue-500 p-2 text-white rounded-xl mt-2"
          >
            Ingresa
          </button>
        </>
      )}
    </>
  );
};

export default LoginPage;
