import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Signup } from '../lib/Auth';

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      await Signup(email, password, username);
      setSuccess(true);
      setIsLoading(false);
      setTimeout(() => {
        navigate('/signin')
      }, 3000);

      
    } catch (error) {
      setError(error.message || 'An error occurred. Please try again.');
      setIsLoading(false);
    }finally{
      setIsLoading(false);
    }

  }

  if(success){
    return (
      <div className='min-h-screen flex justify-center items-center bg-gray-50 px-4 '>
        <div className='max-w-md w-full text-center'>
          <div className='bg-white rounded-lg shadow-md p-8'>
            <div className='text-green-500 mb-4'>
              <h2 className='text-4xl font-bold mb-2'>Account Created</h2>
              <p className='text-gray-500 mb-4 text-2xl'>You have successfully created your account. Please check your email for verification.</p>
              <p className='text-gray-500 text-sm'>Redirecting to login page in a few seconds...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-4 font-sans selection:bg-orange-200">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Create an Account
        </h1>
        <p className="text-gray-500 mt-2 font-medium">
          join our community and start sharing your ideas
        </p>
      </div>

      {/* Form Card Container */}
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 w-full max-w-115 p-8 md:p-10">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative mb-4">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
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
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition-colors duration-200"
            />
          </div>

          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-[15px] font-semibold text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="johndoe"
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
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition-colors duration-200"
            />
            <p className="text-xs text-gray-500 mt-1.5 pl-0.5">
              Must be at least 6 characters
            </p>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-[15px] font-semibold text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition-colors duration-200"
            />
          </div>

          {/* Submit Button */}
          <div class="pt-2">
            <button
              type="submit"
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3.5 px-4 rounded-xl shadow-md transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-rose-400 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </button>
          </div>
        </form>
        <div>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-rose-500 hover:text-rose-600 font-medium hover:border-b-2 border-rose-500"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp