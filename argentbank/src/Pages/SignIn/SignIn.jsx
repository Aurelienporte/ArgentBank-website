import { useRef } from "react";
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
  const errorLogin = useSelector((state) => state.form.hasError);
  const [login] = useUserLoginMutation();
  const [getUser] = useGetUserMutation();
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
      //user logging
      login(credentials)
        .unwrap()
        .then((success) => {
          if (success.status === 200) {
            dispatch(setToken(success.body.token));
            try {
              // profile loading
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
        //Error management when logging
        .catch((error) => {
          console.log("An error occured : ", error);
          if (error.status >= 400 && error.status < 500) {
            dispatch(hasError("Invalid Fields"));
          }
          if (error.status >= 500) {
            dispatch(hasError("Server Error"));
          }
        });
    } catch (err) {
      console.log("An error occured : ", err);
    }
  }

  //Redirect to dashboard if connected or load the sign in form
  return isConnected ? (
    <Navigate to="/user"></Navigate>
  ) : (
    <main className="main bg-dark">
      <FormWrapper title="Sign In" submit={submit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            ref={nameRef}
            onChange={() => {
              dispatch(noError());
            }}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
            onChange={() => {
              dispatch(noError());
            }}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" name="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {errorLogin ? (
          <div className="button-wrapper">
            <button className="sign-in-button" disabled>
              Sign In
            </button>
            <span className="error">{errorLogin}</span>
          </div>
        ) : (
          <div className="button-wrapper">
            <button className="sign-in-button">Sign In</button>
            <span className="error hidden">OK</span>
          </div>
        )}
      </FormWrapper>
    </main>
  );
}

export default SignIn;
