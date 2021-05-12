//REACT Dependencies
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

//GraphQL & Apollo Dependencies
import { FETCH_POST_QUERY } from '../../util/graphql';
import { AuthContext } from '../../context/Auth';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';

//Single Post Post
function GrantTemplate (props) {
    const postId = props.match.params.postId;

    const { loading, data } = useQuery(FETCH_POST_QUERY, {
      variables: { postId }
    })
    
    const { user } = useContext(AuthContext);

    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-5" id="fundingRequest">
        {loading ? (<h1>Loading</h1>) : (
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 m-2">
                            <div className="p-3 statOne ">
{/*                                 <h4 className="mb-0 blackText">Big Shot Investments</h4> */}
      
                                <div className="pt-4 w-75 ">
                                  <h5>{data.getPost.name}</h5>
                                  <small>{moment(data.getPost.createdAt).fromNow()}</small>
                                  <p>{data.getPost.summary}</p>
      
                                  <h6>Criteria</h6>
                                  <p>{data.getPost.body}</p>
      
                                  <small class="d-block text-left mt-3 container">
{/*                                     <NavLink to="{/applyUniqueId}">
                                      <button class="btn btn-primary">Request Funding</button>
                                    </NavLink> */}
                                    <a class="btn btn-primary" href={data.getPost.link}>Apply</a>
                                  </small>
                                </div>
                                {/* This is how we show only the comment number to NPO's and Real Comments With Us */}
{/*                                 {user.username === "bradley77" ? (<h3>Its Bradley!</h3>) : (<h3>YOu are not bradley!</h3>)} */}
                              </div>
                        </div>
                    </div>
                </div>
        )}
      </main>
    );
}

export default GrantTemplate;