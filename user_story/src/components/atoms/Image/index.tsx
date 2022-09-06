import React from "react";

interface ImageProps {
  age: number;
}

const Image = ({ age }: ImageProps) => {
  const getMessage = (age: number) => {
    if (age > 0 && age < 18) {
      return <h1>minor</h1>;
    } else if (age >= 18 && age <= 30) {
      return <h1>adult</h1>;
    } else if (age > 30 && age < 100) {
      return <h1>senior citizen</h1>;
    } else {
      return <h1>Enter correct age</h1>;
    }
  };
  return <>{getMessage(age)}</>;
};

export default Image;
