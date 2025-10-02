import { Calendar } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface TaskItemProps {
  id: string;
  title: string;
  dueDate?: string;
  completed: boolean;
  onToggle: (id: string) => void;
}

export function TaskItem({ id, title, dueDate, completed, onToggle }: TaskItemProps) {
  return (
    <div
      className={`group flex items-start gap-3 px-6 py-3 border-b border-border hover:bg-task-hover transition-colors ${
        completed ? "opacity-60" : ""
      }`}
    >
      <Checkbox
        id={id}
        checked={completed}
        onCheckedChange={() => onToggle(id)}
        className="mt-0.5 rounded-full"
      />
      <div className="flex-1 min-w-0">
        <label
          htmlFor={id}
          className={`block text-sm cursor-pointer ${
            completed ? "line-through text-task-complete" : "text-foreground"
          }`}
        >
          {title}
        </label>
        {dueDate && (
          <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>{dueDate}</span>
          </div>
        )}
      </div>
    </div>
  );
}
