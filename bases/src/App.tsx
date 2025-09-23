// import BasicTypes from "./typescript/BasicTypes";
// import BasicFunctions from "./typescript/BasicFunctions";
//import ObjectLiteral from "./typescript/ObjectLiteral";

import Counter from "./components/Counter";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-svh">
      <h1 className="text-xl mb-5">React + TS</h1>
      {/* <BasicTypes /> */}
      {/* <ObjectLiteral /> */}
      {/* <BasicFunctions/> */}
      <Counter/>
    </div>
  );
}

export default App;
