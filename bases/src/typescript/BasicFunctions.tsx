import type React from "react";

const addTwoNumbers = (a: number, b: number): number => {
  return a + b;
};

const BasicFunctions: React.FC = () => {
  return (
    <>
      <h1>Funciones</h1>
      <span>El resultado de la suma es: {addTwoNumbers(5, 10)}</span>
    </>
  );
};

export default BasicFunctions;
