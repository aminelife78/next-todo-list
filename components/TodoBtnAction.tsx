"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { deleteTodo } from "@/actions/todo.action";
import Spinner from "./Spinner";
import EditTodo from "./EditTodo";
import { Itodo } from "./AllTodos";

const TodoBtnAction = ({todo}:{todo:Itodo}) => {
  const [loading, setLoading] = useState(false);
  
  return (
    <>
      <EditTodo todo={todo} />
      <Button
        variant="destructive"
        size="icon"
        onClick={async () => {
          setLoading(true);
          await deleteTodo({ id: todo.id });
          setLoading(false);
        }}
      >
        {loading ? <Spinner text="" /> : <Trash2 />}
      </Button>
    </>
  );
};

export default TodoBtnAction;
