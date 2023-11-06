"use client";
import { usePathname } from "next/navigation";
import Payment from "../../Components/Payment/Payment";
const PaymentPage = () => {
  const router = usePathname();
  return <Payment router={router} />;
};

export default PaymentPage;
