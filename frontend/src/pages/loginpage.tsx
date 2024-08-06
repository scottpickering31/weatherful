import { useState } from "react";
import FormInput from "../components/FormInput";
import { loginInputs } from "../utils/userAuthData";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxState";
import { setLoggedIn } from "../state/reducers/loggedInSlice";
import { useNavigate } from "react-router-dom";
import { setuserData } from "../state/reducers/setUserDataSlice";
import { setAvatarIconData } from "../state/reducers/avatarIconDataSlice";
import toast, { Toaster } from "react-hot-toast";

function Loginpage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await fetch("http://localhost:3000/login", {
        const response = await fetch("https://xsjs2s-3000.csb.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        const user = data.user;
        dispatch(setLoggedIn(true));
        dispatch(setuserData(user));
        dispatch(setAvatarIconData(user.avatar));
        navigation("/dashboard");
        console.log(user);
      } else {
        toast.error(`Email & Password not recognised. Please try again!`);
      }
    } catch (err) {
      console.log(err);
    }
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
          Login
        </h1>
        <div className="flex flex-col items-center bg-slate-100 w-1/4 rounded-2xl">
          {loginInputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button className="bg-slate-500 p-5 rounded-full m-5">Submit</button>
          <p>Don't have an account?</p>
          <a href="/signup" className="underline text-blue-600 cursor-pointer">
            Sign up here!
          </a>
        </div>
      </form>
    </div>
  );
}

export default Loginpage;
