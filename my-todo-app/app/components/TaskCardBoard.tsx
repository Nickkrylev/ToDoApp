"use client";
import { useState, useEffect } from "react";
import TaskCard from "./TaskСard";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Завдання 1", description: "Опис завдання 1", date: "2024-02-15", priority: "High" },
    { id: 2, title: "Завдання 2", description: "Опис завдання 2", date: "2024-02-18", priority: "Medium" },
    { id: 3, title: "Завдання 3", description: "Опис завдання 3", date: "2024-02-20", priority: "Low" },
  ]);

  const handleEdit = (id) => {
    console.log("Редагування", id);
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleViewDetails = (id) => {
    console.log("Перегляд деталей", id);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {tasks.map((task) => (
        <TaskCard 
          key={task.id} 
          title={task.title} 
          description={task.description} 
          date={task.date} 
          priority={task.priority} 
          onEdit={() => handleEdit(task.id)}
          onDelete={() => handleDelete(task.id)}
          onViewDetails={() => handleViewDetails(task.id)}
        />
      ))}
    </div>
  );
}