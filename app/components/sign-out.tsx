import React from 'react'
import { signOutWithGoogle } from '../lib/actions'
import { Button } from '@/components/ui/button'

export default function SignOut() {
  return (
    <form action={signOutWithGoogle}
    >
      <Button type="submit">SignOut</Button>
    </form>
  )
}
