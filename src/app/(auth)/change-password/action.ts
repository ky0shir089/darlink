"use server";

import axiosInstance from "@/lib/axios";
import {
  changePasswordSchema,
  changePasswordSchemaType,
} from "@/lib/formSchema";
import { parseAxiosError } from "@/lib/parseAxiosError";
import { success } from "zod";

export async function changePassword(
  id: number,
  values: changePasswordSchemaType
) {
  const validation = changePasswordSchema.safeParse(values);

  if (!validation.success) {
    return {
      success: false,
      message: "invalid form data",
    };
  }

  try {
    const { data } = await axiosInstance.put(
      `/auth/v1/change-password/${id}`,
      values
    );
    return data;
  } catch (error) {
    return parseAxiosError(error);
  }
}
