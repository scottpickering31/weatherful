import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSignUpData } from "../state/reducers/SignUpDataSlice";

function SignupPage() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { firstName, lastName, email, confirmEmail } = data;

    dispatch(setSignUpData([firstName, lastName, email, confirmEmail]));
    console.log(data);
  };

  return (
    <div className="flex h-screen place-content-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-full items-center justify-center w-tiny flex-col border rounded-2xl text-center bg-slate-50"
      >
        <h1 className="text-4xl underline underline-offset-8 text-slate-600 font-bold mb-20">
          Sign Up Page
        </h1>

        <div className="flex flex-col gap-10 px-20 w-full">
          <input
            className="h-14 shadow-2xl rounded-2xl p-5"
            type="text"
            placeholder="First name"
            {...register("firstName", { required: true, maxLength: 80 })}
          />
          <input
            className="h-14 shadow-2xl rounded-2xl p-5"
            type="text"
            placeholder="Last name"
            {...register("lastName", { required: true, maxLength: 100 })}
          />
          <input
            className="h-14 shadow-2xl rounded-2xl p-5"
            type="text"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            className="h-14 mb-5 shadow-2xl rounded-2xl p-5"
            type="text"
            placeholder="Confirm Email"
            {...register("confirmEmail", { required: true })}
          />
        </div>
        <div>
          <input
            type="submit"
            className="cursor-pointer mt-5 border rounded-2xl text-2xl font-bold p-5 shadow-2xl active:scale-90 hover:bg-slate-200"
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <p>Already have an account?</p>
          <Link to="/login">
            <p className="text-xl text-blue-600 underline underline-offset-4 font-bold cursor-pointer">
              Login
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
