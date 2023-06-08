import React from 'react';
import './Register.css'
import { Link  } from 'react-router-dom';

const Register=() => {
  return (
    <div className="main-register">
        <Link to='/'>Move to Login Page</Link>
            <div className="left-side">
                <div className="header">

                </div>
                <div className="body">

                </div>
                <p className="left-p">Description of application goes here</p>
            </div>


            <div className="right-side">
                <div className="top-right">
                    <p>Already have an Account?
                        <Link id='Links-signin' to='/'>Sign In</Link>
                    </p>
                </div>
                <div className="body-right">
                    <div className="right-container">
                        <form>
                            <div className="input-group">
                                <h5 className="input-h5">First Name</h5>
                                <input type="text" name="Fname" id="fname"/>
                            </div>
                            <div className="input-group">
                                <h5 className="input-h5">Last Name</h5>
                                <input type="text" name="Lname" id="lname"/>
                            </div>
                            <div className="input-group">
                                <h5 className='input-h5'>Email</h5>
                                <input type="text" name="email" id="email1"/>
                            </div>
                            <div className="input-group">
                                <h5 className='input-h5'>Password</h5>
                                <input type="text" name="pwd" id="pwd1"/>
                            </div>
                            <div className="input-group">
                                <h5 className='input-h5'>Confirm Password</h5>
                                <input type="text" name="pwd" id="pwd2"/>
                            </div>
                                <input type="submit" value="Submit"/>
                        </form>
                        

                    </div>
                </div>
            </div>

    </div>
  )
}

export default Register
