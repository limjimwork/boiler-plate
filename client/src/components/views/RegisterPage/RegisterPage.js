import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPswd, setConfirmPswd] = useState("");

  // Input change
  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onConfirmPswdHandler = (e) => {
    setConfirmPswd(e.currentTarget.value);
  };

  // Form submit
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPswd) {
      return alert("비밀번호가 일치하지 않습니다.");
    }

    let postData = {
      email: email,
      name: name,
      password: password,
    };

    dispatch(registerUser(postData)).then((res) => {
      if (res.payload.success) {
        props.history.push("/login");
      } else {
        alert("Failed to Sign up.");
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
        <label htmlFor="name">Name : </label>
        <input id="name" type="text" value={name} onChange={onNameHandler} />
        <label htmlFor="password">Password : </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={onPasswordHandler}
        />
        <label htmlFor="confirmPswd">Confirm Password : </label>
        <input
          id="confirmPswd"
          type="password"
          value={confirmPswd}
          onChange={onConfirmPswdHandler}
        />
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default RegisterPage;
