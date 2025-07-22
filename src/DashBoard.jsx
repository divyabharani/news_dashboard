import React from 'react'


function DashBoard({theme}) {
  return (
    <div 
    style ={{
        backgroundColor: theme === "light"? "White":
    "black",
      color: theme === "light"? "black": "white",
      padding: "20px",
    }}
    >
        <h2>Dashboard</h2>
        <p>Current Theme: {theme}</p>
    </div>
  );
}

export default DashBoard