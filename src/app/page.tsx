"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/buttons/Button";
import { Divider } from "@nextui-org/react";
import { Anchor } from "@/components/Anchor";
import { LandingFooter } from "@/components/footers/LandingFooter";

import { BsTwitter } from "react-icons/bs";

export default function LandingPage() {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push("/home");
  };

  const handleSignInClick = () => {
    router.push("/home");
  };
  return (
    <>
      <main className="w-full flex items-center justify-between">
        {/* BLUE SIDE */}
        <div className="hidden sm:flex w-full items-center justify-center min-h-screen bg-sky-500 p-2">
          <BsTwitter size="300px" />
        </div>

        {/* BLACK SIDE */}
        <div className="w-full flex flex-col sm:items-start items-center gap-8 p-8">
          {/* TWITTER LOGO FOR MOBILE */}
          <img src="/favicon.ico" alt="logo" className="sm:hidden w-[30px]" />

          {/* TWITTER LOGO FOR DESKTOP */}
          <BsTwitter className="hidden sm:block" size="40px" />

          {/* TITLE FOR MOBILE */}
          <h2 className="sm:hidden text-4xl font-bold">
            See what's happening in the world right now.
          </h2>

          {/* TITLE FOR DESKTOP */}
          <h2 className="sm:block hidden text-6xl font-bold">Happening now</h2>
          <h3 className="hidden sm:block text-3xl font-bold">
            Join Twitter today.
          </h3>

          {/* BUTTONS CONTAINER */}
          <div className="sm:w-[350px] w-full flex flex-col gap-4">
            <Button
              logo="/google.png"
              text="Sign up with Google"
              variant="secondary"
              onClick={handleSignUpClick}
            />

            <Button
              logo="/apple.png"
              text="Sign up with Apple"
              variant="secondary"
              onClick={handleSignUpClick}
            />

            {/* OR */}
            <div className="w-full flex items-center justify-evenly overflow-hidden">
              <Divider className="my-2 w-1/3" />
              <p className="font-semibold">or</p>
              <Divider className="my-2 w-1/3" />
            </div>

            <Button
              text="Sign up with phone or email"
              variant="primary"
              onClick={handleSignUpClick}
            />

            {/* TERMS OF USE */}
            <p className="text-xs text-center text-[#71767B] font-semibold">
              By signing up, you agree to the{" "}
              <Anchor text="Terms of Service" variant="primary" /> and{" "}
              <Anchor text="Privacy Policy" variant="primary" />, including{" "}
              <Anchor text="Cookie Use" variant="primary" />.
            </p>

            {/* ALREADY HAVE AN ACCOUNT */}
            <div className="w-full flex flex-col gap-4">
              <p className="font-bold">Already have an account?</p>
              <Button
                text="Sign In"
                variant="default"
                border
                onClick={handleSignInClick}
              />
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <LandingFooter />
    </>
  );
}
