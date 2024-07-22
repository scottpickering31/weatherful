export const loginInputs = [
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

export const signUpInputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Name",
    errorMessage:
      "Name should be 3-16 characters and shouldn't include any special characters",
    label: "Name",
    pattern: "/^[a-z ,.'-]+$/i",
    required: true,
    className: "input",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "Please enter a valid email address",
    label: "Email",
    pattern: "/^[w-.]+@([w-]+.)+[w-]{2,4}$",
    required: true,
    className: "input",
  },
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be between 8-20 characters and include at least 1 letter, 1 number and 1 special character",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
    className: "input",
  },
];
