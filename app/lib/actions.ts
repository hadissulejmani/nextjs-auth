"use server"

import { signIn, signOut } from "@/auth"
import { redirect } from "next/dist/server/api-utils";

export async function signInWithGoogle(formData: FormData) {
    const action = formData.get("action");
    await signIn(action?.toString(), formData, { redirectTo: "/dashboard" })
}

export async function signOutWithGoogle() {
    await signOut({ redirectTo: "/" });
}