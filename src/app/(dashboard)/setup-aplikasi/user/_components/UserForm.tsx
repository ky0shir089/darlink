"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { userSchema, userSchemaType } from "@/lib/formSchema";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { userUpdate } from "../action";

interface iAppProps {
  id: number;
  data: userSchemaType;
  roles: { id: number; name: string }[];
}

const UserForm = ({ id, data, roles }: iAppProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<userSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      user_id: data.user_id,
      change_password: data.change_password ?? false,
      role_id: data.role?.id,
    },
  });

  function onSubmit(values: userSchemaType) {
    startTransition(async () => {
      const result = await userUpdate(id, values);

      if (result.success) {
        toast.success(result.message);
        router.push("/setup-aplikasi/user");
      } else {
        toast.error(result.message);
      }
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn("text-2xl")}>Edit User</CardTitle>
        <CardDescription>
          {data.user_id} - {data.name}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-2">
              <FormField
                control={form.control}
                name="change_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Change Password</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Switch
                          className="h-6 w-11 [&>span]:h-5 [&>span]:w-5 [&>span[data-state=checked]]:translate-x-5"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />

                        <span>{field.value ? "YES" : "NO"}</span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Module</FormLabel>
                    <Select
                      required
                      value={field.value ? String(field.value) : ""}
                      onValueChange={(val) => field.onChange(Number(val))}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Select Module" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {roles.map((item) => (
                          <SelectItem key={item.id} value={String(item.id)}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <>
                  Updating
                  <Loader2 className="animate-spin" />
                </>
              ) : (
                <>Update</>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default UserForm;
