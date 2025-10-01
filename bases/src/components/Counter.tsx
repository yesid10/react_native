import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, incrementBy } = useCounter();

  return (
    <>
      <h3 className="text-2xl mb-3">
        Contador <small className="font-bold">{count}</small>
      </h3>
      <div className="flex gap-3">
        <button
          className="text-center text-white font-bold p-3 bg-blue-500 rounded-xl cursor-pointer hover:bg-blue-700 transition-all duration-100"
          onClick={() => incrementBy(+1)}
        >
          +1
        </button>
        <button
          className="text-center text-white font-bold p-3 bg-blue-500 rounded-xl cursor-pointer hover:bg-blue-700 transition-all duration-100"
          onClick={() => incrementBy(-1)}
        >
          -1
        </button>
      </div>
    </>
  );
};

export default Counter;
