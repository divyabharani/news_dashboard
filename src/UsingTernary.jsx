import React from 'react'

function UsingTernary({isLoggedIn}) {
    const LOggedIn = false;
  return (
    <h1>{isLoggedIn? "Welcome Back!}":"Please LoggedIn"}</h1>
  );
}

export default UsingTernary