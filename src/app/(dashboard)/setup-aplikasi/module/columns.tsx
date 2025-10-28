"use client";

import { buttonVariants } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ClipboardEdit } from "lucide-react";
import Link from "next/link";

export type Module = {
  id: string;
  name: string;
  icon: string;
  position: number;
};

export const columns: ColumnDef<Module>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Title",
    accessorKey: "name",
  },
  {
    header: "Icon",
    accessorKey: "icon",
  },
  {
    header: "Position",
    accessorKey: "position",
  },
  {
    header: "Action",
    cell: ({ row }) => (
      <Link
        className={buttonVariants({ variant: "link", size: "sm" })}
        href={`/setup-aplikasi/module/${row.original.id}/edit`}
      >
        <ClipboardEdit />
        Edit
      </Link>
    ),
  },
];
