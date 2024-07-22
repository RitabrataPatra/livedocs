import { cn } from "@/lib/utils";
import { Head } from "next/document";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1">
        <Image
          src="/assets/icons/logo.svg"
          alt="logo with name"
          width={120}
          height={100}
          className="hidden md:block"
          style={{ width: "auto", height: "100%" }}
          priority
        />
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
          priority
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
