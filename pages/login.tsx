import * as React from "react";
import { authApi } from "@/api/index";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/router";

function LoginPage() {
  const router = useRouter();
  const { login, logout, profile } = useAuth({
    revalidateOnMount: true
  });

  const handleLoginClick = async () => {
    try {
      await login();
      router.push('/about');
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
      <button onClick={handleLoginClick}>Login</button>
      {/* <button onClick={handleGetProfileClick}>Get Profile</button> */}
      <button onClick={handleLogoutClick}>Logout</button>
      <button onClick={() => router.push('/about')}>Go to about</button>
    </div>
  );
}

export default LoginPage;
