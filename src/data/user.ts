"use server";

import axiosInstance from "@/lib/axios";

export async function userIndex(page: number, size: number, search?: string) {
  try {
    const { data } = await axiosInstance.get(`/api/setup-aplikasi/v1/user`, {
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

export async function userShow(id: number) {
  try {
    const { data } = await axiosInstance.get(
      `/api/setup-aplikasi/v1/user/${id}`
    );

    return data;
  } catch (error) {
    return error;
  }
}
