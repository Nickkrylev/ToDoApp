"use client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthPage from "./AuthPage";
import DashboardPage from "./DashboardPage";

export default function AppRouter() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Отримуємо токен із sessionStorage
    const storedToken = sessionStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Маршрут для сторінки авторизації */}
        <Route
          path="/"
          element={
            !token ? (
              <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <AuthPage />
              </div>
            ) : (
              // Якщо токен є, перенаправляємо на dashboard
              <Navigate to="/dashboard" replace />
            )
          }
        />

        {/* Приватний маршрут для dashboard */}
        <Route
          path="/dashboard"
          element={
            token ? (
              <DashboardPage />
            ) : (
              // Якщо немає токенa, повертаємо на сторінку авторизації
              <Navigate to="/auth" replace />
            )
          }
        />

        {/* Маршрут за замовчуванням, який направляє користувача залежно від наявності токену */}
        <Route
          path="*"
          element={<Navigate to={token ? "/dashboard" : "/auth"} replace />}
        />
      </Routes>
    </Router>
  );
}
