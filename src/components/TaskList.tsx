import { useState } from "react";
import { TaskItem } from "./TaskItem";
import { AddTaskInput } from "./AddTaskInput";

interface Task {
  id: string;
  title: string;
  dueDate?: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  { id: "1", title: "Review project proposal", dueDate: "Today", completed: false },
  { id: "2", title: "Update documentation", dueDate: "Tomorrow", completed: false },
  { id: "3", title: "Team standup meeting", dueDate: "Today", completed: true },
  { id: "4", title: "Prepare presentation slides", dueDate: "Friday", completed: false },
  { id: "5", title: "Code review for pull request", completed: false },
];

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleToggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="px-6 py-6 border-b border-border">
        <h2 className="text-2xl font-semibold text-foreground">Inbox</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {tasks.filter((t) => !t.completed).length} tasks remaining
        </p>
      </div>

      <AddTaskInput onAddTask={handleAddTask} />

      <div className="flex-1 overflow-y-auto">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            dueDate={task.dueDate}
            completed={task.completed}
            onToggle={handleToggleTask}
          />
        ))}
      </div>
    </div>
  );
}
