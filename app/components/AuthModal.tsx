"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/app/context/AuthContext";

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    rememberMe: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  if (!isAuthModalOpen) return null;

  return (
    <>
      {/* Backdrop Blur */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100]"
        onClick={closeAuthModal}
      ></div>

      {/* Modal - Centered with scrolling */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl h-fit lg:h-auto my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Full Image */}
            <div className="hidden lg:flex items-center justify-center overflow-hidden h-[600px]">
              {isLogin ? (
                <Image
                  src="/login2.jpg"
                  alt="Login"
                  width={500}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              ) : (
                <Image
                  src="/register.jpg"
                  alt="Register"
                  width={500}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              )}
            </div>

            {/* Right Side - Form */}
            <div className="p-8 bg-[#FEFAE0]">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-kreon text-[#5F6F52]">
                  {isLogin ? "Login" : "Register"}
                </h1>
                <button
                  onClick={closeAuthModal}
                  className="text-2xl text-[#5F6F52] hover:text-[#4a5a43]"
                >
                  ✕
                </button>
              </div>

              <div className="border-b-2 border-[#5F6F52] mb-6"></div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name - Register Only */}
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-[#5F6F52] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-[#5F6F52]/20 rounded-lg focus:outline-none focus:border-[#5F6F52] bg-white"
                    />
                  </div>
                )}

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[#5F6F52] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-[#5F6F52]/20 rounded-lg focus:outline-none focus:border-[#5F6F52] bg-white"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-[#5F6F52] mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-[#5F6F52]/20 rounded-lg focus:outline-none focus:border-[#5F6F52] bg-white"
                  />
                </div>

                {/* Confirm Password - Register Only */}
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-[#5F6F52] mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border-2 border-[#5F6F52]/20 rounded-lg focus:outline-none focus:border-[#5F6F52] bg-white"
                    />
                  </div>
                )}

                {/* Agree Terms - Register Only */}
                {!isLogin && (
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded border-2 border-[#5F6F52]/20 cursor-pointer"
                    />
                    <label className="text-sm text-[#5F6F52]">
                      I agree to the Terms & Conditions
                    </label>
                  </div>
                )}

                {/* Remember Me - Login Only */}
                {isLogin && (
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded border-2 border-[#5F6F52]/20 cursor-pointer"
                    />
                    <label className="text-sm text-[#5F6F52]">
                      Remember me
                    </label>
                  </div>
                )}
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#5F6F52] text-[#FEFAE0] py-3 rounded-lg font-semibold hover:bg-[#4a5a43] transition-colors mt-6"
                >
                  {isLogin ? "Login" : "Register"}
                </button>
              </form>

              {/* Toggle Auth Mode */}
              <div className="text-center mt-6">
                <p className="text-sm text-[#5F6F52]">
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}{" "}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="font-semibold text-[#5F6F52] hover:text-[#4a5a43] underline"
                  >
                    {isLogin ? "Register here" : "Login here"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
