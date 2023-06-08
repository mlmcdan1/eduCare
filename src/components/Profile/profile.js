import React from 'react'
import './profile.css'

const profile = () => {
  return (
    <>
        <div class="container">
            <div class="row">
                <div class="col-xl-5">
                    <div class="card">
                        <div class="card-body">
                            <div class="dropdown float-end">
                                <a href="#" class="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="mdi mdi-dots-vertical"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <a href="javascript:void(0)"class="dropdown-item">Edit</a>
                                    <a href="javascript:void(0)"class="dropdown-item">Delete</a>
                                    <a href="javascript:void(0)"class="dropdown-item">Block</a>
                                </div>
                            </div>
                            <div class="d-flex align-items-start">
                                <img src="https://cdn3.iconfinder.com/data/icons/diverse-cartoon-women-avatars/300/22-512.png" 
                                class="rounded-circle avatar-lg img-thumbnail" alt="profile-image"/>
                                <div class="w-100 ms-3">
                                    <h4 class="my-0">Name</h4>
                                    <p class="text-muted">tagname</p>
                                    <button type="button" class="btn btn-soft-primary btn-xs waves-effect mb-2 waves-light">Follow</button>
                                    <button type="button" class="btn btn-soft-success btn-xs waves-effect mb-2 waves-light">Message</button>
                                </div>
                            </div>
                            <div class="mt-3">
                                <h4 class="font-13 text-uppercase">About Me :</h4>
                                <p class="text-muted mb-2 font-13">Example introductory text</p>
                                <p class="text-muted mb-1 font-13">
                                    <strong>Full Name:</strong>
                                    <span class="ms-2">Name</span>
                                </p>
                                <p class="text-muted mb-1 font-13">
                                    <strong>Mobile :</strong>
                                    <span class="ms-2">(XXX) XXX XXXX</span>
                                </p>
                                <p class="text-muted mb-1 font-13">
                                    <strong>Email:</strong>
                                    <span class="ms-2">user@email.com</span>
                                </p>
                                <p class="text-muted mb-1 font-13">
                                    <strong>Location:</strong>
                                    <span class="ms-2">USA</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="header-title mb-3">Inbox</h4>
                            <div class="inbox-widget" data-simplebar="init" style={{'max-height': '350px;'}}>
                                <div class="simplebar-wrapper" style={{'margin': '0px;'}}>
                                    <div class="simplebar-height-auto-observer-wrapper">
                                        <div class="simplebar-height-auto-observer"></div>
                                    </div>
                                    <div class="simplebar-mask">
                                        <div class="simplebar-offset" style={{'right': '0px;' ,'bottom': '0px;'}}>
                                            <div class="simplebar-content-wrapper" style={{'height': 'auto;', 'overflow': 'hidden scroll'}}>
                                                <div class="simplebar-content" style={{'padding': '0px;'}}>
                                                    <div class="d-flex align-items-center pb-1" id="tooltips-container">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="rounded-circle img-fluid avatar-md img-thumbnail bg-transparent" alt=""/>
                                                        <div class="w-100 ms-3">
                                                            <h5 class="mb-1">Name</h5>
                                                            <p class="mb-0 font-13">Message</p>
                                                        </div>
                                                        <a href="javascript:(0);" class="btn btn-sm btn-soft-info font-13" data-bs-container="#tooltips-container" 
                                                        data-bs-toggle="tooltip" data-bs-placement="left" title data-bs-original-title="Reply">
                                                            <i class="mdi mdi-reply">
                                                                ::before
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="dropdown float-end">
                                <a href="#" class="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="mdi mdi-dots-vertical">
                                        ::before
                                    </i>
                                    ::after
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <a href="javascript:void(0);" class="dropdown-item">Report</a>
                                    <a href="javascript:void(0);" class="dropdown-item">Profit</a>
                                    <a href="javascript:void(0);" class="dropdown-item">Action</a>
                                </div>
                            </div>
                            <h4 class="header-title mb-3">"Saved Searches"
                            <i class="mdi mdi-adjust ms-1">::before</i>
                            </h4>
                            <div class="list-group">
                                <a href="#" class="my-1">
                                    <div class="d-flex align-items-start" id="tooltips-container">
                                        <div>
                                            <i class="mdi mdi-circle h3 text-primary">
                                                ::before
                                            </i>
                                        </div>
                                        <div class="w-100 ms-2">
                                            <h5 class="mb-1 mt-0">Name</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-7">
                    <div class="card">
                        <div class="card-body">
                            <form action="#" class="comment-area-box mb-3">
                                <span class="input-icon">
                                    <textarea rows="3" class="form-control" placeholder="Write something..."></textarea>
                                </span>
                                <div class="comment-area-btn">
                                    <div class="float-end">
                                        <button type="submit" class="btn btn-sm btn-dark waves-effect waves-light">Post</button>
                                    </div>
                                    <div> 
                                        <a href="#" class="btn btn-sm btn-light text-black-50">
                                            <i class="far fa-user"></i>
                                        </a> 
                                        <a href="#" class="btn btn-sm btn-light text-black-50">
                                            <i class="fa fa-map-marker-alt"></i>
                                        </a> 
                                        <a href="#" class="btn btn-sm btn-light text-black-50">
                                            <i class="fa fa-camera"></i>
                                        </a> 
                                        <a href="#" class="btn btn-sm btn-light text-black-50">
                                            <i class="far fa-smile"></i>
                                        </a>
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>

            </div>

        </div>
      
    </>
  )
}

export default profile
