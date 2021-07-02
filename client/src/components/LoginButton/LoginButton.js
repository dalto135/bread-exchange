import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// import "./Button.css"
import API from '../../utils/API';

function LoginButton({loginInfo}) {
    const [userData, setUserData] = useState([]);
    console.log('username');
    console.log(loginInfo.username);

    console.log('password');
    console.log(loginInfo.password);



    
    // useEffect(() => {
    //     retrieveUser();
    // })
        function retrieveUser() {
        //  try {
        //    const data = await fetch('/api/user/login', {
        //      method: 'POST',
        //      body: JSON.stringify({ username, password }),
        //      headers: { 'Content-Type': 'application/json' },
        //    })
        //    .then(res => res.json())
        //    .then(console.log('useEffect'));
        //    setUserData(data);
        //  }
        //  catch (err) {
        //    console.log('err.message');
        //    console.log(err.message);
        //  }

            API.login(loginInfo)
            .then(res => {
                console.log(res.data);
                setUserData(res.data);
            })
            .catch(err => console.log(err.message));

            // API.getPosts()
            // .then(res => {
            //     console.log(res);
            //     setUserData(res.data);
            // })

        
         
       }
    //    retrieveUser();
    // }, [username, password])

     console.log(userData);

     if (userData !== null) {
         if (userData.password !== loginInfo.password) {
            console.log('Incorrect username or password');
         } else {
            console.log('Login successful!');
         }
     } else {
        console.log('Incorrect username or password');
     }
    //    if (userData === null) {
    //      console.log('Incorrect username or password');
    //    } else {
    //        console.log('Login successful!');
    //    }
    
   
       

  return (
    <button id="button" onClick={retrieveUser}>Login</button>
    // <Link  to={'/login'} id='button'>Login</Link>
    
  );
}

export default LoginButton;
