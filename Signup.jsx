import React, { useState } from 'react';

const Login = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex max-w-6xl mx-auto bg-white rounded-lg shadow-lg ">
        {/* Left Side */}
        <div className="flex flex-col justify-center w-1.5/3 p-5 bg-[url('/public/login_signup/f001.jpg')] bg-cover bg-center h-auto ">
          
          <h1 className="pt-10 text-4xl text-center text-white ">Versalife Health </h1>
          <p className="text-white">Welcome to Versalife Health, your trusted pharmacy for quality</p>
          <p className="text-white"> care and personalized service</p>
          
        </div>
        
        {/* Right Side */}
        <div className="p-10 w-96">
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center">Create Your Account</h2>
          <p className="mt-2 text-center text-gray-600">Join Versalife Health today!</p>
        </div>
        <button className="flex items-center justify-center w-full px-4 py-2 mb-4 text-gray-600 bg-white border border-gray-300 rounded-md">
          <img 
            src="/public/login_signup/g-icon.png" 
            alt="Google Logo" 
            className="w-5 h-auto mr-2" 
          />
          Sign up with Google
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block font-semibold text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-green-500"
              placeholder="Your username"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-green-500"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-green-500"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block font-semibold text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-green-500"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <a href="/login" className="text-green-500 hover:underline">Login here</a>
        </p>
 
        </div>
      </div>
    </div>
  );
};

export default Login;
