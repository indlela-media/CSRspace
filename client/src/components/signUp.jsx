import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag';

import { AuthContext } from '../context/Auth';
import { useForm } from '../util/hooks';

import signUpImage from '../img/signUp.svg'

export default function SignUp(props) {
    const context = useContext(AuthContext);
    const [ errors, setErrors ] = useState({});

    const { onChange, onSubmit, values } = useForm (registerUser, {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
    });
    
    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(_, { data: { register: userData } }){
            context.login(userData);
            props.history.push('/');
        },
        onError(err){
            console.log(err.graphQLErrors[0].extensions.exception.errors)
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },

        variables: values
    });

    function registerUser(){
        addUser();
    }

    return (
        <div>
            <section className="logInBg pt-5 pb-5">
                <div className="container pt-3">
                    
                    <div className="d-flex justify-content-center align-items-center row mt-5">
                        <div className="d-none d-sm-none d-md-none d-lg-block d-xl-block col-lg-5 col-xl-5 whiteText overflowHidden">
                            <div className="mr-1 animate__animated animate__fadeInLeft">
                                <img className="img-fluid" src={signUpImage}/>
                            </div>
                        </div>
            
                        <div className="col-10 col-sm-10 col-md-7 col-lg-5 col-xl-4">

                            <form noValidate onSubmit={onSubmit} className="form-signin whiteText animate__animated animate__fadeInRight">
                                <div className="text-center">
                                    <img className="mb-3 img-fluid" src="./img/logoWhite.png" alt="" width="80" />
                                </div>
                                <h4 className="mb-3 text-center d-sm-block d-md-block d-lg-none d-xl-none col-lg-6 col-xl-6">Welcome! sign up.</h4>
                                <p className="text-center"><small>Not a user? <a href="#">Signup here</a></small></p>
            
{/*                                 <label for="inputName" className="sr-only">Name</label>
                                <input name="name"  type="text" id="inputName" className="form-control mb-2" placeholder="Name" required="" autofocus=""/>

                                <label for="inputSurmame" className="sr-only">Surname</label>
                                <input name="surname" type="text" id="inputSurmame" className="form-control mb-2" placeholder="Surname" required="" autofocus=""/>

                                <label for="inputCompanyName" className="sr-only">Company Name</label>
                                <input name="company_name" type="text" className="form-control mb-2" id="inputCompanyName" placeholder="Company Name" required=""/> */}

                                <label for="username" className="sr-only">Username</label>
                                <input name="username" type="text" id="username" className="form-control mb-2" placeholder="username" required="" value={values.username} onChange={onChange}/>
            
                                <label for="inputEmail" className="sr-only">Email</label>
                                <input name="email" type="email" id="inputEmail" className="form-control mb-2" placeholder="Email" required="" value={values.email} onChange={onChange}/>

{/*                                 <small  id="emailhint" className="form-text lead">You represent a...</small>
                                <label for="inputState" className="sr-only" >State</label>
                                <select name="custom_claim" id="inputState" className="form-control mt-1 mb-3" required="">
                                    <option selected>Choose...</option>
                                    <option>Non-Profit Organisation</option>
                                    <option>Coperate Social Investor/Sponsor</option>
                                </select> */}

                                <label for="inputPassword" className="sr-only">Email</label>
                                <input name="password" type="password" id="inputPassword" className="form-control mb-2" placeholder="Password" required="" value={values.password} onChange={onChange}/>
                                
                                <label for="inputPassword" className="sr-only">Email</label>
                                <input name="confirmPassword" type="password" id="confirmPassword" className="form-control mb-2" placeholder="Confirm Password" required="" value={values.confirmPassword} onChange={onChange}/>
            
{/*                                 <div className="checkbox mb-3 d-flex">
                                <label className="align-self-start">
                                    <input className="inputText" type="checkbox" value="remember-me" required="" /> <small>I accept the <a href="./termsAndConditions.html">Terms & Conditions</a> of Indlela Media.</small>
                                </label>
                                </div> */}
                                <button className="btn btn-primary" type="submit">Sign Up</button>
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


const REGISTER_USER = gql`
    mutation register(
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ) {
        register(
            registerInput: {
                username: $username
                email: $email
                password: $password
                confirmPassword: $confirmPassword
            }
        ){
            id
            email
            username
            createdAt
            token
        }
    }
`;
