import React, { useContext, useEffect, useState } from 'react';
import API from '../../utils/API';
import { UserContext } from '../../utils/user-context';
import { PostContext } from '../../utils/post-context';

function PostReservation({Reservation, post}) {
    const userData = useContext(UserContext);
    console.log('userData');
    console.log(userData);

    const [postContext, setPostContext] = useContext(PostContext);
    const [usePost, setUsePost] = useState([]);
    // const [resUser, setResUser] = useState([]);

    useEffect(() => {
        API.findByPost_id(Reservation)
        .then(postData => {
            console.log('postData');
            console.log(postData);
            setUsePost(postData);

            // API.getSingleUser(postData)
            // .then(res => {
            //     console.log('post user');
            //     console.log(res);
            //     setResUser(res);
            // })
            // .catch(err => console.log(err.message));
        })
        // .then()
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
            document.location.reload();
        })
        .catch(err => console.log(err.message));        
    }


    console.log('post reservation userData');
    console.log(userData);

    function selectPost() {
        setPostContext(usePost);
        document.location.replace('#/singlepost');
    }

      return (
        <div className='singlereservation'>
            <h2>{usePost.data?.name}</h2>
            <p>Quantity: {Reservation.quantity}</p>
            {/* <p>User: {resUser.data?.username}</p> */}
            <p>Date: {Reservation.reservationDate}</p>
            {/* <button onClick={selectPost}>View Post</button> */}
            <button onClick={() => {removeReservation(Reservation._id)}}>Delete</button>
        </div>
      );
}

export default PostReservation;