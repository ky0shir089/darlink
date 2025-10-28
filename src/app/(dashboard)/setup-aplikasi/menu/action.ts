"use server";

import axiosInstance from "@/lib/axios";
import { menuSchema, menuSchemaType } from "@/lib/formSchema";

export async function menuStore(values: menuSchemaType) {
  const validation = menuSchema.safeParse(values);

  if (!validation.success) {
    return {
      status: false,
      error: "invalid form data",
    };
  }

  const response = await axiosInstance
    .post(`/api/setup-aplikasi/v1/menu`, values)
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((error) => {
      return error;
    });

  return response;
}

export async function menuUpdate(id: number, values: menuSchemaType) {
  const validation = menuSchema.safeParse(values);

  if (!validation.success) {
    return {
      status: false,
      error: "invalid form data",
    };
  }

  const response = await axiosInstance
    .put(`/api/setup-aplikasi/v1/menu/${id}`, values)
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((error) => {
      return error;
    });

  return response;
}
