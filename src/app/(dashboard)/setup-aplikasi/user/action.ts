"use server";

import axiosInstance from "@/lib/axios";
import { userSchema, userSchemaType } from "@/lib/formSchema";

export async function userStore(values: userSchemaType) {
  const validation = userSchema.safeParse(values);

  if (!validation.success) {
    return {
      status: false,
      error: "invalid form data",
    };
  }

  const response = await axiosInstance
    .post(`/api/setup-aplikasi/v1/user`, values)
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((error) => {
      return error;
    });

  return response;
}

export async function userUpdate(id: number, values: userSchemaType) {
  const validation = userSchema.safeParse(values);

  if (!validation.success) {
    return {
      status: false,
      error: "invalid form data",
    };
  }

  const response = await axiosInstance
    .put(`/api/setup-aplikasi/v1/user/${id}`, values)
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((error) => {
      return error;
    });

  return response;
}
