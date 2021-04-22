import React from 'react'
import { NavLink } from 'react-router-dom';
import ColumnChart from "./charts/Column Chart";
import ColumnLineAreaChart from './charts/Column Line Area Chart';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import ListingCard from './partials/listingCard';

function Dashboard() {
    const { loading, data } = useQuery(FETCH_POSTS_QUERY);
    
    return (
      <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-5" id="csiNetwork">
      <div className="pb-2 mb-3">
      </div>

      <div className="container">
          <div className="row d-flex justify-content-center align-items-center">

              <div className="container-fluid col-sm-12 col-md-12 col-lg-3 m-2 col-xl-3">
                <div className="row ">
                    <ColumnChart />

                    <ColumnLineAreaChart />
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 m-2">
                  <div className="p-3">
                    <h5 className="border-bottom border-gray pb-2 mb-4 mb-0">Recent listings <span className="badge badge-pill badge-info">2</span></h5>

                    {loading ? (
                      <h1>Loading Posts</h1>
                    ) : (
                      data.getPosts && data.getPosts.slice(0, 2).map((post) => (
                        <div key={post.id} className="media text-muted pt-3 d-flex flex-column p-3 statOne ">
                          <ListingCard post={post}/>
                        </div>
                      ))
                    )}

                      <small className="d-block text-right mt-3">
                        <NavLink to="/csiNetwork" class="btn btn-primary mb-2">
                          Read more
                        </NavLink>
                      </small>
                  </div>
              </div>

          </div>
      </div>
    </main>
    );
}

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt 
      username
    }
  }
`;

export default Dashboard;
