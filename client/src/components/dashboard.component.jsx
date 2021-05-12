//REACT Dependencies
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import ColumnChart from "./charts/Column Chart";
import ColumnLineAreaChart from './charts/Column Line Area Chart';
import PostForm from '../components/postform';

import { AuthContext } from '../context/Auth';
import { useQuery } from '@apollo/react-hooks';

import ListingCard from './partials/listingCard';

import { FETCH_POSTS_QUERY } from '../util/graphql';

function Dashboard() {
    const { user } = useContext(AuthContext);
    const { loading, data } = useQuery(FETCH_POSTS_QUERY);
    
    return (
    <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-5" id="csiNetwork">
      <div className="pb-2 mb-3">
      </div>

      <div className="container">
          <div>
            <PostForm />
          </div>
      </div>
    </main>
    );
}

export default Dashboard;
