interface Direction {
  pais: string;
  ciudad: string;
}

interface Person {
  nombre: string;
  apellido: string;
  edad: number;
  direccion: Direction;
}

const ObjectLiteral = () => {
  const persona: Person = {
    nombre: "Yesid",
    apellido: "Vanegas",
    edad: 23,
    direccion: {
      pais: "Colombia",
      ciudad: "Bucaramanga",
    },
  };

  return (
    <>
      <h3>Objetos literales</h3>
      <pre>{JSON.stringify(persona, null, 2)}</pre>
    </>
  );
};

export default ObjectLiteral;
