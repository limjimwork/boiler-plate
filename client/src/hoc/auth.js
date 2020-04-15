import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authUser } from "../_actions/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
  // option =[null(아무나 출입 가능), true(로그인한 유저만 출입 가능), false(로그인 한 경우 출입 불가능)]
  // adminRoute = [null, true(관리자만 출입 가능)]

  function AuthenticationCheck(props) {
    let user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(authUser()).then((response) => {
        if (!response.payload.isAuth) {
          if (!option) {
            props.history.push("/login");
          }
        } else {
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (option === false) {
              props.history.push("/");
            }
          }
        }
      });
    }, []);

    return <SpecificComponent {...props} user={user} />;
  }

  return AuthenticationCheck;
}
