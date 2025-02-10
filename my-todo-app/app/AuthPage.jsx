"use client";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { motion } from "framer-motion";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (values) => {
    console.log("Логін", values);
  };

  const handleRegister = (values) => {
    console.log("Реєстрація", values);
  };

  return (
    <div className="flex flex-col items-center py-10">
      <div className="mb-6 flex gap-4">
        <button
          className={`px-4 py-2 rounded ${isLogin ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setIsLogin(true)}
        >
          Вхід
        </button>
        <button
          className={`px-4 py-2 rounded ${!isLogin ? "bg-green-500 text-white" : "bg-gray-200"}`}
          onClick={() => setIsLogin(false)}
        >
          Реєстрація
        </button>
      </div>
      
      <motion.div
        key={isLogin ? "login" : "register"}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        {isLogin ? <LoginForm onSubmit={handleLogin} /> : <RegisterForm onSubmit={handleRegister} />}
      </motion.div>
    </div>
  );
}