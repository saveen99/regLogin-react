const Login = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Left Side */}
        <div className="flex flex-col justify-center w-1.5/3 p-5 bg-[url('/public/login_signup/f001.jpg')] bg-cover bg-center h-auto ">
          
          <h1 className="pt-10 text-4xl text-center text-white">Versalife Health </h1>
          <p className="text-white">Welcome to Versalife Health, your trusted pharmacy for quality</p>
          <p className="text-white"> care and personalized service</p>
          
        </div>
        
        {/* Right Side */}
        <div className="p-10 w-96">
          <h2 className="mb-5 text-3xl font-bold text-gray-800">Welcome Back!</h2>
          <p className="mb-10 text-gray-600">Continue with Google or enter your details.</p>
          
          <button className="flex items-center justify-center w-full px-4 py-2 mb-5 border border-gray-300 rounded-lg">
            <img 
              src="/public/login_signup/g-icon.png" 
              alt="Google" 
              className="w-5 h-5 mr-2"
            />
            Login with Google
          </button>
          
          <div className="mb-5">
            <label className="block mb-2 text-gray-600">Username</label>
            <input 
              type="email" 
              placeholder="example@gmail.com" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:ring-green-500" 
            />
          </div>
          
          <div className="mb-5">
            <label className="block mb-2 text-gray-600">Password</label>
            <input 
              type="password" 
              placeholder="******" 
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:ring-green-500" 
            />
          </div>
          
          <div className="mb-5 text-right">
            <a href="#" className="text-green-500">Forget password?</a>
          </div>
          
          <button className="w-full py-2 mb-5 text-white bg-green-500 rounded-lg hover:bg-green-600">Login</button>
          
          <div className="text-center">
            <p>
              Doesnt have an account? <a href="#" className="text-green-500">Sign Up for free</a>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
