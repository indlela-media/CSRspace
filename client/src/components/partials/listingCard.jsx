import React from 'react'
import { NavLink } from 'react-router-dom';
import moment from 'moment';


function listingCard({ post: { body, createdAt, id, username } }) {
    
    return (
        <div>
            <div className="d-flex flex-row justify-content-center">
                <p className="media-body pb-3 mb-0 small lh-125  border-gray blackText">
                <strong className="d-block blackText">{username}</strong><br/>
                <small>{moment(createdAt).fromNow()}</small>
                <p>{body}</p>
                </p>
            </div>

            <NavLink to={`/posts/${id}`} class="btn btn-sm btn-primary mb-2">Read more</NavLink>
        </div>
    )
}

export default listingCard;
