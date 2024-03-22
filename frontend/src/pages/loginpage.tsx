import { useForm } from "react-hook-form";

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="flex h-screen place-content-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex full items-center justify-center w-tiny flex-col border rounded-2xl text-center bg-slate-50"
      >
        <h1 className="text-4xl underline underline-offset-8 text-slate-600 font-bold mb-20">
          Login Page
        </h1>

        <div className="flex flex-col gap-10 px-20 w-full">
          <input
            className="h-14 shadow-2xl rounded-2xl p-5"
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            className="h-14 mb-5 shadow-2xl rounded-2xl p-5 "
            type="text"
            placeholder="Password"
            {...register("Password", { required: true })}
          />
        </div>
        <div>
          <input
            type="submit"
            className="mt-5 border-4 border-orange-500 rounded-2xl text-2xl font-bold p-5 shadow-2xl active:scale-90 hover:bg-orange-400 hover:text-white"
          />
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
