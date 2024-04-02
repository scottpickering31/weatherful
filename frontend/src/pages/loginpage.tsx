import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../state/reducers/loggedInSlice";

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const dispatch = useDispatch();

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
            type="password"
            placeholder="Password"
            {...register("Password", { required: true })}
          />
        </div>
        <div>
          <input
            type="submit"
            className="mt-5 border-4 border-orange-500 rounded-2xl text-2xl font-bold p-5 shadow-2xl active:scale-90 hover:bg-orange-400 hover:text-white"
            onClick={() => dispatch(setLoggedIn())}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <p>Don't have an account?</p>
          <Link to="/signup">
            <p className="text-xl text-blue-600 underline underline-offset-4 font-bold cursor-pointer">
              Sign Up
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
