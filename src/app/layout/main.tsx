import type { FC } from "react";
import { Outlet } from "react-router";

export const MainLayout: FC = () => {
  return (
    <main className="size-full h-dvh bg-bg-main text-text-primary container font-roboto">
      <Outlet />
    </main>
  );
};
