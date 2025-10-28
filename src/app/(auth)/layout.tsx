import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Logo from "../../../public/vercel.svg";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-svh">
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-4 left-4",
        })}
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>

      <div className="flex flex-col w-full max-w-sm gap-6">
        <Link
          href="/"
          className="flex items-center self-center gap-2 font-medium"
        >
          <Image src={Logo} alt="logo" width={32} height={32} /> Darlink.
        </Link>

        {children}

        <div className="text-xs text-center text-balance text-muted-foreground">
          By clicking continue, you agree to our {""}
          <span className="underline hover:text-primary">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="underline hover:text-primary">Privacy Policy</span>.
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
