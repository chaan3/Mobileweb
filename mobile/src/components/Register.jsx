import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [register, setRegister] = useState([]);
    const apiurl = "http://127.0.0.1:3001";

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload on form submit
        if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
            fetch(apiurl + "/Register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })
            .then((res) => {
                if (res.ok) {
                    setRegister([...register, { name, email, password }]);
                    setMessage("Register Successfully");
                } else {
                    setError("Registration failed. Please try again.");
                }
            })
            .catch((err) => {
                setError("Network error: " + err.message);
            });
        } else {
            setError("All fields are required.");
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-center fs-4 fw-bold">
                            <h1>Register</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                {/* Name */}
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input type="text" id="name" name="name"
                                        placeholder="Enter Your Name"
                                        required
                                        className="form-control"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                    />
                                </div>
                                {/* Email */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" id="email" name="email"
                                        placeholder="Enter Your Email Address"
                                        required
                                        className="form-control"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </div>
                                {/* Password */}
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input type="password" id="password" name="password"
                                        placeholder="Enter Your Password"
                                        required
                                        className="form-control"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn w-100 btn-primary border-0 text-white fs-2 fw-semibold hover:bg-blue-900"
                                >
                                    Register
                                </button>
                                {error && <p className="text-danger">{error}</p>}
                                {message && <p className="text-success">{message}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
