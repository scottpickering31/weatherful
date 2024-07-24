import FormInput from "../components/FormInput";
import SignUpSuccess from "./signUpSuccess";
import { useState } from "react";
import { signUpInputs } from "../utils/userAuthData";
import { useAppDispatch } from "../hooks/useReduxState";
import { setLoggedIn } from "../state/reducers/loggedInSlice";

function SignupPage() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [spinner, setSpinner] = useState(false);
  const [name, setName] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const dispatch = useAppDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSpinner(true);
    try {
      // const response = await fetch("http://localhost:3000/signup", {
      const response = await fetch("https://xsjs2s-3000.csb.app/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.status === 201) {
        dispatch(setLoggedIn(true));
        setSpinner(false);
        setName(values.name);
        setSignedUp(true);
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen items-center justify-center p-4 flex-col">
      {!signedUp ? (
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center h-full"
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
            Sign up
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
            <button className="bg-slate-500 p-5 rounded-full m-5">
              Submit
            </button>
            {spinner && (
              <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" />
            )}
            <p>Already have an account?</p>
            <a href="/login" className="underline text-blue-600 cursor-pointer">
              Login here!
            </a>
          </div>
        </form>
      ) : (
        <div>
          <SignUpSuccess name={name} />
        </div>
      )}
    </div>
  );
}

export default SignupPage;
