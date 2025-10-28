"use server";

import axiosInstance from "@/lib/axios";
import { moduleSchema, moduleSchemaType } from "@/lib/formSchema";

export async function moduleStore(values: moduleSchemaType) {
  const validation = moduleSchema.safeParse(values);

  if (!validation.success) {
    return {
      status: false,
      error: "invalid form data",
    };
  }

  const response = await axiosInstance
    .post(`/api/setup-aplikasi/v1/module`, values)
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((error) => {
      return error;
    });

  return response;
}

export async function moduleUpdate(id: number, values: moduleSchemaType) {
  const validation = moduleSchema.safeParse(values);

  if (!validation.success) {
    return {
      status: false,
      error: "invalid form data",
    };
  }

  const response = await axiosInstance
    .put(`/api/setup-aplikasi/v1/module/${id}`, values)
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((error) => {
      return error;
    });

  return response;
}