import Link from "next/link"

import { Button } from "@/components/ui/button"

export function ButtonAsChild({ path: string = "/sign-in" }) {
  return (
    <Button asChild>
      <Link href={ path }>Login</Link>
    </Button>
  )
}
