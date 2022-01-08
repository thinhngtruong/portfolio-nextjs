import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Button } from 'antd';
export interface AuthProps {
  children: any;
}

export const Auth = ({ children }: AuthProps) => {
  const router = useRouter();
  const { profile, isFirstLoading } = useAuth();

  useEffect(() => {
    if (!isFirstLoading && !profile?.username) {
      router.push("/login");
    }
  }, [isFirstLoading, profile?.username, router]);

  if (!profile?.username)
    return (
      <Button type="primary" loading>
        Loading
      </Button>
    );

  return <div>{children}</div>;
};
