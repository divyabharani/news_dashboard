import React from 'react'
import Dashboard from './DashBoard';

function UserSettings({theme}) {
  return (
    <div>
        <h2>User Settings</h2>
        <Dashboard theme={theme} />
    </div>
  );
}

export default UserSettings;