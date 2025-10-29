"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

function ForgetPasswordPage() {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!agree) {
      alert("Please agree to the Terms of Use and Privacy Policy.");
      return;
    }

    setLoading(true);

    // Simulate an async password reset request
    setTimeout(() => {
      console.log("Password reset link sent to:", email);
      setLoading(false);
      alert("A password reset link has been sent to your email!");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side Image Section */}
      <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-end">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Forgot password?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
            Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <Image
            src="/portrait-joyful-attractive-asian-students-couple 1.png"
            alt="forgot password"
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
          <h2 className="text-2xl font-bold mb-2 text-center">Forgot Password</h2>
          <p className="text-gray-500 mb-6 text-center">
            Enter the email address you use on Open All Tech. We’ll send you a link to reset your password.
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

            {/* Terms Agreement */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="h-4 w-4"
                required
              />
              <p className="text-gray-600 text-sm">
                I agree with{" "}
                <span className="text-gray-600 underline cursor-pointer">Terms of Use</span> and{" "}
                <span className="text-gray-600 underline cursor-pointer">Privacy Policy</span>
              </p>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-[linear-gradient(to_right,#43C6AC,#F8FFAE)] text-black py-2 rounded hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Reset Password"}
            </button>
          </form>

          {/* OR divider */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-400">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Alternative action */}
          <button className="w-full border border-gray-300 rounded py-2 flex items-center justify-center space-x-2 hover:bg-gray-50 transition">
            <span>Email me a login link</span>
          </button>

          {/* Back to login link */}
          <p className="text-center text-gray-500 mt-6">
            Back to{" "}
            <Link href="/login" className="text-black underline">
              Login
              <Image src="/arrow.png" alt="Arrow" width={18} height={18} className="inline-block" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordPage;
