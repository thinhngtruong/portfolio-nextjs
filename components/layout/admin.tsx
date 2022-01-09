import * as React from "react";
import { LayoutProps } from "@/models/index";
import { Auth } from "../common";
import { useAuth } from "@/hooks/use-auth";
import { Button, Space } from "antd";
import { useRouter } from "next/router";

export function AdminLayout({ children }: LayoutProps) {
  const { profile, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>
      <p>{JSON.stringify(profile, null, 4)}</p>
      &nbsp;
      <Space>
        <Button type="primary" onClick={() => router.push("/")}>
          Home
        </Button>
        &nbsp;
        <Button type="primary" danger onClick={() => router.push("/about")}>
          About
        </Button>
        &nbsp;
        <Button onClick={handleLogout}>Log out</Button>
      </Space>
      <div>{children}</div>
    </Auth>
  );
}
