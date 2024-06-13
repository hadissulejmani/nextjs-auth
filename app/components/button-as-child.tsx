import Link from "next/link"
import { Button } from "@/components/ui/button"

type ButtonAsChildProps = {
  path?: string;
  value?: string;
}

export function ButtonAsChild({ path = "/sign-in", value = "Login" }: ButtonAsChildProps) {
  return (
    <Button asChild className={`bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full`}>
      <Link href={path}>{value}</Link>
    </Button>
  )
}
