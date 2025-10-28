"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { env } from "./env";
import { redirect } from "next/navigation";

export async function refreshToken() {
  const cookieStore = await cookies();
  const refresh_token = cookieStore.get("refresh_token");

  const response = await axios
    .post(
      `${env.BASE_URL}/api/auth/refresh-token`,
      {},
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(refresh_token!.value)}`,
        },
      }
    )
    .then(async (res) => {
      const { data } = res;
      const today = new Date();
      const oneDay = today.setDate(today.getDate() + 1);
      const cookieStore = await cookies();
      cookieStore.set("access_token", JSON.stringify(data.access_token), {
        path: "/",
        expires: oneDay,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });
      return data;
      // redirect("/setup-aplikasi/module");
    })
    .catch((error) => {
      return error;
    });

  return response;
}
