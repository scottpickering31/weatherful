import { useState } from "react";
import styles from "./FormInput.module.css"; 

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="flex items-center justify-center w-full flex-col text-center p-2">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
        required
        className={`${props.className} rounded-2xl p-3 w-2/3`}
      />
      <span className={`text-red-600 text-sm ${styles.errorMessage}`}>
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
