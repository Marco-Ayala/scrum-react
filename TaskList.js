import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, status, onMove }) => {
  return (
    <div className="task-list">
      <h2>{status}</h2>
      {tasks.filter(task => task.status === status).map(task => (
        <TaskItem key={task.id} task={task} onMove={onMove} />
      ))}
    </div>
  );
};

export default TaskList;