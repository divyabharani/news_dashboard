import React, { useState } from 'react'

function UserInfo() {
  const[name, setName]= useState("Guest");
  const[age,  setAge]=useState(18);
  return (
    <div>
      <h2>Name:{name}</h2>
      <h2>Age:{age}</h2>
      <button onclick={() =>  setName("John") }></button>
      <button onClick ={() => setAge(age+1)}>Increase Age</button>

    </div>
  );
}

export default UserInfo
