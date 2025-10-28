"use client";

import { Button } from "@/components/ui/button";
import { refreshToken } from "@/lib/refreshToken";

const RefreshButton = () => {
  async function handleRefresh() {
    const result = await refreshToken();
    console.log(result);
  }

  return <Button onClick={handleRefresh}>refresh</Button>;
};

export default RefreshButton;
