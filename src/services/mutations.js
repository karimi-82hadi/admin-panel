import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";

import api from "@/config/axios";

const useSignup = () => {
  const mutationFn = (data) => api.post("/auth/signup", data);

  return useMutation({ mutationFn });
};

const useLogin = () => {
  const mutationFn = (data) =>
    signIn("credentials", { ...data, redirect: false });

  return useMutation({ mutationFn });
};

export { useSignup, useLogin };
