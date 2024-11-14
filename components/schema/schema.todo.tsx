import { z } from "zod";


export const todoFormSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "title must be at least 5 characters.",
    })
    .max(30, {
      message: "title must not be longer than 30 characters.",
    }),

  body: z
    .string()
    .min(10, {
      message: "body must be at least 2 characters.",
    })
    .max(500, {
      message: "body must not be longer than 30 characters.",
    })
    .optional(),
    completed: z.boolean().default(false),
  
});

export type TodoFormValues = z.infer<typeof todoFormSchema>;
