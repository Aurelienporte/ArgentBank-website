import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { Navigate } from "react-router-dom";
import Account from "../../Components/Account/Account";
import "./Dashboard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { useSetUserMutation } from "../../features/api/apiSlice";

function Dashboard() {
  const isConnected = useSelector((state) => state.user.isConnected);
  const firstName = useSelector((state) => state.user.firstName);
  const userName = useSelector((state) => state.user.userName);
  const [editName, result] = useSetUserMutation();
  const dispatch = useDispatch();

  let newNameRef = useRef(null);
  let dialogRef = useRef(null);

  async function submit(e) {
    e.preventDefault();
    let newName = { userName: newNameRef.current.value };
    console.log(newName);
    try {
      await editName(newName);

      console.log("réponse edit", result.data.body.userName);
      dispatch(userName(result.data.body.userName));
      dialogRef.current.close();
    } catch (err) {
      console.log("error editing", err);
    }
  }

  return isConnected ? (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          <span>
            {userName}&nbsp;{firstName}&nbsp;!
          </span>
        </h1>
        <button
          className="edit-button"
          onClick={() => dialogRef.current.showModal()}
        >
          Edit your Name
        </button>
        <dialog ref={dialogRef} className="modal">
          <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={() => dialogRef.current.close()}
          />
          <FontAwesomeIcon icon={faCircleUser} />
          <h2>Edit your name</h2>
          <form onSubmit={submit}>
            <div className="input-wrapper">
              <label htmlFor="newName">New username</label>
              <input type="text" id="newName" name="newName" ref={newNameRef} />
            </div>
            <button className="sign-in-button">Confirm</button>
          </form>
        </dialog>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      ></Account>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      ></Account>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      ></Account>
    </main>
  ) : (
    <Navigate to="/"></Navigate>
  );
}

export default Dashboard;
