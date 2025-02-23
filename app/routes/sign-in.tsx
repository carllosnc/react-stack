import { GoogleSignIn } from "@/components/google-button";
import { getAuth } from "@clerk/react-router/ssr.server";
import { NavLink, redirect } from "react-router";
import type { Route } from "./+types/sign-in"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sign In" },
  ];
}

export async function loader(args: any) {
  const auth = await getAuth(args)
  if (auth.sessionId) {
    return redirect('/dashboard')
  }
}

export default function SignIn() {
  return (
    <main className="min-h-screen flex flex-col gap-[30px] items-center justify-center p-6">
      <div className="w-full shadow-md shadow-neutral-200 max-w-[400px] bg-white border border-neutral-300 gap-[20px] flex-col rounded-lg px-6 py-[60px] flex justify-center items-center">
        <img src="/logo.svg" alt="logo" className="w-16 h-16 opacity-30" />

        <div className="flex flex-col items-center gap-[10px]">
          <h1 className="font-bold text-lg"> React Stack </h1>
          <span className="text-neutral-500"> Welcome! To login to continue </span>
        </div>

        <GoogleSignIn />
      </div>

      <NavLink to="/" className="link-color hover:underline">
        Back to home →
      </NavLink>
    </main>
  );
}