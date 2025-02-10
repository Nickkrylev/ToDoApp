"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TaskBoard from "./components/TaskCardBoard";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      router.push("/");
    } else {
      setUser({ name: "Користувач" });
    }
  }, [router]);

  if (!user) {
    return <div className="flex justify-center items-center h-screen">Завантаження...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold">Ласкаво просимо, {user.name}!</h1>
      <p className="text-gray-600 mt-2">Це ваша панель управління.</p>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => {
          sessionStorage.removeItem("token");
          router.push("/");
        }}
      >
        Вийти
      </button>

      <TaskBoard />
    </div>
  );
}
