import type { FC } from "react";
import { Outlet } from "react-router";

export const MainLayout: FC = () => {
  return (
    <main className="size-full bg-bg-main text-text-primary container font-roboto">
      <Outlet />
    </main>
  );
};
