import React from "react";

const TaskItem = ({ task, onMove }) => {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p><strong>Asignado a:</strong> {task.assignedTo}</p>
      <p><strong>Estado:</strong> {task.status}</p>
      {task.status !== "Completado" && (
        <button onClick={() => onMove(task)}>Mover a siguiente fase</button>
      )}
    </div>
  );
};

export default TaskItem;