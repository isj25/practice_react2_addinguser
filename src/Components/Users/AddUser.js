import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error,setError] = useState();


  function submitHandler(event) {
    event.preventDefault();
    //console.log(userName,age);

    if (userName.trim().length === 0) {
      setError({
        title:"Invalid Input",
        message:"Please Enter a valid name and age (non-empty values)"
      });
      return;
    }

    if (+age < 1) {
      setError({
        title:"Invalid Input",
        message:"Enter a valid age"
      });
      return;
    }
    const newuser = {
      username: userName,
      age: age,
    };
    props.addNewUser(newuser);
    setUserName("");
    setAge("");
  }

  function userNameHandler(event) {
    setUserName(event.target.value);
  }

  function ageHandler(event) {
    setAge(event.target.value);
  }

  function errorButton()
  {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onClick={errorButton}/>}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"
            onChange={userNameHandler}
            value={userName}
          ></input>

          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={ageHandler}
            value={age}
          ></input>
          <Button type="submit" buttonHandler={submitHandler}>
            <p>Add User</p>
          </Button>
        </form>
      </Card>
    </div>
  );
}
