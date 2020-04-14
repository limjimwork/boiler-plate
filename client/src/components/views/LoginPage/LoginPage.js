import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

function LoginPage(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let postData = {
      email: email,
      password: password,
    };

    dispatch(loginUser(postData)).then((res) => {
      if (res.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label htmlFor="email">Email : </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={onEmailHandler}
        />
        <label htmlFor="password">Password : </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={onPasswordHandler}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
