"use server";

import axiosInstance from "@/lib/axios";

export async function menuIndex(page: number, size: number, search?: string) {
  try {
    const { data } = await axiosInstance.get(`/api/setup-aplikasi/v1/menu`, {
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

export async function menuShow(id: number) {
  try {
    const { data } = await axiosInstance.get(
      `/api/setup-aplikasi/v1/menu/${id}`
    );

    return data;
  } catch (error) {
    return error;
  }
}
