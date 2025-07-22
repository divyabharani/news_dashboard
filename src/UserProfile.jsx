import React from 'react'
import UserSettings from './UserSettings';

function UserProfile({theme}) {
  return (
    <div>
    <h2>User Profile</h2>
    <UserSettings theme={theme}/> 
    </div>
  );
}

export default UserProfile;