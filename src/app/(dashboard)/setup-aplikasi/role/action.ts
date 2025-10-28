"use server";

import axiosInstance from "@/lib/axios";
import { roleSchema, roleSchemaType } from "@/lib/formSchema";

export async function roleStore(values: roleSchemaType) {
  const validation = roleSchema.safeParse(values);

  if (!validation.success) {
    return {
      status: false,
      error: "invalid form data",
    };
  }

  const response = await axiosInstance
    .post(`/api/setup-aplikasi/v1/role`, values)
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((error) => {
      return error;
    });

  return response;
}

export async function roleUpdate(id: number, values: roleSchemaType) {
  const validation = roleSchema.safeParse(values);

  if (!validation.success) {
    return {
      status: false,
      error: "invalid form data",
    };
  }

  const response = await axiosInstance
    .put(`/api/setup-aplikasi/v1/role/${id}`, values)
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((error) => {
      return error;
    });

  return response;
}
