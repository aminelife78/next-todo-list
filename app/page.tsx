import AddTodo from "@/components/AddTodo";
import {  getAllTodos } from "@/actions/todo.action";
import AllTodos from "@/components/AllTodos";
import { auth } from '@clerk/nextjs/server'



// This can come from your database or API.

export default async function Home() {
   
  const { userId } = await auth()
  const todos = await getAllTodos({userId}); 
  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <AddTodo userId={userId} />
    
          <AllTodos todos={todos}  />
  
      
    </div>
  );
}
