import React,{useState} from 'react';
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";
function App() {
  const [users,addUser] = useState([]);
  function addNewUser(user)
  {
    //console.log(user);
      addUser((prev)=>{
        return [user,...prev]
      });
  }
  return (
    <div>
      <AddUser addNewUser = {addNewUser}/>
      <UserList users = {users}/>
    </div>
  );
}

export default App;
