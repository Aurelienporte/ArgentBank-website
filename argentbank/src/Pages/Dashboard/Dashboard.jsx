import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { Navigate } from "react-router-dom";

import FormWrapper from "../../Components/FormWrapper/FormWrapper";
import Account from "../../Components/Account/Account";
import "./Dashboard.css";

import { useSetUserMutation } from "../../features/api/apiSlice";
import { hasError, noError } from "../../features/form/formSlice";
import { userName } from "../../features/user/userSlice";

//Mocked database
const bankProducts = [
  {
    id: "1",
    title: "Argent Bank Checking",
    totalTransactions: "8349",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    id: "2",
    title: "Argent Bank Savings",
    totalTransactions: "6712",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    id: "3",
    title: "Argent Bank Credit Card",
    totalTransactions: "8349",
    amount: "$184.30",
    description: "Current Balance",
  },
];

function Dashboard() {
  const isConnected = useSelector((state) => state.user.isConnected);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const nickName = useSelector((state) => state.user.userName);
  const [editName] = useSetUserMutation();
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [errorEditing, setErrorEditing] = useState(false);
  let newNameRef = useRef(null);

  async function submit(e) {
    e.preventDefault();
    let newName = { userName: newNameRef.current.value };
    console.log("nom récupéré", newName);
    try {
      editName(newName)
        .unwrap()
        .then((success) => {
          dispatch(userName(success.body.userName));
          if (success.status === 200) {
            console.log("username retouné :", success.body.userName);
          }
        })
        .catch((err) => {
          console.log("error editing", err);
          if (err.status >= 400 && err.status < 500) {
            setErrorEditing("Unauthorised");
            dispatch(hasError());
          }
          if (err.status >= 500) {
            setErrorEditing("Server Error");
            dispatch(hasError());
          }
        });
      setIsEditing(false);
      dispatch(noError());
    } catch (err) {
      console.log("An error occured : ", err);
    }
  }

  return isConnected ? (
    <main className="main bg-dark">
      <div className={!isEditing ? "header light" : "header"}>
        {!isEditing ? (
          <>
            <h1>
              Welcome back
              <br />
              <span>
                {nickName}&nbsp;{firstName}&nbsp;!
              </span>
            </h1>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit your Name
            </button>
          </>
        ) : (
          <FormWrapper title="Edit user info" submit={submit}>
            <div className="input-wrapper">
              <div className="label-wrapper">
                <label htmlFor="newName">User name</label>
                {errorEditing && <span className="error">{errorEditing}</span>}
              </div>
              <input type="text" id="newName" name="newName" ref={newNameRef} />
            </div>
            <div className="input-wrapper">
              <label>First name</label>
              <input type="text" value={firstName} disabled />
            </div>
            <div className="input-wrapper">
              <label>Last name</label>
              <input type="text" value={lastName} disabled />
            </div>
            <div className="buttons-wrapper">
              <button className="sign-in-button" type="submit">
                Save
              </button>
              <button
                className="sign-in-button"
                type="reset"
                onClick={() => {
                  setIsEditing(false);
                  setErrorEditing(false);
                  dispatch(noError());
                }}
              >
                Cancel
              </button>
            </div>
          </FormWrapper>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {bankProducts.map((product) => (
        <Account
          title={`${product.title} (x${product.totalTransactions})`}
          amount={product.amount}
          description={product.description}
          key={product.id}
        />
      ))}
    </main>
  ) : (
    <Navigate to="/"></Navigate>
  );
}

export default Dashboard;
