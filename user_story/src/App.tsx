import React, { useEffect, useState } from "react";
import Icon from "./components/atoms/Icon";
import Image from "./components/atoms/Image";

type gender = "male" | "female" | undefined;
function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(-1);
  const [gender, setGender] = useState<gender>(undefined);
  useEffect(() => {
    if (name === '') {
      setGender(undefined)
      setAge(-1);
    }
  }, [name])
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        style={{ height: "30px", width: "220px" }}
        type="text"
        placeholder="Enter your name"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      {name !== "" && (
        <input
          style={{ height: "30px", width: "220px" }}
          type="number"
          placeholder="Enter your age"
          name="age"
          onChange={(e) => setAge(Number(e.target.value))}
        />
      )}
      {age > 0 && <Image age={age} />}

      {name !== "" && (
        <select
          style={{ height: "30px", width: "220px" }}
          name="gender"
          id="gender"
          onChange={(e) => {
            e.target.value === "male"
              ? setGender("male")
              : e.target.value === "female"
              ? setGender("female")
              : setGender(undefined);
          }}
        >
          <option value="select gender">select gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      )}
      <div style={{}}>{gender && <Icon gender={gender} />}</div>
    </div>
  );
}

export default App;
