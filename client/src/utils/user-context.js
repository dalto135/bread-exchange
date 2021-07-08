import React, { createContext, useEffect, useState } from "react";
import API from './API';

export const UserContext = createContext();
const { Provider } = UserContext;

export function UserProvider({children}) {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        API.userInfo()
        .then(user => {
          console.log(user);
          setUserData(user);
        })
      }, []);

    //   localStorage.setItem('localuser', JSON.stringify(userData));

    return (
        <Provider value={userData} >
            {children}
        </Provider>
    );
}