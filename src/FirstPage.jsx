import React, {useState} from "react";


import UserProfile from "./UserProfile";
import LogIn from "./LogIn";
import SignUp from "./SignUp";


function FirstPage() {
    const [theme,setTheme] = useState("light");
    
    const toggleTheme = () => {
        setTheme(theme=== "light"? "dark": "light");
    };
  return (
    <div>
        <h1>First Page</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <SignUp />
        <LogIn />
        <UserProfile theme={theme}/>
    </div>
  );
}

export default FirstPage;