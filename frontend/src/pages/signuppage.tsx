import { useState } from "react";
import FormInput from "../components/FormInput";
import { signUpInputs } from "../utils/userAuthData";
import { useAppDispatch } from "../hooks/useReduxState";
import { useNavigate } from "react-router-dom";
import { setuserData } from "../state/reducers/setUserDataSlice";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function SignUpPage() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/signup", values)
      // .post("https://xsjs2s-3000.csb.app/api/signup", values)
      .then((response) => {
        const data = response.data;
        console.log("Response data:", data);
        const user = data.user;
        dispatch(setuserData(user));
        toast.success("Sign up successful, please login!");
        setTimeout(() => {
          navigate("/login");
        }, 1300);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data.error || "Sign up failed");
      });
  };


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen items-center justify-center p-4 flex-col">
      <Toaster
        toastOptions={{
          style: {
            textAlign: "center",
            textWrap: "wrap",
          },
        }}
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full h-full"
      >
        <h1 className="text-slate-600 text-6xl mb-5 underline underline-offset-8 flex flex-row">
          Weather
          <p className="text-orange-500 underline underline-offset-2">ful</p>
        </h1>
        <img
          src="./public/images/weatherful-app-logo.png"
          alt="weatherful logo"
          className="w-20 h-20 absolute left-5 right-100 top-5"
        />
        <h1 className="p-2 text-4xl underline underline-offset-4 tracking-widest opacity-90 text-gray-400">
          Sign Up
        </h1>
        <div className="flex flex-col items-center bg-slate-100 w-1/4 rounded-2xl">
          {signUpInputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className="bg-slate-500 p-5 rounded-full m-5">Submit</button>
          <p>Already have an account?</p>
          <a href="/login" className="underline text-blue-600 cursor-pointer">
            Login here!
          </a>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
