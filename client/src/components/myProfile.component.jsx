import React from 'react'

export default function dashboard() {
    return (
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 pt-5" id="csiNetwork">
      <div className="pb-2 mb-3">
      </div>

      <div className="container">
          <div className="row d-flex justify-content-center align-items-center">

              <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 m-2 statOne ">
                  <div className="">
                      <div className="media text-muted d-flex flex-column p-3">
                      <div className="d-flex flex-column justify-content-center align-items-center p-4">
                          <form action="upload" method="post" enctype="multipart/form-data">
                            <label for="fileToUpload">
                                <div className="profile-pic d-flex align-items-center justify-content-center">
                                    <i className="fa fa-camera"></i> <small classNameName="ml-1"> Change Image</small>
                                </div>
                            </label>
                            <input type="File" name="profilePicture" id="fileToUpload" />
                          </form>

                          <div classNameName="text-center Text">
                            <small classNameName="lead">Bradley Mubenga</small><br />
                            <small classNameName="dashEmail">The Mubenga Foundation</small>
                          </div>
                        </div>

                      </div>
                  </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 m-2 statOne ">
                  <div className="p-3 ">
                    <h5 className="border-bottom border-gray pb-2 mb-4 mb-0">My Profile <span className="badge badge-pill badge-info">2</span></h5>

                    <div classNameName="d-flex align-items-center justify-content-center">
                      <div className="w-75 text-muted pt-3 mt-2 d-flex flex-column p-3 ">
                          <form className="form-signin whiteText animate__animated animate__fadeInRight blackText" >

                            <label for="inputEmail" className="sr-only">Email address</label>
                            <h6 classNameName="pt-2">Name</h6> 
                            <input type="text" id="inputEmail" className="form-control" value="Bradley" required autofocus="" />
        
                            <label for="inputEmail" className="sr-only">Email address</label>
                            <h6 classNameName="pt-2">NPO Name:</h6> 
                            <input type="text" id="inputEmail" className="form-control" value="The Mubenga Foundation" required autofocus="" />


                            <label for="exampleFormControlFile1" classNameName="pt-5"><h6 classNameName="mouseMe"><i classNameName="fa fa-file-pdf-o"></i> Upload CIPC document</h6></label> <span className="badge badge-pill badge-info">No file</span>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1" /> <br/>

                            <label for="exampleFormControlFile1" classNameName="pt-2"><h6 classNameName="mouseMe"><i classNameName="fa fa-file-pdf-o"></i> Upload Application Letter</h6></label> <span className="badge badge-pill badge-info">No file</span>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1" /><br/>

                            <label for="exampleFormControlFile1" classNameName="pt-2"><h6 classNameName="mouseMe"><i classNameName="fa fa-file-pdf-o"></i> Upload B-BBEEE Certificate</h6></label> <span className="badge badge-pill badge-info">No file</span>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1" /><br/>
        
                          </form>
                      </div>
                    </div>
                  </div>

                      <small className="d-block text-right my-3 container">
                        <a href="/">
                          <button className="btn btn-primary">Save changes</button>
                        </a>
                      </small>
                  </div>
              </div>

          </div>
    </main>
    )
}