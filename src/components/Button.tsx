import React from "react";

//The ? after a props tells Typesctipt the property is optional
interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

//color = 'primary' is setting the default value
const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"fade show btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
