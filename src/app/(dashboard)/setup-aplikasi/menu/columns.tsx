"use client";

import { buttonVariants } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ClipboardEdit } from "lucide-react";
import Link from "next/link";

export type Module = {
  id: string;
  name: string;
  url: string;
  position: number;
  is_active: boolean;
  slug: string;
  module_id: number;
};

export const columns: ColumnDef<Module>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Module",
    accessorKey: "module.name",
  },
  {
    header: "Title",
    accessorKey: "name",
  },
  {
    header: "URL",
    accessorKey: "url",
  },
  {
    header: "Position",
    accessorKey: "position",
  },
  {
    header: "Status",
    accessorKey: "is_active",
    cell: ({ getValue }) => (getValue() ? "ACTIVE" : "INACTIVE"),
  },
  {
    header: "Action",
    cell: ({ row }) => (
      <Link
        className={buttonVariants({ variant: "link", size: "sm" })}
        href={`/setup-aplikasi/menu/${row.original.id}/edit`}
      >
        <ClipboardEdit />
        Edit
      </Link>
    ),
  },
];
