import type { Route } from "../+types/root";
import { getAuth } from "@clerk/react-router/ssr.server"
import { Outlet, redirect } from "react-router"

export async function loader(args: any) {
  const auth = await getAuth(args)

  if (!auth.sessionId) {
    return redirect('/sign-in')
  }
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
  ];
}

export default function Dashboard() {
  return (
    <div>
      <h1> Dashboard page </h1>
      <Outlet />
    </div>
  );
}