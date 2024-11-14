"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "./ui/badge";

import TodoBtnAction from "./TodoBtnAction";

interface IProps {
  todos: Itodo[];
}

export interface Itodo {
  id?: string;
  title: string;
  body?: string | null; // Accepte maintenant string, null ou undefined
  completed: boolean;
  createAt?: Date;
}

const AllTodos = ({ todos }: IProps) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>CreateAt</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="w-[100px]">{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>
              {todo.completed == true ? (
                <Badge >Completed</Badge>
              ) : (
                <Badge variant="secondary" >
                  Uncompleted
                </Badge>
              )}
            </TableCell>
            <TableCell>
              {todo.createAt ? todo.createAt.toLocaleDateString() : "N/A"}
            </TableCell>
            <TableCell className=" flex space-x-3 justify-end">
            <TodoBtnAction todo={todo}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">{todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default AllTodos;
