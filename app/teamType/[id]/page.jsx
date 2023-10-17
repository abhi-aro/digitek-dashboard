"use client";
import { usePathname, useRouter } from "next/navigation";
import TeamRequired from "../../../Components/TeamRequired/TeamRequired";

const TeamTypeRequired = () => {
  const router = usePathname();
  return <TeamRequired router={router}/>;
};

export default TeamTypeRequired;
