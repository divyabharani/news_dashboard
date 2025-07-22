import React, {useState} from 'react'

function User() {
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");

    function handleSubmit(){ alert(`Submitted: ${name}, ${email}`) ;
}
  return (
    <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value ={name} onChange={(e)=>
        setName(e.target.value)}/>
    
    <label>Email:</label>
    <input type="email" value={name} onChange={(e) =>
     setEmail(e.target.value)}/>
<button>Submit</button>
    </form>
  );
}

export default User