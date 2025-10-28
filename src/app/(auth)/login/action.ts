"use server";

import axiosInstance from "@/lib/axios";
import { signInSchema, signInSchemaType } from "@/lib/formSchema";
import { cookies } from "next/headers";

export async function signIn(values: signInSchemaType) {
  const validation = signInSchema.safeParse(values);

  if (!validation.success) {
    return {
      status: false,
      message: "invalid form data",
    };
  }

  const today = new Date();
  const oneDay = today.setDate(today.getDate() + 1);

  const response = await axiosInstance
    .post(`/api/auth/sign-in`, values)
    .then(async (res) => {
      const { data } = res;
      const cookieStore = await cookies();
      cookieStore.set("user", JSON.stringify(data.data), {
        path: "/",
        expires: oneDay,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });
      cookieStore.set("access_token", JSON.stringify(data.access_token), {
        path: "/",
        expires: oneDay,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });
      return data;
    })
    .catch((error) => {
      return error;
    });

  return response;
}
