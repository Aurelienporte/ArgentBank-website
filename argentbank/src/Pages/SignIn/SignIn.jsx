import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import "./SignIn.css";
import FormWrapper from "../../Components/FormWrapper/FormWrapper";

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
import { hasError, noError } from "../../features/form/formSlice";

function SignIn() {
  const isConnected = useSelector((state) => state.user.isConnected);
  const [login] = useUserLoginMutation();
  const [getUser] = useGetUserMutation();
  const dispatch = useDispatch();

  let nameRef = useRef(null);
  let passwordRef = useRef(null);
  const [errorLogin, setErrorLogin] = useState(false);

  async function submit(e) {
    e.preventDefault();
    let credentials = {
      email: nameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      await login(credentials)
        .unwrap()
        .then((success) => {
          if (success.status === 200) {
            dispatch(setToken(success.body.token));
            try {
              getUser()
                .unwrap()
                .then((profile) => {
                  dispatch(firstName(profile.body.firstName));
                  dispatch(lastName(profile.body.lastName));
                  dispatch(userName(profile.body.userName));
                  dispatch(logIn());
                })
                .catch((err) => console.log(err));
            } catch (err) {
              console.log("An error occured when loading user profile");
            }
          }
        })
        .catch((error) => {
          console.log("An error occured : ", error);
          if (error.status >= 400 && error.status < 500) {
            setErrorLogin("Invalid Fields");
            dispatch(hasError());
          }
          if (error.status >= 500) {
            setErrorLogin("Internal Server Error");
            dispatch(hasError());
          }
        });
    } catch (err) {
      console.log("An error occured : ", err);
    }
  }
  return isConnected ? (
    <Navigate to="/user"></Navigate>
  ) : (
    <main className="main bg-dark">
      <FormWrapper title="Sign In" submit={submit}>
        <div className="input-wrapper">
          <div className="label-wrapper">
            <label htmlFor="username">Username</label>
            {errorLogin && <span className="error">{errorLogin}</span>}
          </div>
          <input
            type="text"
            id="username"
            name="username"
            ref={nameRef}
            onChange={() => {
              setErrorLogin(null);
              dispatch(noError());
            }}
          />
        </div>
        <div className="input-wrapper">
          <div className="label-wrapper">
            <label htmlFor="password">Password</label>
            {errorLogin && <span className="error">{errorLogin}</span>}
          </div>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
            onChange={() => {
              setErrorLogin(null);
              dispatch(noError());
            }}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" name="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {errorLogin ? (
          <button className="sign-in-button" disabled>
            Sign In
          </button>
        ) : (
          <button className="sign-in-button">Sign In</button>
        )}
      </FormWrapper>
    </main>
  );
}

export default SignIn;
