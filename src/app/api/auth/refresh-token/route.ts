import { env } from "@/lib/env";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("=== Refresh Token Route Handler ===");

  try {
    const cookieStore = await cookies();
    const refresh_token = cookieStore.get("refresh_token");

    console.log("Refresh token exists:", !!refresh_token);

    if (!refresh_token) {
      console.log("No refresh token found");
      return NextResponse.json(
        { error: "No refresh token found" },
        { status: 401 }
      );
    }

    console.log("Refresh token value length:", refresh_token.value.length);

    const parsedToken = JSON.parse(refresh_token.value);
    console.log("Calling external API...");

    const { data } = await axios.post(
      `${env.BASE_URL}/api/auth/refresh-token`,
      {},
      {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        },
      }
    );

    console.log("External API success:", !!data.access_token);

    // Set the new access token
    const oneDay = new Date();
    oneDay.setDate(oneDay.getDate() + 1);

    cookieStore.set("access_token", data.access_token, {
      path: "/",
      expires: oneDay,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    console.log("New access token set");

    return NextResponse.json({
      success: true,
      message: "Token refreshed successfully",
    });
  } catch (error: any) {
    console.error("Refresh token error:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });

    return NextResponse.json(
      {
        error: "Failed to refresh token",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
