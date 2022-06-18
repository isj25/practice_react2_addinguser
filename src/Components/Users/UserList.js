import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";
export default function UserList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user}>
            {user.username} ({user.age} Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
