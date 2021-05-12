import React from 'react'
import { NavLink } from 'react-router-dom';
import moment from 'moment';


function listingCard({ post: { name, summary, createdAt, id } }) {
    
    return (
        <div>
            <img src="" alt="" />
            <div className="p-3">
                <h5>{name}</h5>
                <small>{moment(createdAt).fromNow()}</small>
                <p className="media-body pb-3 mb-0 small lh-125 blackText w-80">{summary}</p>
                <NavLink to={`/posts/${id}`} class="btn btn-sm btn-primary mb-2">Read more</NavLink>
            </div>
        </div>
    )
}

export default listingCard;
