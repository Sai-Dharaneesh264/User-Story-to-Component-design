import React, { useEffect, useState } from "react";
import Icon from "./components/atoms/Icon";
import Image from "./components/atoms/Image";

interface UserProps {
  name: string;
  age: number;
  gender: 'male' | 'female' | '';
}
function App() {
  const [user, setUser] = useState<UserProps>({
    name: '',
    age: -1,
    gender: ''
  })
  useEffect(() => {
    if (user.name === '') {
      setUser({...user, gender: "", age: -1})
      
    }
  }, [user.name])
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
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      {user.name !== "" && (
        <input
          style={{ height: "30px", width: "220px" }}
          type="number"
          placeholder="Enter your age"
          name="age"
          onChange={(e) => setUser({ ...user, age: Number(e.target.value)})}
        />
      )}
      {user.age > 0 && <Image age={user.age} />}

      {user.name !== "" && (
        <select
          style={{ height: "30px", width: "220px" }}
          name="gender"
          id="gender"
          onChange={(e) => {
            if (e.target.value === "male" || e.target.value === "female") {
              setUser({...user, gender: e.target.value})
            } else {
              setUser({...user, gender: ""})
            }
          }}
        >
          <option value="select gender">select gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      )}
      <div style={{}}>{user.gender !== "" && <Icon gender={user.gender} />}</div>
    </div>
  );
}

export default App;
