import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ButtonAsChild } from "./components/button-as-child";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl font-mono text-sm lg:flex lg:justify-between">
        <div className="flex w-full justify-center lg:justify-start lg:top-20">
          <h1 className="text-xl font-bold">Authentication with Google App</h1>
        </div>
        <div className="relative flex flex-col lg:flex-row justify-center gap-5 z-10 items-center w-full lg:w-auto h-full mt-10 lg:mt-0">
          <ButtonAsChild path="/sign-in" value="Sign In" />
          <ButtonAsChild path="/sign-up" value="Sign Up" />
        </div>
      </div>
    </main>
  );
}
