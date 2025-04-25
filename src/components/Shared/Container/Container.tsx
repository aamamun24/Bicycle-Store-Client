import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">{children}</div>
  );
};

export default Container;
