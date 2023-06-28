import React, { useState } from 'react';
import { ListItem } from './components/ListItem';
import { TaskField } from './components/TaskField';

function App() {
  const [tasks, setTasks] = useState([
    {
      text: 'Apprendre ReactJS',
      completed: false,
    },
    {
      text: 'Trouver mon alternance!',
      completed: true,
    },
    {
      text: 'Déploiement mon premier projet',
      completed: true,
    },
    {
      text: 'Projet',
      completed: false,
    },
  ])

  const onToggleCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIdx) =>
        index === curIdx
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  const onRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, curIdx) => index !== curIdx));
  };

  const onAddTask = (text) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text,
        completed: false,
      },
    ]);
  };

  return (
    <div className="todo">
      <div className="todo__header">
        <h4>Liste de tâches</h4>
      </div>
      <TaskField onAddTask={onAddTask} />
      <div className="todo__list">
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            index={index}
            text={task.text}
            completed={task.completed}
            onToggleCompleted={onToggleCompleted}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
