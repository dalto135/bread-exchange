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

    const [useRes, setUseRes] = useState([]);

    useEffect(() => {
        API.getSingleReservation(Reservation)
        .then(resData => {
            console.log(resData);
            setUseRes(resData);
            // console.log('remove');
            // setResUser(res);
            // document.location.replace('/');
        })
        .catch(err => console.log(err.message));
    }, [])

    function removeReservation(res) {
        console.log('Reservation');
        console.log(Reservation);
        API.removeReservation(res)
        .then(resData => {
            console.log(resData);
            console.log('remove');
            // setResUser(res);
            document.location.replace('/');
        })
        .catch(err => console.log(err.message));
        
        // document.location.replace('/');
    }

    function acceptReservation() {
        let newAmount = post.quantity - Reservation.quantity;
        if (newAmount < 0) {
            alert('You do not have enough of this item');
            return;
        }
        API.updatePost({_id: post._id, quantity: newAmount})
        .then(postData => {
            console.log(postData);
            // setResUser(res);
            // document.location.replace('/');
        })
        .catch(err => console.log(err.message));
        console.log('accept');
        removeReservation();
    }

      console.log('post reservation userData');
      console.log(userData);

      return (
        <div className='singlereservation'>
            <p>Quantity: {Reservation.quantity}</p>
            <p>User: {resUser.data?.username}</p>
            <p>Date: {Reservation.reservationDate}</p>
            {Reservation.user_id === userData.data?._id && <button onClick={() => {removeReservation(Reservation._id)}}>Delete</button>}
            {post?.user_id === userData.data?._id && <p>Email: {resUser.data?.email}</p>}
            {post?.user_id === userData.data?._id && <button onClick={acceptReservation}>Accept</button>}
            {post?.user_id === userData.data?._id && <button onClick={() => {removeReservation(Reservation._id)}}>Decline</button>}
            
        </div>
      );
}

export default PostReservation;