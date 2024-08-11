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
const LoadingSkeleton = () => {
  return (
    <>
      <TableSkeleton />
      <TableSkeleton />
      <TableSkeleton />
      <TableSkeleton />
    </>
  );
};

export default LoadingSkeleton;
