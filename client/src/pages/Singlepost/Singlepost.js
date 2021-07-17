import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
// import { Post } from "../../../../models";
import API from "../../utils/API";
import { UserContext } from '../../utils/user-context';
import { PostContext } from '../../utils/post-context';
import PostReservation from "../../components/PostReservation/PostReservation";

function Singlepost() {
    // console.log('currentPost')
    // console.log(currentPost);
    // const { handle } = useParams();
    // const location = useLocation();
    // const post = location.state;
    // let post = location.state?.post;

    const userData = useContext(UserContext);
    console.log('userData');
    console.log(userData);

    const [postContext, setPostContext] = useContext(PostContext);
    console.log('postContext');
    console.log(postContext);

    const postData = useContext(PostContext);
    console.log('postData');
    console.log(postData[0]);

    // console.log('post');
    // console.log(post);
    // console.log('userData');
    // console.log(userData);

    // console.log(post);

    // const [post, setPost] = useState([]);

    // useEffect(() => {
    //     API.getPostByID({_id: 'currentPost'})
    //     .then(postData => {
    //         console.log(postData);
    //         setPost(postData);
    //     })
    //     .catch(err => console.log(err.message));
    // }, [])

    const [reservations, setReservations]= useState([]);
    const [user, setUser] = useState([]);
    const [resUser, setResUser] = useState([]);

    useEffect(() => {
        API.getReservations(postContext)
        .then(res =>{
            console.log(res)
            setReservations(res.data)
        })
        .catch(err => console.log(err.message));
    }, [postContext]);

    useEffect(() => {
        API.getSingleUser(postContext)
        .then(res =>{
            console.log(res)
            setUser(res.data)
        })
        .catch(err => console.log(err.message));
    }, [postContext])

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
            document.location.replace('#/Posts');
        })
        .catch(err => console.log(err.message));
    }
   
    
    const [newReseration, setNewReservation] = useState({
        _id: Math.random(),
        // user_id: userData.data._id,
        user_id: userData.data?._id,
        post_id: postContext?._id,
        
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
            {/* <h1>Post</h1> */}
            <div className='card'>
                <h1>{postContext?.name}</h1>
                <p>Description: {postContext?.description}</p>
                <p>Quantity: {postContext?.quantity}</p>
                <p>Location: {postContext?.location}</p>
                <p>User: {user?.username}</p>
                <p>Date Posted: {postContext?.postDate}</p>
                {/* <p>User: {user.firstName} {user.lastName}</p> */}
            </div>
            <h1>Reservations</h1>
            {reservations?.map((reservation, i) =>
                 <div className='card'>
                    <p>{i + 1}.</p>
                {/* //     <p>User ID: {reservation.user_id}</p>
                //     <p>Date: {reservation.reservationDate}</p>
                //     <p>Quantity: {reservation.quantity}</p> */}
              <PostReservation Reservation={reservation} post={postContext}/> 
                
                </div>
            )}
            {/* Button */}

            {userData.data && <h1>Make a Reservation</h1>} 
            {userData.data && <input placeholder='Quantity' onChange={inputHandler}/> }
            {userData.data && <button onClick={() => {makeReservation(newReseration)}}>Confirm</button>}
        </div>
    )
}

export default Singlepost;