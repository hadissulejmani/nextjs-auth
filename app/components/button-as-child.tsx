import Link from "next/link"
import { Button } from "@/components/ui/button"

type ButtonAsChildProps = {
  path?: string;
  value: string;
  className?: string;
}

export function ButtonAsChild({ path = "/sign-in", value = "Login", className }: ButtonAsChildProps) {
  return (
    <Button asChild className={className}>
      <Link href={path}>{value}</Link>
    </Button>
  )
}
