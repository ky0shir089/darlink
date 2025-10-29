"use server";

import axiosInstance from "@/lib/axios";
import { uploadSourceSchema, uploadSourceSchemaType } from "@/lib/formSchema";

export async function uploadSource(values: uploadSourceSchemaType) {
  const validation = uploadSourceSchema.safeParse(values);

  if (!validation.success) {
    return {
      success: false,
      error: "invalid form data",
    };
  }

  const formData = new FormData();
  if (values.file) {
    formData.append("file", values.file);
  }

  const response = await axiosInstance
    .post(`/telemarketing/v1/upload-source`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((error) => {
      return error;
    });

  return response;
}
