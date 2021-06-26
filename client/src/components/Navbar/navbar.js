import React from 'react';
import { Link } from 'react-router-dom';

function navBar() {
  return (
      <div>

        <Link to='/'>Main page</Link>
        <Link to='/login'>Login</Link>
        <Link to='/Posts'>Posts</Link>
        <Link to='/UserPage'>My Userpage</Link>
        
      </div>
  );
}

export default navBar;