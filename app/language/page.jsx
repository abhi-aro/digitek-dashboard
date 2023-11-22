"use client";
import { usePathname, useRouter } from "next/navigation";

import LanguageComponent from "../../Components/language/LanguageComponent";

const Language = () => {
  const router = usePathname();
  return <LanguageComponent router={router} />;
};

export default Language;
