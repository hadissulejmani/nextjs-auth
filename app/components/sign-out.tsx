import React from 'react'
import { signOutWithGoogle } from '../lib/actions'

export default function SignOut() {
  return (
    <form action={signOutWithGoogle}
    >
      <button type="submit">SignOut</button>
    </form>
  )
}
