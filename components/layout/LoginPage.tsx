"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", { email, password });
    // add login logic here
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side Image Section */}
      <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-end">
        <div className="">
          <h2 className="text-2xl font-semibold mb-4">Student Login</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <Image
            src="/portrait-joyful-attractive-asian-students-couple 1.png"
            alt="login"
            width={500}
            height={500}
            className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-cover mx-auto"
            priority
          />
        </div>
      </div>

      {/* Right Side Form Section */}
      <div className="flex flex-1 items-center justify-center py-12">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2 text-center">Login</h2>
          <p className="text-gray-500 mb-6 text-center">
            Welcome back! Please log in to access your account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
                <span
                  className="absolute right-3 top-2.5 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </span>
              </div>
            </div>

            {/* Remember me + Forgot password */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>Remember Me</span>
              </label>
              <Link
                href="/forget_password"
                className="underline hover:text-gray-800"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-[linear-gradient(to_right,#43C6AC,#F8FFAE)] text-black py-2 rounded hover:opacity-90 transition"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          {/* OR divider */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-400">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google button */}
          <button className="w-full border border-gray-300 rounded py-2 flex items-center justify-center space-x-2 hover:bg-gray-50 transition">
            <Image
              src="/google.png"
              alt="Google"
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
            <span>Sign In with Google</span>
          </button>

          {/* Signup link */}
          <p className="text-center text-gray-500 mt-4">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-black underline">
              Sign Up
              <Image
                src="/arrow.png"
                alt="Arrow"
                width={18}
                height={18}
                className="inline-block"
              />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
