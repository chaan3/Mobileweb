import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  //Register Page
    const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
      const [message, setMessage] = useState('');
      const [register, setRegister] = useState([]);
      const apiurl = "http://127.0.0.1:3002";
  //Login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
        const response = await fetch(`${apiurl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            setMessage("Login successful!");
            navigate("/dashboard"); // Replace with your desired route.
        } else {
            setError(result.error || "Login failed");
        }
    } catch (err) {
        setError("Network error: " + err.message);
    }
};

//Register
      const handleSubmit = async(e) => {
          e.preventDefault(); // Prevent page reload on form submit
          const response = await fetch(apiurl+'/Register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });
        
          const result = await response.json();
          if (result.exists) {
            alert('Email already taken');
          }
        
          else if(name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
              await fetch(apiurl + "/Register", {
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
                      // navigate('/toDo/src/components/Login.jsx')
                      setName('');
                    setEmail('');
                    setPassword('');
                    // setMessage('');  
                    setError('');
                    navigate('/login');

                  } else {
                      setError("Registration failed. Please try again.");
                       setMessage(''); 
                       setName('');
                       setEmail('');
                       setPassword(''); 
                  }
              })
              .catch((err) => {
                  setError("Network error: " + err.message);
                  setMessage(''); 
                  setName('');
                  setEmail('');
                  setPassword(''); 
              });
          } 
          else {
              setError("All fields are required.");
              setMessage(''); 
              setName('');
              setEmail('');
              setPassword(''); 
          }
      }
  
  // const registerComplaint = document.getElementById("Registercomplaint");

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setIsMenuOpen(false); // Close menu for mobile navigation
    navigate(path);
  };

  const openLoginPopup = () => {
    setIsLoginOpen(true);
    setIsMenuOpen(false); // Optional: Close the mobile menu
  };

  const closeRegisterPopup = () => {
    setIsRegisterOpen(false);
  };
  const openRegisterPopup = () => {
    setIsRegisterOpen(true);
    setIsMenuOpen(false); // Optional: Close the mobile menu
  };

  const closeLoginPopup = () => {
    setIsLoginOpen(false);
  };
  const openSignupPopup = () => {
    setIsSignupOpen(true);
    setIsMenuOpen(false); // Optional: Close the mobile menu
  };

  const closeSignupPopup = () => {
    setIsSignupOpen(false);
  };
  // document.getElementById("loginButton").addEventListener("click", () => {
  //   // localStorage.setItem("userLoggedIn", "true");
  //   registerComplaint.classList.remove("hidden");
  // });


  return (
    <>
      <nav className="bg-slate-900 text-white shadow-lg p-2">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              className="h-15 w-14 py-2"
              src="src/assets/logo.svg"
              alt="Logo"
            />
            <h1 className="text-4xl font-bold py-3">Mobile</h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#home"
              className="hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#footer"
              className="hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
            <button
              onClick={openLoginPopup}
              className="hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              id="LoginButton"
            >
              Login
            </button>
            <button
              onClick={openSignupPopup}
              className="hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              
            >
              Signup
            </button>
            <button
              onClick={openRegisterPopup}
              className="hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium" 
              id="Registercomplaint"
            >
              Register Complaint
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-md focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm0 7h16a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a1 1 0 011-1zm0 7h16a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-amber-700">
            <a
              href="#home"
              className="block px-3 py-2 hover:bg-white hover:text-black"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 hover:bg-white hover:text-black"
            >
              About
            </a>
            <a
              href="#services"
              className="block px-3 py-2 hover:bg-white hover:text-black"
            >
              Services
            </a>
            <a
              href="#footer"
              className="block px-3 py-2 hover:bg-white hover:text-black"
            >
              Contact
            </a>
            <button
              onClick={openLoginPopup}
              className="block px-3 py-2 hover:bg-white hover:text-black text-left w-full"
            >
              Login
            </button>
            <button
              onClick={openSignupPopup}
              className="block px-3 py-2 hover:bg-white hover:text-black text-left w-full"
            >
              Signup
            </button>
            <button
              onClick={openRegisterPopup}
              className="block px-3 py-2 hover:bg-white hover:text-black text-left w-full"
            >
              Register Complaint
            </button>
          </div>
        )}
      </nav>

      {/* Login Popup */}
      {isLoginOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-96 p-6 rounded shadow-lg relative">
            {/* Close Icon */}
            <button
              onClick={closeLoginPopup}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
          {/* Register Popup */}
          {isRegisterOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-96 p-6 rounded shadow-lg relative">
            {/* Close Icon */}
            <button
              onClick={closeRegisterPopup}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        
      )}
           {/* Signup Popup */}
           {isSignupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-96 p-6 rounded shadow-lg relative">
            {/* Close Icon */}
            <button
              onClick={closeSignupPopup}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
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
      )}
      
    </>
  );
};

export default Navbar;
