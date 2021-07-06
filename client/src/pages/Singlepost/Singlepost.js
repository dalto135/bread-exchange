import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
// import { Post } from "../../../../models";
import API from "../../utils/API";

function Singlepost() {
    // console.log('currentPost')
    // console.log(currentPost);
    // const { handle } = useParams();
    const location = useLocation();
    // const post = location.state;
    let post = location.state.post;

    // console.log(post);

    const [reservations, setReservations]= useState([]);
    const [user, setUser] = useState([]);
    const [resUser, setResUser] = useState([]);

    useEffect(() => {
        API.getReservations(post)
        .then(res =>{
            console.log(res)
            setReservations(res.data)
        })
        .catch(err => console.log(err.message));
    }, [post]);

    useEffect(() => {
        API.getSingleUser(post)
        .then(res =>{
            console.log(res)
            setUser(res.data)
        })
        .catch(err => console.log(err.message));
    }, [post])

    // useEffect(() => {
    //     API.getSingleUser(post)
    //     .then(res =>{
    //         console.log(res)
    //         setResUser(res.data)
    //     })
    //     .catch(err => console.log(err.message));
    // }, [])

    function makeReservation(reserve) {
        API.createReservation(reserve)
        .then(res =>{
            console.log(res)
            setUser(res.data)
        })
        .catch(err => console.log(err.message));
    }

    let quantity = '';
    function inputHandler(event) {
        quantity = event.target.value;
    }


    

    return (
        <div>
            {/* Card here */}
            {/* <h1>Business Name</h1>
            <p>List of items</p>
            <p>Location</p>
            <p>Expiration Date</p> */}
            <h1>Post</h1>
            <p>Name: {post.name}</p>
            <p>Description: {post.description}</p>
            <p>Location: {post.location}</p>
            <p>Quantity: {post.quantity}</p>
            <p>Date Posted: {post.postDate}</p>
            {/* <p>User: {user.firstName} {user.lastName}</p> */}
            <h1>Reservations</h1>
            {reservations?.map((reservation, i) =>
                <>
                    <p>{i + 1}.</p>
                    <p>User ID: {reservation.user_id}</p>
                    <p>Date: {reservation.reservationDate}</p>
                    <p>Quantity: {reservation.quantity}</p>
                </>
            )}
            {/* Button */}

            <h1>Make Reservation</h1>
            <input placeholder='Quantity' onChange={inputHandler}/>
            <button onClick={() => {makeReservation({_id: Math.random(), quantity: parseInt(quantity), user_id: 'user_id', post_id: post._id })}}>Confirm</button>
        </div>
    )
}

export default Singlepost;