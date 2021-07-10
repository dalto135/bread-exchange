import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
// import { Post } from "../../../../models";
import API from "../../utils/API";
import { UserContext } from '../../utils/user-context';
import PostReservation from "../../components/PostReservation/PostReservation";

function Singlepost() {
    // console.log('currentPost')
    // console.log(currentPost);
    // const { handle } = useParams();
    const location = useLocation();
    // const post = location.state;
    let post = location.state?.post;

    const userData = useContext(UserContext);
    console.log('userData');
    console.log(userData);

    console.log('post');
    console.log(post);
    console.log('userData');
    console.log(userData);

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
        if (!Number.isInteger(reserve.quantity)) {
            alert('You must enter a number');
            return;
        }

        console.log('entity');
        console.log(reserve);

        API.createReservation(reserve)
        .then(res =>{
            console.log(res);
            setUser(res.data);
            document.location.replace('/');
        })
        .catch(err => console.log(err.message));
    }
   
    
    const [newReseration, setNewReservation] = useState({
        _id: Math.random(),
        // user_id: userData.data._id,
        user_id: userData.data?._id,
        post_id: post?._id,
        
    });

    
    

    let quantity = '';
    function inputHandler(event) {
        quantity = event.target.value;
        let intQuantity = parseInt(quantity);

        

        setNewReservation({
            ...newReseration,
            
            quantity: intQuantity
        })

        // if (userData.data) {
        //     setNewReservation({
        //         user_id: userData.data._id
        //     })
        // }
    }




    

    return (
        <div>
            <h1>Post</h1>
            <p>Name: {post?.name}</p>
            <p>Description: {post?.description}</p>
            <p>Location: {post?.location}</p>
            <p>Quantity: {post?.quantity}</p>
            <p>Date Posted: {post?.postDate}</p>
            {/* <p>User: {user.firstName} {user.lastName}</p> */}
            <h1>Reservations</h1>
            {reservations?.map((reservation, i) =>
                 <>
                    <p>{i + 1}.</p>
                {/* //     <p>User ID: {reservation.user_id}</p>
                //     <p>Date: {reservation.reservationDate}</p>
                //     <p>Quantity: {reservation.quantity}</p> */}
              <PostReservation Reservation={reservation} post={post}/> 
                
                </>
            )}
            {/* Button */}

            {userData.data && <h1>Make Reservation</h1>} 
            {userData.data && <input placeholder='Quantity' onChange={inputHandler}/> }
            {userData.data && <button onClick={() => {makeReservation(newReseration)}}>Confirm</button>}
        </div>
    )
}

export default Singlepost;