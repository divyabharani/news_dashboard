import React from 'react'

function NotFound() {
  return (
    <div className="not-found">
        <h1>404-Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/">GO Back Home</Link>
        

    </div>
  )
}

export default NotFound