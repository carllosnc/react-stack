import { Outlet } from "react-router";

export default function BaseLayout() {
  return (
    <div className="bg-neutral-100 w-full min-h-screen">
      <div>
        <Outlet />
      </div>
    </div>
  );
}
