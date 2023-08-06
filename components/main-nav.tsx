"use client";

import { cn } from "@/lib/utils";

import { useParams, usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [{ href: `/${params.storeId}` }];
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
    ></nav>
  );
}
