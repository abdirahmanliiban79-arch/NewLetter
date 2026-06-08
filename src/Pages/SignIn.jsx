import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Signin } from "../lib/Auth";
import { useAuth } from "../Context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const AuthInfo = useAuth();
  console.log({AuthInfo})
  
  const navigate = useNavigate()

  const handleSubmit = async (event)=>{
    event.preventDefualt()

    setIsLoading(true)
    setError(null);


    try {

      await Signin(email,password);
      navigate('/')
      
    } catch (error) {
      console.error('error',error)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-4 font-sans selection:bg-orange-200">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Welcome Back
        </h1>
        <p className="text-gray-500 mt-2 font-medium">
          Sign in to your account
        </p>
      </div>

      {/* Form Card Container */}
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 w-full max-w-115 p-8 md:p-10">
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email Address Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-[15px] font-semibold text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email" 
              autoComplete="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition-colors duration-200"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-[15px] font-semibold text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              minLength={6}
              autoComplete="current-password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition-colors duration-200"
            />
            <p className="text-xs text-gray-500 mt-1.5 pl-0.5">
              Must be at least 6 characters
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3.5 px-4 rounded-xl shadow-md transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-rose-400 focus:ring-opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </button>
          </div>
        </form>
        <div>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-rose-500 hover:text-rose-600 font-medium hover:border-b-2 border-rose-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
