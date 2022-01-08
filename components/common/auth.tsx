import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

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

  if (!profile?.username) return <p>Loading...</p>;

  return <div>{children}</div>;
};