import { Link } from "react-router-dom";

function SignUpSuccess({ name }: { name: string }) {
  return (
    <div className="border border-black p-10 rounded-2xl shadow-2xl bg-orange-100 flex flex-col justify-center items-center">
      <p className="text-3xl mb-10">User created sucessfully!</p>
      <p>Welcome to Weatherful, {name}</p>
      <Link to={"/login"}>
        <button className="text-blue-500 underline text-lg bg-white rounded-2xl py-3 px-10 border-2 hover:scale-110 hover:text-red-500">
          Login
        </button>
      </Link>
    </div>
  );
}

export default SignUpSuccess;
