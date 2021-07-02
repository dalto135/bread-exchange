import React, { useEffect, useState } from 'react';
import API from '../../utils/API';

function LoginButton({loginInfo}) {
    const [pleaseData, setPleaseData] = useState([]);
    
    useEffect(() => {
        API.login(loginInfo)
          .then(res => {
              console.log(res.data);
              setPleaseData(res.data);
          })
      })

      console.log(pleaseData);
}

export default LoginButton;