import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { api_CreateUser } from "../../Authentication";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: {
    //       label: "Email:",
    //       type: "text",
    //       placeholder: "Email",
    //     },
    //     password: {
    //       label: "Password:",
    //       type: "password",
    //       placeholder: "Password",
    //     },
    //   },
    //   async authorize(credentials) {
    //     // Retrieve Data, verify user
    //     const user = { id: "69", name: "Abhishek", password: "cmplx_dev" };
    //     if (
    //       credentials?.username === user.name &&
    //       credentials?.password === user.password
    //     ) {
    //       return user;
    //     } else {
    //       return null;
    //     }
    //   },
    // }),
  ],
  callbacks: {
    async signIn(params) {
      const response = await api_CreateUser({ data: params.profile });
      return response?.data?.body?.success;
    },
  },
};
