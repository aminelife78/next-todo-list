"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { useToast } from "@/hooks/use-toast"

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  todoFormSchema,
  TodoFormValues,
} from "@/components/schema/schema.todo";
import { AddNewTodo } from "@/actions/todo.action";
import { useState } from "react";
import Spinner from "./Spinner";
// import { getAllTodos } from "@/actions/todo.action";

// This can come from your database or API.
const defaultValues: Partial<TodoFormValues> = {
  title: "",
  body: "",
  completed: false,
};

export default function AddTodo({ userId }: { userId: string | null }) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues,
    mode: "onChange",
  });
  const onSubmit = async ({title,body,completed}: TodoFormValues) => {
    setLoading(true);
    await AddNewTodo({
      title,
      body,
      completed,
      userId
    });
    setLoading(false);
    form.reset();
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          New todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name. It can be your real name
                    or a pseudonym. You can only change this once every 30 days.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    You can <span>@mention</span> other users and organizations
                    to link to them.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* check boxe */}
            <FormField
              control={form.control}
              name="completed"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Use different settings for my mobile devices
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit">
              {loading ? <Spinner text="Saving" /> : "Save"}{" "}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
