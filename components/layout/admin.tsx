import { LayoutProps } from "@/models/index";
import * as React from "react";
import Link from "next/link";
import { Auth } from "../common/auth";
import { useAuth } from "@/hooks/use-auth";

export function AdminLayout({ children }: LayoutProps) {
  const { profile, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>

      <p>{JSON.stringify(profile, null, 4)}</p>
      &nbsp;
      <button onClick={handleLogout}>Log out</button>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{children}</div>
    </Auth>
  );
}
