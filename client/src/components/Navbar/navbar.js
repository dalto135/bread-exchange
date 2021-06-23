import React from 'react';
import { Link } from 'react-router-dom';

function navBar() {
  return (
      <div>

        <h1>Bread Exchange</h1>
        <Link to='/'>Main page</Link>
        <Link to='/login'>Login</Link>
        <Link to='/Posts'>Posts</Link>
        
      </div>
  );
}

export default navBar;