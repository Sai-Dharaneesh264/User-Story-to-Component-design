import React from "react";

interface ImageProps {
    age: number;
}

const Image = ({ age }: ImageProps) => {
  return (
    <>
      {age > 0 && age < 18 ? (
        <h1>minor</h1>
      ) : age >= 18 && age <= 30 ? (
        <h1>adult</h1>
      ) : (
        <h1>senior citizen</h1>
      )}
    </>
  );
};

export default Image;
