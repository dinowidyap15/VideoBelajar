import React from "react";
import Label from "./Label";
import Input from "./Input";

export const InputForm = (props) => {
  const { label, name, type } = props;
  return (
    <div class="mb-2 mt-4">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} />
    </div>
  );
};

export default InputForm;
