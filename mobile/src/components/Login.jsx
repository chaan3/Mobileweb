import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const[name,setName]=useState("");
const[password,setPassword]=useState("");

const LoginForm = () => {
    const handleSubmit=()=>{

    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-center">
                            <h3>Login Form</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                {/* Email */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                                </div>
                                {/* Password */}
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                                </div>
                                {/* Submit Button */}
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
