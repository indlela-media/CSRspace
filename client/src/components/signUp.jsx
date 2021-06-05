import React, { useContext, useState } from 'react'
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { AuthContext } from '../context/Auth';
import { useForm } from '../util/hooks';

import signUpImage from '../img/signUp.svg'

export default function SignUp(props) {
    const context = useContext(AuthContext);
    const [ errors, setErrors ] = useState({});

    const { onChange, onSubmit, values } = useForm (registerUser, {
            //Required For Signup
            organization_name: "",
            category: "",
            organization_type: "",
            email: "",
            phone_number: "",
            registration_number: "",
            password: "",
            confirmPassword: "",

            //Not Required For Signup, Has To Be Empty Strings In Document Structure
            
            //Representatives Information.
            representative: [
                { 
                    rep_name: "",
                    rep_email: "",
                    rep_number: "",
                    org_website: ""
                }
            ],
        
            //Organizations Information.
            org_documents: [
                //Important Company Documents.
                {
                    press_kit: "",
                    bbe_cert: "",
                    reg_cert: "",
                    sec_18a_cert: "",
                    annual_report: "",
                    founding_docs: ""
                }
            ],
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

                        {/* Organisation */}
                        <small className="form-text lead">Organization Name</small>
                        <input name="organization_name" type="email" id="inputEmail" className="form-control mb-2" placeholder="e.g Gift Of Givers" required="" value={values.organization_name} onChange={onChange}/>

                        {/* Category */}
                        <small  id="emailhint" className="form-text lead">Category</small>
                        <select name="category" className="form-control mt-1 mb-3" required="" value={values.category} onChange={onChange}>
                            <option defaultValue>Choose...</option>
                            <option>Welfare and humanitarian</option>
                            <option>Land and housing</option>
                            <option>Education and development</option>
                            <option>Religion, belief or philosophy</option>
                            <option>Conservation, environment and animal welfare</option>
                            <option>Research and consumer rights</option>
                            <option>Sporting development programmes</option>
                            <option>Community training {`&`} development programmes</option>
                            <option>HIV/AIDS Programmes</option>
                        </select>

                        {/* Organisation Type */}
                        <small  id="emailhint" className="form-text lead">Organisation Type</small>
                        <select name="organization_type" className="form-control mt-1 mb-3" required="" value={values.organization_type} onChange={onChange}>
                            <option defaultValue>Choose...</option>
                            <option>NPO</option>
                            <option>PBO</option>
                            <option>NGO</option>
                            <option>FBO</option>
                        </select>

                        {/* Email */}
                        <small className="form-text lead">Email</small>
                        <input name="email" type="email" id="inputEmail" className="form-control mb-2" placeholder="e.g. james@example.org" required="" value={values.email} onChange={onChange}/>

                        {/* Phone Number */}
                        <small className="form-text lead">Phone number</small>
                        <input name="phone_number" type="tel" className="form-control mb-2" placeholder="e.g. 061 234 5678" required="" value={values.phone_number} onChange={onChange}/>

                        {/* Registration Number */}
                        <small className="form-text lead">Registration Number</small>
                        <input name="registration_number" type="text" className="form-control mb-2" placeholder="e.g. " required="" value={values.registration_number} onChange={onChange}/>

                        {/* Password */}
                        <small className="form-text lead">Password</small>
                        <input name="password" type="password" className="form-control mb-2" placeholder="e.g. " required="" value={values.password} onChange={onChange}/>
                        
                        {/* Confirm Password */}
                        <small className="form-text lead">Confirm Password</small>
                        <input name="confirmPassword" type="password" className="form-control mb-2" placeholder="e.g. " required="" value={values.confirmPassword} onChange={onChange}/>

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
        $email: String!
        $password: String!
        $confirmPassword: String!
    ) {
        register(
            registerInput: {
                email: $email
                password: $password
                confirmPassword: $confirmPassword
            }
        ){
            id
            email
            createdAt
            token
        }
    }
`;
