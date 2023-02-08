import React, { useState } from "react";
//import Register from "../RegisterPage/Register";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase_Confiq";
function SignUp(props) {
  const navigate = useNavigate();
  const [enteredTitle, setTitle] = useState("");
  const [enteredPassword, setPassword] = useState("");

  // const changeTitle = (event) => {
  //   setTitle(event.target.value);
  // };
  // const changePassword = (event) => {
  //   setPassword(event.target.value);
  // };

  const register = async () => {
    const user = await createUserWithEmailAndPassword(
      auth,
      enteredTitle,
      enteredPassword
    );
    console.log(user);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const Data = {
      Name: enteredTitle,
      Password: enteredPassword,
    };
    // console.log(Data);

    //alert("successfully logged in");

    setTitle("");
    setPassword("");
  };

  const saveExpenseDataHandler = (EnteredExpensedata) => {
    const data = {
      ...EnteredExpensedata,
      id: 123,
    };

    console.log(data);
    props.AddChangeHandler(data);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div id="page1">
          <div className="login">
            <div className="content">
              <h2>Sign in</h2>
              <br></br>
              <label id="s1">Email or mobile number</label>
              <label>
                <input
                  type="email"
                  id="inpt2"
                  value={enteredTitle}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </label>
              <br />
              <br />
              <label id="s1">
                Enter Password
                <input
                  type="password"
                  id="inpt2"
                  minlength="8"
                  value={enteredPassword}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </label>
              <br />
              <br />
              <label>
                <button type="submit" id="inpt1" onClick={register}>
                  Continue
                </button>
              </label>{" "}
              <br />
              <br />
              <label id="s3">
                By continuing, you agree to{" "}
                <label id="page">
                  Amazon's Conditions of Use and Privacy Notice.
                </label>
              </label>{" "}
              <br /> <br />
              <label>
                <a href="#" id="s2">
                  Need help?
                </a>
              </label>
              <br /> <br />
              <div id="amazone">
                <hr id="amazone1" />
                <p style={{ display: "inline" }}>New Amazone</p>{" "}
                <hr id="amazone1" />
              </div>
              <br />
              <br />
              <label>
                <button id="inpt2" onClick={() => navigate("/Register")}>
                  Create your Amazone account
                </button>
              </label>
            </div>
          </div>
        </div>
      </form>{" "}
      {/* <Register onSaveExpenseData={saveExpenseDataHandler} /> */}
    </>
  );
}

export default SignUp;
