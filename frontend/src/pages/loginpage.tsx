import { useState } from "react";
import FormInput from "../components/FormInput";
import { useAppDispatch } from "../hooks/useReduxState";
import { setUserInfo } from "../state/reducers/userInfoSlice";
import { setLoggedIn } from "../state/reducers/loggedInSlice";

function Loginpage() {
  const dispatch = useAppDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please enter a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be between 8-20 characters",
      patern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      label: "Password",
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data.message);
        console.log("User data:", {
          email: values.email,
          password: values.password,
        });

        localStorage.setItem(
          "userInfo",
          JSON.stringify([values.email, values.password])
        );

        dispatch(setUserInfo([values.email, values.password]));
        dispatch(setLoggedIn(true));
        window.location.href = "/weather";
      } else {
        alert("Email & Password not recognised, try again");
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
          {inputs.map((input) => (
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
