"use server";

import axiosInstance from "@/lib/axios";
import { parseAxiosError } from "@/lib/parseAxiosError";
import { notFound } from "next/navigation";

export async function customerIndex(
  page: number,
  size: number,
  search?: string
) {
  try {
    const { data } = await axiosInstance.get(`/telemarketing/v1/customer`, {
      params: {
        page,
        size,
        search,
      },
    });
    return data;
  } catch (error) {
    return parseAxiosError(error);
  }
}

export async function customerShow(id: number) {
  try {
    const { data } = await axiosInstance.get(
      `/telemarketing/v1/customer/${id}`
    );
    return data;
  } catch (error) {
    return notFound();
  }
}
export type customerShowType = Awaited<ReturnType<typeof customerShow>>;