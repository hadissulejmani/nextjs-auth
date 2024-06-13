import Link from "next/link"
import { Button } from "@/components/ui/button"

type ButtonAsChildProps = {
  path?: string;
  value?: string;
}

export function ButtonAsChild({ path = "/sign-in", value = "Login" }: ButtonAsChildProps) {
  return (
    <Button asChild>
      <Link href={path}>{value}</Link>
    </Button>
  )
}
