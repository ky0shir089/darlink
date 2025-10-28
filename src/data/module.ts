"use server";

import axiosInstance from "@/lib/axios";

export async function moduleIndex(page: number, size: number, search?: string) {
  try {
    const { data } = await axiosInstance.get(`/api/setup-aplikasi/v1/module`, {
      params: {
        page,
        size,
        search,
      },
    });

    return data;
  } catch (error) {
    return error;
  }
}

export async function moduleShow(id: number) {
  try {
    const { data } = await axiosInstance.get(
      `/api/setup-aplikasi/v1/module/${id}`
    );

    return data;
  } catch (error) {
    return error;
  }
}
