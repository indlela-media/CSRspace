import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag';

import { useForm } from '../util/hooks';

export default function Login(props) {
    const [errors, setErrors ] = useState({});

    const {onChange, onSubmit, values } = useForm(loginUserCallback, {
        username: "",
        password: ""
    })

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_, result){
            props.history.push('/');
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },

        variables: values
    });

    function loginUserCallback(){
        loginUser();
    }

    return (
        <div>
            <section className="signInBg pt-5 pb-5">
                <div className="container pt-3">
                    <div className="d-flex justify-content-center align-items-center row mt-5">
                        <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block col-lg-5 col-xl-5 whiteText overflowHidden">
                            <div className="mr-1 animate__animated animate__fadeInLeft">
                                <img className="img-fluid" src="./img/logIn.svg" />
                            </div>
                        </div>
            
                        <div className="col-10 col-sm-10 col-md-7 col-lg-5 col-xl-4">
                        <form noValidate onSubmit={onSubmit} className="form-signin whiteText animate__animated animate__fadeInRight">
                                <div className="text-center">
                                    <img className="mb-3 img-fluid" src="./img/logoWhite.png" alt="" width="80" />
                                </div>
                                <h4 className="mb-3 text-center d-sm-block d-md-block d-lg-none d-xl-none col-lg-6 col-xl-6">Welcome! sign up.</h4>
                                <p className="text-center"><small>Already a user? <a href="#">Login here</a></small></p>

                                <label for="username" className="sr-only">Username</label>
                                <input name="username" type="text" id="username" className="form-control mb-2" placeholder="username" required="" value={values.username} onChange={onChange}/>

                                <label for="inputPassword" className="sr-only">Email</label>
                                <input name="password" type="password" id="inputPassword" className="form-control mb-2" placeholder="Password" required="" value={values.password} onChange={onChange}/>
                                
                                <button className="btn btn-primary" type="submit">Login</button>
                            </form>

                            {Object.keys(errors).length > 0 && (
                                <div>
                                    <ul>
                                        {Object.values(errors).map(value => (
                                            <li key={value}>{value}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
            
                    </div>
                </div>
            </section>
        </div>
    )
}

const LOGIN_USER = gql`
    mutation login(
        $username: String!
        $password: String!
    ) {
        login(
            username: $username
            password: $password
        ){
            id
            email
            username
            createdAt
            token
        }
    }
`;
