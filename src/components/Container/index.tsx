import React from "react";

const Container = ({ children }: { children: React.ReactNode[] }) => (
  <div className="flex min-h-screen flex-col justify-center overflow-hidden bg-gray-200 py-0 md:py-12">
    <div className="flex flex-col gap-4 bg-white px-6 py-8 shadow-xl ring-1 ring-gray-900/5 md:mx-auto min-h-screen md:min-h-0 md:w-full md:max-w-2xl md:rounded-lg">
      {children}
    </div>
  </div>
);

export default Container;
