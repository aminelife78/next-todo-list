"use server"
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

const prisma= new PrismaClient()

export const getAllTodos = async ({userId}:{userId:string | null})=>{
  return await prisma.todo.findMany({
    where: {
      user_id: userId as string,
    }
    
  
  })

}

export const updateTodo = async ({id,userId,title,body,completed}:{id:string,title:string,body:string | undefined,completed:boolean,userId:string|null})=>{
   await prisma.todo.update({
    where: {
      id
    },
    data:{
    
      title,
      body,
      completed,
      user_id:userId as string
    }
    
  })
  
  revalidatePath("/")
}

export const AddNewTodo = async ({userId,title,body,completed}:{title:string,body:string | undefined,completed:boolean,userId:string|null})=>{
  await prisma.todo.create({
    data:{
      user_id:userId as string,
      title,
      body,
      completed
    }

  })
  revalidatePath("/")
}

export const deleteTodo = async ({id}:{id:string | undefined})=>{
  await prisma.todo.delete({
    where:{
      id
    }
  })
  revalidatePath("/")
}