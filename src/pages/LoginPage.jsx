import React, { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StudyIllustration from '../components/illustrations/StudyIllustration';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [fieldFocus, setFieldFocus] = useState({
    email: false,
    password: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFocus = (field) => {
    setFieldFocus({ ...fieldFocus, [field]: true });
  };

  const handleBlur = (field) => {
    setFieldFocus({ ...fieldFocus, [field]: false });
  };

  return (
    <div className="mt-16 flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4 sm:px-6 md:py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 max-w-5xl mx-auto">
          {/* Left Side - Illustration */}
          <motion.div 
            className="w-full md:w-1/2 bg-purple-50 dark:bg-purple-900/30 p-6 sm:p-8 lg:p-10 flex items-center justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <StudyIllustration type="login" />
          </motion.div>
          
          {/* Right Side - Login Form */}
          <motion.div 
            className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 text-center">
              Welcome Back
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-2 mb-6">
              Sign in to continue to your account
            </p>
            
            <form className="mt-6 space-y-5">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full mt-1 p-2.5 sm:p-3 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                    fieldFocus.email ? "border-purple-500 shadow-sm shadow-purple-300 dark:shadow-purple-900" : ""
                  }`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                />
                {formData.email && formData.email.includes('@') && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute right-3 top-9 text-green-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className={`w-full mt-1 p-2.5 sm:p-3 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                      fieldFocus.password ? "border-purple-500 shadow-sm shadow-purple-300 dark:shadow-purple-900" : ""
                    }`}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => handleFocus("password")}
                    onBlur={() => handleBlur("password")}
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
                {formData.password && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-1 text-xs text-purple-500 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Password secured
                  </motion.div>
                )}
              </div>
              
              <motion.button
                type="submit"
                className="w-full px-4 py-2.5 sm:py-3 mt-2 text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium text-sm sm:text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Login
              </motion.button>
            </form>
            
            <p className="mt-6 text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              Don't have an account?{' '}
              <Link to="/signup" className="text-purple-600 hover:text-purple-500 font-medium">
                Sign up
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
