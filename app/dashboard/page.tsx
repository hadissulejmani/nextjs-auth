"use client";

import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";


const Dashboard = async () => {
    {
        "use server";
        const session = await auth();
        if (!session?.user) redirect("/");
    }
    const session = await auth();
    
    if (!session?.user) redirect("/");

    return (
        <div className="flex justify-center py-24">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <Button onClick={() => signOut()}>Sign out</Button>
            </div>
        </div>
    );
}

export default Dashboard;