
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Image from "next/image";
import SignOut from "../components/sign-out";

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
                <p className="mt-2 text-sm text-gray-600">
                    Welcome {session?.user?.name}!
                </p>
                <p className="mt-4 text-sm text-gray-600">
                    User email: <code>{session?.user?.email}</code>
                </p>
                <p className="mt-4 text-sm text-gray-600">
                    User id: <code>{session?.user?.id}</code>
                </p>
                <Image
                    src={session?.user?.image}
                    alt={session?.user?.name}
                    width={180}
                    height={37}
                    className="rounded-full" />
            </div>
            <SignOut />
        </div>
    );
}

export default Dashboard;