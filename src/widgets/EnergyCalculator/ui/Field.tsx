import type { FC, PropsWithChildren } from "react";

export const Field: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex mt-3">{children}</div>;
};
