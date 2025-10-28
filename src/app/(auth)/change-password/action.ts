"use server";

import axiosInstance from "@/lib/axios";
import {
  changePasswordSchema,
  changePasswordSchemaType,
} from "@/lib/formSchema";

export async function changePassword(
  id: number,
  values: changePasswordSchemaType
) {
  const validation = changePasswordSchema.safeParse(values);

  if (!validation.success) {
    return {
      status: false,
      message: "invalid form data",
    };
  }

  const response = await axiosInstance
    .put(`/api/auth/v1/change-password/${id}`, values)
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((error) => {
      return error;
    });

    return response
}
