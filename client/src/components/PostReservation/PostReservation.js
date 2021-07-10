import React, { useContext, useEffect, useState } from 'react';
import API from '../../utils/API';
import { UserContext } from '../../utils/user-context';

function PostReservation({Reservation, post}) {
    const userData = useContext(UserContext);
    console.log('userData');
    console.log(userData);


    const [resUser, setResUser] = useState([]);
    // console.log('userInfo');
    // console.log(userInfo);
    useEffect(() => {
        // API.login(loginInfo)
        // .then(res => {
        //     console.log(res.data);
        //     setPleaseData(res.data);
        // })
        API.getSingleUser(Reservation)
        .then(res => {
            console.log(res);
            setResUser(res);
            // document.location.replace('/');
        })
        .catch(err => console.log(err.message));

    }, [])

    // const [postData, setPostData] = useState([]);

    // useEffect(() => {
    //     API.getPostByID(Reservation)
    //     .then(res => {
    //         console.log(res);
    //         setPostData(res);
    //         // document.location.replace('/');
    //     })
    //     .catch(err => console.log(err.message));
    // }, [])

  

      console.log('post reservation userData');
      console.log(userData);

      return (
        <div className='singlereservation'>
            <p>User: {resUser.data?.username}</p>
            <p>Quantity: {Reservation.quantity}</p>
            <p>Date: {Reservation.reservationDate}</p>
            {post?.user_id === userData.data?._id && <p>Email: {resUser.data?.email}</p>}
            {post?.user_id === userData.data?._id && <button>Accept</button>}
            {post?.user_id === userData.data?._id && <button>Decline</button>}
            
        </div>
      );
}

export default PostReservation;