import React from 'react'
import successKid from '../img/successKid.png'

export default function welcome() {
    return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 p">
                <div className="pt-3 pb-2 mb-3">
                </div>

                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 m-2 ">
                            <div className="statOne container">
                                <h3 className="pt-3 text-center">Welcome!</h3>
                                <p>Here is to changing the world! CSI Space creates an environment where Non-profit organisations find fast, easy and reliable access to funding and connect Corporate funders to relevant organisations at the same time. Upgrade to our premium package and get access to unlimited Funders and sponshorship requests. 
                                </p>

                                <div className="conntainer pb-3">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <img width="250rem"  src={successKid} alt=""/>
                                        </div>

                                        <div className="col-6 text-center">
                                            <button className="btn btn-lg btn-primary">Upgrade</button>
                                        </div>

                                        <div className="col-6 text-center">
                                          <button className="btn btn-lg btn-primary">Go to Dashboard</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}
