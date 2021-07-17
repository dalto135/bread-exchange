// import React, { createContext, useEffect, useState } from "react";
import React from 'react';
import API from './API';

export const PostContext = React.createContext();
// const { Provider } = PostContext;
// export const Post = React.createContext();

// export function PostProvider({children}) {
//     // const [userData, setUserData] = useState([]);

//     // useEffect(() => {
//     //     API.userInfo()
//     //     .then(user => {
//     //       console.log(user);
//     //       setUserData(user);
//     //     })
//     //   }, []);

//     let post= 'hello';

//     // export function selectPost(postData) {
//     //     post = postData;
//     // }

//     //   localStorage.setItem('localuser', JSON.stringify(userData));

//     return (
//         <Provider value={post} >
//             {children}
//         </Provider>
//     );
// }