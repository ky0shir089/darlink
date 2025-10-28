"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useTransition } from "react";
import { PasswordInput } from "@/components/ui/password-input";
import { LoadingSwap } from "@/components/ui/loading-swap";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { signInSchema, signInSchemaType } from "@/lib/formSchema";
import { signIn } from "../action";

export function LoginForm({ code }: { code?: string }) {
  const router = useRouter();

  const [isLoading, startTransition] = useTransition();

  const form = useForm<signInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      user_id: "",
      password: "",
    },
  });

  function onSubmit(values: signInSchemaType) {
    startTransition(async () => {
      const result = await signIn(values);
      if (result.success) {
        toast.success(result.message);
        if (result.data.change_password) {
          router.push(`/change-password/${result.data.id}`);
        } else {
          router.push("/");
        }
      } else {
        toast.error(result.message);
      }
    });
  }

  useEffect(() => {
    if (!code) return;
    const timeout = setTimeout(() => {
      toast.error("Session expired, please login again.");
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your username below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="user_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder="Password"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                <LoadingSwap isLoading={isLoading}>Login</LoadingSwap>
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
