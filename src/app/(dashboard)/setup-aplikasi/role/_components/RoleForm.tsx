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
import { Input } from "@/components/ui/input";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useCallback, useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { roleSchema, roleSchemaType } from "@/lib/formSchema";
import { roleStore, roleUpdate } from "../action";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

type RoleFormHook = UseFormReturn<roleSchemaType>;

interface MenuPermissionType {
  id: number;
  name: string;
  permissions: { id: number; name: string }[];
}

interface iAppProps {
  id?: number;
  data?: roleSchemaType;
  menuPermission: MenuPermissionType[];
}

const RoleForm = ({ id, data, menuPermission }: iAppProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<roleSchemaType>({
    resolver: zodResolver(roleSchema),
    defaultValues: {
      name: data?.name || "",
      description: data?.description || "",
      menus: data?.menus.map((m: any) => m.id) || [],
      permissions: data?.permissions.map((p: any) => p.id) || [],
    },
  });

  function onSubmit(values: roleSchemaType) {
    startTransition(async () => {
      const result = id
        ? await roleUpdate(id, values)
        : await roleStore(values);

      if (result.success) {
        toast.success(result.message);
        router.push("/setup-aplikasi/role");
      } else {
        toast.error(result.message);
      }
    });
  }

  const updateArray = (arr: number[], id: number, add: boolean) =>
    add ? [...arr, id] : arr.filter((item) => item !== id);

  const PermissionCheckbox = React.memo(
    ({
      form,
      permissionId,
      label,
    }: {
      form: RoleFormHook;
      permissionId: number;
      label: string;
    }) => (
      <FormField
        control={form.control}
        name="permissions"
        render={({ field }) => (
          <FormItem className="flex items-center gap-2">
            <FormControl>
              <Checkbox
                checked={field.value?.includes(permissionId)}
                onCheckedChange={(checked) =>
                  field.onChange(
                    updateArray(field.value || [], permissionId, !!checked)
                  )
                }
              />
            </FormControl>
            <FormLabel className="text-sm font-normal">{label}</FormLabel>
          </FormItem>
        )}
      />
    )
  );

  const MenuRow = React.memo(
    ({ form, menu }: { form: RoleFormHook; menu: MenuPermissionType }) => {
      const handleMenu = useCallback(
        (checked: boolean) => {
          const currentMenus = form.getValues("menus") || [];
          const currentPermissions = form.getValues("permissions") || [];
          const permissionIds = menu.permissions.map((p) => p.id);

          form.setValue("menus", updateArray(currentMenus, menu.id, !!checked));
          form.setValue(
            "permissions",
            checked
              ? [...new Set([...currentPermissions, ...permissionIds])]
              : currentPermissions.filter(
                  (id: number) => !permissionIds.includes(id)
                )
          );
        },
        [form, menu]
      );

      return (
        <TableRow>
          <TableCell>{menu.id}</TableCell>
          <TableCell>
            <FormField
              control={form.control}
              name="menus"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(menu.id)}
                      onCheckedChange={handleMenu}
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    {menu.name}
                  </FormLabel>
                </FormItem>
              )}
            />
          </TableCell>
          {menu.permissions.map((p) => (
            <TableCell key={p.id}>
              <PermissionCheckbox
                form={form}
                permissionId={p.id}
                label={p.name}
              />
            </TableCell>
          ))}
        </TableRow>
      );
    }
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn("text-2xl")}>
          {id ? "Edit" : "Create"} Role
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" required {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead colSpan={2} className="text-center">
                    Menu
                  </TableHead>
                  <TableHead colSpan={5} className="text-center">
                    Permissions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {menuPermission.map((menu) => (
                  <MenuRow key={menu.id} form={form} menu={menu} />
                ))}
                <TableRow>
                  <TableCell>
                    <p className="text-red-500">
                      {form.formState.errors.menus?.message}
                    </p>
                  </TableCell>
                  <TableCell colSpan={5} className="text-center">
                    <p className="text-red-500">
                      {form.formState.errors.permissions?.message}
                    </p>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <>
                  {id ? "Updating..." : "Creating..."}{" "}
                  <Loader2 className="animate-spin" />
                </>
              ) : (
                <>{id ? "Update" : "Create"}</>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RoleForm;
