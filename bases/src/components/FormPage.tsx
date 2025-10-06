import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};

const FormPage = () => {
  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      email: "yesidvanegas68@gmail.com",
      password: "123456",
    },
  });

  const onSubmit = (myForm: FormInputs) => {
    console.log({ myForm });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Formularios</h3>

      <div className="flex flex-col space-y-2 w-[500px]">
        <input
          type="email"
          className="border border-gray-300 p-2 rounded-xl"
          placeholder="Email"
          {...register("email", { required: true })}
        />

        <input
          type="password"
          className="border border-gray-300 p-2 rounded-xl"
          placeholder="Password"
          {...register("password", { required: true })}
        />

        <button className="bg-blue-500 p-2 text-white font-semibold rounded-xl hover:cursor-pointer">
          Ingresar
        </button>
      </div>
    </form>
  );
};

export default FormPage;
