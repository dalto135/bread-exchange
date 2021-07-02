import React, { useEffect, useState } from 'react';
// import "./Button.css"

function LoginButton({username, password}) {
    const [userData, setUserData] = useState([]);
    console.log('username');
    console.log(username);

    console.log('password');
    console.log(password);



    useEffect(() => {
        async function hello() {
         try {
           const data = await fetch('/api/user/login', {
             method: 'POST',
             body: JSON.stringify({ username, password }),
             headers: { 'Content-Type': 'application/json' },
           })
           .then(res => res.json())
           .then(console.log('useEffect'));
           setUserData(data);
         }
         catch (err) {
           console.log('err.message');
           console.log(err.message);
         }
         // if (username && password) {
           // const response = await 
           
         // }
           // .catch(err => {
           //   console.log(err.message);
           //   alert('Login attempt failed');
           // });
           // response.ok
           //   ? document.location.replace('/')
           //   : alert('Login attempt failed');
         
       }
       hello();
    }, [username, password])
     console.log(userData);

     if (userData !== null) {
         if (userData.password !== password) {
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
    <button id="button" >Login</button>
  );
  }

export default LoginButton;
