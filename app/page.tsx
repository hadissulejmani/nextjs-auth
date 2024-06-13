import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ButtonAsChild } from "./components/button-as-child";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-20 flex w-full justify-center">
          Authentication with Google App
        </p>
        <div className="relative flex justify-center">
          <ButtonAsChild />
        </div>
        </div>
    </main>
  );
}
