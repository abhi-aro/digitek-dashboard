import React from "react";
import Index from "./Index";
import { getServerSession } from "next-auth";
import { options } from "../../app/api/auth/[...nextauth]/options";
import { api_UpdateUser } from "../../app/api/Authentication";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await getServerSession(options);
  const response = await api_UpdateUser({
    data: { email: session?.user?.email },
  });
  if (response?.data?.body?.stage == 0) {
    redirect("/formData");
  }
  return (
    <>
      <Index />
    </>
  );
};

export default HomePage;
