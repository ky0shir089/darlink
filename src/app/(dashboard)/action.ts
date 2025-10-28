"use server";

import axiosInstance from "@/lib/axios";

export async function getData() {
  try {
    return await axiosInstance.get(`/api/customers`);
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
