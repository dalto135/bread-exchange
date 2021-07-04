import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Singlepost({post}) {
    // const { handle } = useParams();
    const location = useLocation();
    // const post = location.state;
    // let post = location.state.post;

    console.log(post);
    return (
        <div>
            {/* Card here */}
            <h1>Business Name</h1>
            <p>List of items</p>
            <p>Location</p>
            <p>Expiration Date</p>
            {/* <p>Name: {post.name}</p>
            <p>Description: {post.description}</p>
            <p>Location: {post.location}</p>
            <p>Quantity: {post.quantity}</p>
            <p>Date Posted: {post.postDate}</p>
            <p>User: {post.user_id}</p> */}
            {/* Button */}
        </div>
    )
}

export default Singlepost;