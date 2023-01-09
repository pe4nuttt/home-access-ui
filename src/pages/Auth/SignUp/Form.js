import React, { useState } from "react";
import FormSignUp from "./FormSignUp";
import "./Form.css";

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      {!isSubmitted ? (
        <FormSignUp submitForm={submitForm} />
      ) : (
        <h1>Submitted</h1>
      )}
    </>


  );
}

export default Form;
