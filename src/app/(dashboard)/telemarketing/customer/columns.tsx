"use client";

import { buttonVariants } from "@/components/ui/button";
import { customerShowType } from "@/data/customer";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<customerShowType>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Phone",
    accessorKey: "phone.phone",
  },
  {
    header: "Action",
    cell: ({ row }) => (
      <Link
        className={buttonVariants({ variant: "link", size: "sm" })}
        href={`/telemarketing/customer/${row.original.id}/edit`}
      >
        <Eye />
        View
      </Link>
    ),
  },
];
