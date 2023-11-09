"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Thankyou from "../../Components/Thankyou/Thankyou";

const ThankyouData = () => {
  const { session } = useSession();
  const router = useRouter();
  return <Thankyou data={session} router={router} />;
};

export default ThankyouData;
