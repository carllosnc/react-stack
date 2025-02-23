import { HomeMenu } from "@/components/home/home-menu";
import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeMenu />
    </div>
  );
}

