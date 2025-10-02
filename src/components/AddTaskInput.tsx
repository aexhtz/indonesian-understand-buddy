import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AddTaskInputProps {
  onAddTask: (title: string) => void;
}

export function AddTaskInput({ onAddTask }: AddTaskInputProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      onAddTask(taskTitle);
      setTaskTitle("");
      setIsAdding(false);
    }
  };

  const handleCancel = () => {
    setTaskTitle("");
    setIsAdding(false);
  };

  if (!isAdding) {
    return (
      <div className="px-6 py-4 border-b border-border">
        <Button
          variant="ghost"
          className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-primary/5"
          onClick={() => setIsAdding(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add task
        </Button>
      </div>
    );
  }

  return (
    <div className="px-6 py-4 border-b border-border">
      <form onSubmit={handleSubmit} className="space-y-2">
        <Input
          type="text"
          placeholder="Task name"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          autoFocus
          className="border-input focus:ring-primary"
        />
        <div className="flex gap-2">
          <Button type="submit" size="sm" className="bg-primary hover:bg-primary/90">
            Add Task
          </Button>
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={handleCancel}
            className="text-muted-foreground"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
