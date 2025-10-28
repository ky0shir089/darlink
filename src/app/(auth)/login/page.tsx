import { cookies } from "next/headers";
import { LoginForm } from "./_components/login-form";
import { redirect } from "next/navigation";

type SearchParams = Promise<{ code: string }>;

export default async function LoginPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { code } = await searchParams;
  const cookieStore = await cookies();
  const user = cookieStore.get("user");

  if (user) {
    redirect("/");
  }

  return <LoginForm code={code} />;
}
