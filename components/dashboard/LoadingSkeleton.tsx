import React from 'react'

const LoadingSkeleton = () => {
  return (
    <tr>
      <td className="pl-4 py-4 border-b border-marron-clarito">
        <div className="w-[100px] h-[50px] bg-gray-200 rounded-sm animate-pulse"></div>
      </td>
      <td className="px-6 py-4 border-b border-marron-clarito">
        <div className="w-1/3 h-4 bg-gray-200 rounded animate-pulse"></div>
      </td>
      <td className="px-6 py-4 border-b border-marron-clarito">
        <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse"></div>
      </td>
      <td className="px-6 py-4 border-b border-marron-clarito">
        <div className="w-1/4 h-4 bg-gray-200 rounded animate-pulse"></div>
      </td>
      <td className="px-6 py-4 border-b border-marron-clarito">
        <div className="w-1/3 h-4 bg-gray-200 rounded animate-pulse"></div>
      </td>
    </tr>
  );
}

export default LoadingSkeleton