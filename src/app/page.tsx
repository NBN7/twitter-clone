import { SignButton } from "@/components/buttons/SignButton";
import { Divider } from "@nextui-org/react";
import { Anchor } from "@/components/anchor";

export default function LadingPage() {
  return (
    <main className="w-full flex items-center justify-between">
      {/* <div className="md:w-full backgroundimg">
        <img
          src="https://twitter-clone-ccrsxx.vercel.app/_next/image?url=%2Fassets%2Ftwitter-banner.png&w=1920&q=75"
          alt="background"
          className="object-cover w-full h-screen"
        />
      </div> */}

      <div className="w-full flex flex-col items-center gap-8 p-8">
        <img src="/favicon.ico" alt="logo" width="30px" className="sm:hidden" />
        <h1 className="text-4xl font-bold">
          See what’s happening in the world right now.
        </h1>

        <div className="w-full flex flex-col gap-4">
          <SignButton text="Sign up with Google" />
          <SignButton text="Sign up with Apple" />

          <Divider className="my-2" />

          <SignButton
            text="Sign up with phone or email"
            textColor="white"
            backgroundColor="#1D9BF0"
          />

          <p className="text-xs text-center text-[#71767B] font-semibold">
            By signing up, you agree to the <Anchor text="Terms of Service" />{" "}
            and <Anchor text="Privacy Policy" />, including{" "}
            <Anchor text="Cookie Use" />.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <p className="font-bold">Already have an account?</p>
          <SignButton
            text="Sign In"
            textColor="#1D9BF0"
            backgroundColor="inherit"
            border
          />
        </div>
      </div>
    </main>
  );
}
