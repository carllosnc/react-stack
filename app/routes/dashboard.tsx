import type { Route } from "../+types/root";
import { getAuth } from "@clerk/react-router/ssr.server"
import { redirect } from "react-router"
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

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
      <DashboardHeader />
    </div>
  );
}