"use client";

import { buttonVariants } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ClipboardEdit } from "lucide-react";
import Link from "next/link";

export type User = {
  id: string;
  user_id: string;
  name: string;
  role: string;
};

export const columns: ColumnDef<User>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "User ID",
    accessorKey: "user_id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Role",
    accessorKey: "role.name",
  },
  {
    header: "Action",
    cell: ({ row }) => (
      <Link
        className={buttonVariants({ variant: "link", size: "sm" })}
        href={`/setup-aplikasi/user/${row.original.id}/edit`}
      >
        <ClipboardEdit />
        Edit
      </Link>
    ),
  },
];
