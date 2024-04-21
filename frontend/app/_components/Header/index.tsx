import { Package } from "lucide-react";
import Link from "next/link";
import UserInformation from "../UserInformation";
import { auth } from "@/services/auth";

export default async function Header() {
  const session = await auth()

  return (
    <header className="flex items-center h-16 border-b bg-background shadow-sm px-5">
      <nav className="container w-full flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Package className="w-8 h-8" />
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Shop
          </Link>
        </div>
        <UserInformation name={session?.user.name} />
      </nav>
    </header>
  )
}
