import React from "react";

const TableSkeleton = () => {
  return (
    <div className="animate-pulse w-full flex bg-blanco border-b border-marron-clarito">
      <div className="pl-4 py-4">
        <div className="w-[100px] h-[50px] bg-marron rounded-sm"></div>
      </div>
      <div className="px-6 py-4 flex items-center">
        <div className="w-32 h-4 bg-marron rounded "></div>
      </div>
      <div className="px-6 py-4 flex items-center">
        <div className="w-32 h-4 bg-marron rounded "></div>
      </div>
      <div className="px-6 py-4 flex items-center">
        <div className="w-32 h-4 bg-marron rounded "></div>
      </div>
      <div className="px-6 py-4 flex items-center">
        <div className="w-32 h-4 bg-marron rounded "></div>
      </div>
      <div className="px-6 py-4 flex items-center">
        <div className="w-32 h-4 bg-marron rounded "></div>
      </div>
    </div>
  );
};

const LoadingDashboardSkeleton = () => {
  return (
    <main className="flex-1 ml-56 p-8 bg-blanco-oscuro overflow-hidden">
      <nav className="w-fit max-w-3xl mx-auto flex justify-center p-4 bg-marron rounded animate-pulse">
        <ul className="w-[700px] h-[100px] flex flex-wrap justify-center gap-4">
          <li className="w-40 h-5 bg-blanco rounded"></li>
          <li className="w-40 h-5 bg-blanco rounded"></li>
          <li className="w-40 h-5 bg-blanco rounded"></li>
          <li className="w-40 h-5 bg-blanco rounded"></li>
          <li className="w-40 h-5 bg-blanco rounded"></li>
          <li className="w-40 h-5 bg-blanco rounded"></li>
        </ul>
      </nav>
      <header className="items-center justify-between block sm:flex mt-10 h-5 animate-pulse">
        <div className="w-32 bg-marron rounded-xl h-5"></div>
        <div className="w-32 bg-marron rounded-xl h-5"></div>
      </header>
      <div className="w-full h-10 bg-blanco mt-10 border-b border-marron-clarito animate-pulse flex items-center justify-between p-6">
        <div className="bg-marron w-24 h-5 rounded"></div>
        <div className="bg-marron w-24 h-5 rounded"></div>
        <div className="bg-marron w-24 h-5 rounded"></div>
        <div className="bg-marron w-24 h-5 rounded"></div>
        <div className="bg-marron w-24 h-5 rounded"></div>
      </div>
      <TableSkeleton/>
      <TableSkeleton/>
      <TableSkeleton/>
      <TableSkeleton/>
    </main>
  );
};

export default LoadingDashboardSkeleton;
