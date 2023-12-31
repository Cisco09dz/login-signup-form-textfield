import { Password } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { useState } from "react";

function Test() {
  const [input, setinput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handler = (e) => {
    setinput((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };
  const sub = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div>
      <form onSubmit={sub}>
        <TextField
          name="name"
          type={"text"}
          sx={{ margin: 3 }}
          value={input.name}
          onChange={handler}
          placeholder="name"
          variant="outlined"
        />
        <TextField
          name="email"
          type={"text"}
          sx={{ margin: 3 }}
          value={input.email}
          onChange={handler}
          placeholder="email"
          variant="standard"
        />
        <TextField
          name="password"
          type={"password"}
          sx={{ margin: 3 }}
          value={input.password}
          onChange={handler}
          placeholder="password"
          variant="filled"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Test;
