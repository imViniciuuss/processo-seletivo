import BtnLogout from "@/components/logout";
import { Button } from "@/components/ui/button";
import { auth } from "@/services/auth";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default async function Home() {
  const session = await auth()



  return (
    <>
      <h1>{session?.user.email}</h1>
      <BtnLogout />
    </>
  );
}
