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
    <div className="h-small w-tiny items-center justify-center border rounded-2xl text-center bg-slate-50">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-10 justify-between h-full w-full text-2xl items-center p-5">
          <input
            className="h-14 shadow-2xl rounded-2xl p-5"
            type="text"
            placeholder="First name"
            {...register("First name", { required: true, maxLength: 80 })}
          />
          <input
            className="h-14 shadow-2xl rounded-2xl p-5"
            type="text"
            placeholder="Last name"
            {...register("Last name", { required: true, maxLength: 100 })}
          />
          <input
            className="h-14 shadow-2xl rounded-2xl p-5"
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            className="h-14 mb-5 shadow-2xl rounded-2xl p-5"
            type="text"
            placeholder="Confirm Email"
            {...register("Confirm Email", { required: true })}
          />
        </div>
        <div>
          <input
            type="submit"
            className="mt-5 border rounded-2xl text-2xl font-bold p-5 shadow-2xl"
          />
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
