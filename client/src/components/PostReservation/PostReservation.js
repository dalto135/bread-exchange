import React, { useEffect, useState } from 'react';
import API from '../../utils/API';

function PostReservation({Reservation, userInfo}) {
    const [userData, setUserData] = useState([]);
    console.log('userInfo');
    console.log(userInfo);
    useEffect(() => {
        // API.login(loginInfo)
        // .then(res => {
        //     console.log(res.data);
        //     setPleaseData(res.data);
        // })
        API.getSingleUser(Reservation)
        .then(res => {
            console.log(res);
            setUserData(res);
            // document.location.replace('/');
        })
        .catch(err => console.log(err.message));

    }, [])

    const [postData, setPostData] = useState([]);

    useEffect(() => {
        API.getPostByID(Reservation)
        .then(res => {
            console.log(res);
            setPostData(res);
            // document.location.replace('/');
        })
        .catch(err => console.log(err.message));
    }, [])

  

      console.log('post reservation userData');
      console.log(userData);

      return (
        <div className='singlereservation'>
            <p>User: {userData.data?.firstName} {userData.data?.lastName}</p>
            <p>Quantity: {Reservation.quantity}</p>
            <p>Date: {Reservation.reservationDate}</p>
            {/* {postData.data?.user_id === userInfo?._id && <button>Delete</button>} */}
        </div>
      );
}

export default PostReservation;