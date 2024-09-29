import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1">
        <div className="hidden md:flex flex-row">
          <Image
            src="/assets/icons/logo-icon.svg"
            alt="Logo with name"
            width={32}
            height={32}
            className="mr-2"
          />
          <p className="items-center justify-center text-lg font-bold">
            DocuMate
          </p>
        </div>

        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
