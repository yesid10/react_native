const BasicTypes = () => {
  const name: string = "Yesid";
  const age: number = 30;
  const isActive: boolean = true;

  const powers: string[] = ["Volar", "Matar"];

  return (
    <>
      <h1>Tipos Basicos</h1>
      {name} - {age} - {isActive ? "Activo" : "Inactivo"}

      <p>{powers.join(",")}</p>
    </>
  );
};

export default BasicTypes;
