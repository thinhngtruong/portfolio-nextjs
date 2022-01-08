import { authApi } from "@/api/auth-api";
import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/profile", {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  });

  const isFirstLoading = profile === undefined && error === undefined;

  async function login() {
    await authApi.login({
      username: "easy",
      password: "123qwe",
    });

    await mutate(profile);
  }

  async function logout() {
    await authApi.logout();
    mutate(null, false);
  }

  return {
    profile,
    error,
    login,
    logout,
    isFirstLoading
  };
}
