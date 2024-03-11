import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./SignIn.css";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import {
  useUserLoginMutation,
  useGetUserMutation,
} from "../../features/api/apiSlice";
import {
  firstName,
  lastName,
  userName,
  logIn,
  setToken,
} from "../../features/user/userSlice";

function SignIn() {
  const isConnected = useSelector((state) => state.user.isConnected);
  const [login, { data }] = useUserLoginMutation();
  const [getUser, result] = useGetUserMutation();
  const dispatch = useDispatch();
  let nameRef = useRef(null);
  let passwordRef = useRef(null);

  async function submit(e) {
    e.preventDefault();
    let credentials = {
      email: nameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      await login(credentials);
      console.log("réponse obtenue", data);
      console.log("token reçu", data.body.token);
      dispatch(setToken(data.body.token));
      await getUser();
      console.log("getuser", result.data.body.firstName);
      dispatch(firstName(result.data.body.firstName));
      dispatch(lastName(result.data.body.lastName));
      dispatch(userName(result.data.body.userName));
      dispatch(logIn());
    } catch (err) {
      console.log(err);
    }
  }
  return isConnected ? (
    <Navigate to="/user"></Navigate>
  ) : (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <form onSubmit={submit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" ref={nameRef} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
