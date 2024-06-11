"use server"

import { signIn } from "@/auth"

export async function signInWithGoogle(formData: FormData) {
    const action = formData.get("action");
    await signIn(action?.toString(), formData, "/dashboard")
}