// import BasicTypes from "./typescript/BasicTypes";
// import BasicFunctions from "./typescript/BasicFunctions";
//import ObjectLiteral from "./typescript/ObjectLiteral";

// import LoginPage from "./components/LoginPage";
import UsersPages from "./components/UsersPages";
import { AuthProvider } from "./context/AuthContext";

// import Counter from "./components/Counter";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-xl mb-5">React + TS</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiteral /> */}
        {/* <BasicFunctions/> */}
        {/* <Counter/> */}
        {/* <LoginPage /> */}
        <UsersPages />
      </div>
    </AuthProvider>
  );
}

export default App;
