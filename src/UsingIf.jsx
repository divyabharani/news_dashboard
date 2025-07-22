import UsingIf from 'react'

function Status() {
    const isLoggedIn = false;
    if (isLoggedIn) {
    
  return <h1>Welcome Back!</h1>;
    } else{
        return <h1>Please Log In</h1>;
    }
}


export default UsingIf