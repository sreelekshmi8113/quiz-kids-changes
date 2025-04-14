import React, { useState } from "react";
import { FaGoogle, FaFacebookF, FaApple, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  const handleLoginClick = () => {
    setIsRegistering(false);
  };

  return (
    <div
      className="w-screen h-screen relative bg-cover bg-center flex items-center justify-end"
      style={{ backgroundImage: "url('/neww  bg 1.png')" }}
    >
      {/* Bottom-left animal image */}
      <div className="bottom-4 left-2">
        <img
          src="/all3 1.png"
          alt="Animals"
          className="h-[500px] object-contain"
        />
      </div>

      {/* Login box */}
      <div className="mr-[200px] w-[600px] h-[600px] bg-white rounded-3xl shadow-xl flex items-center justify-center">
        <div className="w-full h-full px-10 flex flex-col justify-between py-6">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-black">
              {isRegistering ? "Create Account" : "Welcome"}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {isRegistering ? "Register with Email" : "Login with Email"}
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-4 mt-6 transition-all duration-300 ease-in-out">
            {/* Name Field for Registration */}
            {isRegistering && (
              <div>
                <div className="flex items-center border border-black-100 rounded-lg px-3 mt-1">
                  <FaUser className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 outline-none transition duration-300"
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div>
              <div className="flex items-center border border-black-100 rounded-lg px-3 mt-1">
                <FaEnvelope className="text-gray-400" />
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full p-3 outline-none transition duration-300"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center border border-black-100 rounded-lg px-3 mt-1">
                <FaLock className="text-gray-400" />
                <input
                  type="password"
                  placeholder="**********"
                  className="w-full p-3 outline-none transition duration-300"
                />
              </div>
            </div>

            <div className="text-right text-sm text-black mt-2 cursor-pointer">
              Forgot your password?
            </div>
          </div>

          {/* Login/Register Button */}
          <button
            onClick={handleLogin}
            type="submit"
            className="bg-blue-500 font-bold text-sm text-black bg-opacity-30 py-3 rounded-lg border border-black-300 backdrop-blur-lg hover:bg-blue-600 hover:bg-opacity-40 transition duration-300"
          >
            {isRegistering ? "Register" : "Login"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-500 text-sm">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4">
            <button className="border p-3 rounded-lg hover:bg-gray-100 transition">
              <FaGoogle className="text-xl" />
            </button>
            <button className="border p-3 rounded-lg hover:bg-gray-100 transition">
              <FaFacebookF className="text-xl text-blue-600" />
            </button>
            <button className="border p-3 rounded-lg hover:bg-gray-100 transition">
              <FaApple className="text-xl" />
            </button>
          </div>

          {/* Register Prompt */}
          <p className="text-center text-sm text-gray-600 mt-4">
            {isRegistering ? (
              <>
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-black font-bold"
                  onClick={handleLoginClick}
                >
                  Login Now
                </a>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <a
                  href="#"
                  className="text-blue-500 font-medium"
                  onClick={handleRegisterClick}
                >
                  Register Now
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}


















