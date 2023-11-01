"use client";

import { useSession } from "next-auth/react";
import UserForm from "../../Components/UserForm/UserForm";
import { useRouter } from "next/navigation";

const UserFormData = () => {
  const { session } = useSession();
  const router = useRouter();
  return <UserForm data={session} router={router} />;
};

export default UserFormData;
