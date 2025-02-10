import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faClock, faFlag, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const formatDate = (date) => {
  const options = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
};

const isOverdue = (date) => {
  const taskDate = new Date(date);
  const today = new Date();
  return taskDate < today && taskDate.toDateString() !== today.toDateString();
};

const TaskCard = ({ title, description, date, priority, onEdit, onDelete, onViewDetails }) => {
  const [overdue, setOverdue] = useState(false);

  useEffect(() => {
    setOverdue(isOverdue(date));
  }, [date]);

  return (
    <div 
      className={`p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 ${overdue ? "bg-red-100 dark:bg-red-900 border border-red-500" : ""}`}
      onClick={onViewDetails}
    >
      {overdue && (
        <div className="text-red-500 flex items-center gap-2 mb-2">
          <FontAwesomeIcon icon={faExclamationTriangle} /> Overdue
        </div>
      )}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex gap-2">
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{description}</p>
      <div className="flex justify-between items-center text-sm">
        <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
          <FontAwesomeIcon icon={faClock} /> {formatDate(date)}
        </span>
        <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-white ${priority === "High" ? "bg-red-500" : priority === "Medium" ? "bg-yellow-500" : "bg-green-500"}`}>
          <FontAwesomeIcon icon={faFlag} /> {priority}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
