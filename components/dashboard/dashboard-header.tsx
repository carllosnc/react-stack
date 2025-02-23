import { UserButton } from "@/components/user-button";

export function DashboardHeader() {
  return (
    <nav className="border-b border-neutral-200 px-6">
      <div className="w-full m-auto flex justify-between items-center max-w-[1000px] h-[70px]">
        <span className="font-bold"> Dashboard </span>
        <UserButton />
      </div>
    </nav>
  )
}
