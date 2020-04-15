import React from "react";
import Axios from "axios";

function LandingPage(props) {
  const onClickHandler = () => {
    Axios.get("/api/users/logout").then((res) => {
      if (res.data.success) {
        alert("로그아웃 되었습니다.");
        props.history.push("/login");
      } else {
        alert("Failed to Logout");
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
      <h2>시작 페이지</h2>
      <button style={{ display: "block" }} onClick={onClickHandler}>
        Logout
      </button>
    </div>
  );
}

export default LandingPage;
