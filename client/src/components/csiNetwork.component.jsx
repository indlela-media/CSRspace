//React Dependencies
import React, { useContext } from 'react'
import ListingCard from './partials/listingCard';

//GraphQL & Apollo Dependencies
import { AuthContext } from '../context/Auth';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_POSTS_QUERY } from '../util/graphql';

//CSI Network Functional Component
export default function CsiNetwork() {
    const { user } = useContext(AuthContext);
    const { loading, data } = useQuery(FETCH_POSTS_QUERY);

    return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-5" id="csiNetwork">
                <div className="pt-3">
                </div>

                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">

                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 m-2 ">
                            <div className="p-3 ">
                                <h5 className="border-bottom border-gray pb-2 mb-0">Grant Listings <span class="badge badge-pill badge-info">{loading ? (`0`) : (data.getPosts.length)}</span></h5>

                                {loading ? (
                                  <h1>Loading Posts</h1>
                                ) : (
                                  data.getPosts && data.getPosts.reverse().map((post) => (
                                    <div key={post.id} className="media text-muted m-2 d-flex flex-column p-3 statOne ">
                                      <ListingCard post={post}/>
                                    </div>
                                  ))
                                )}

{/*                                 <small className="d-block text-right mt-3">
                                  <a href="/">More listings</a>
                                </small> */}
                              </div>
                        </div>

                    </div>
                </div>
            </main>
    )
}
