import * as React from "react";
import { authApi } from "@/api/index";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/router";
import { Button, Space } from "antd";

function LoginPage() {
  const router = useRouter();
  const { login, logout, profile } = useAuth({
    revalidateOnMount: true,
  });

  const handleLoginClick = async () => {
    try {
      await login();
      router.push("/about");
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetProfileClick = async () => {
    try {
      await authApi.getProfile();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogoutClick = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Login page</h1>

      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
      <Space>
        <Button type="primary" onClick={handleLoginClick}>
          Login
        </Button>
        &nbsp;
        <Button type="primary" danger onClick={handleLogoutClick}>
          Logout
        </Button>
        &nbsp;
        <Button onClick={() => router.push("/about")}>Go to about</Button>
      </Space>
    </div>
  );
}

export default LoginPage;
