import React from "react";

const Loading = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      {/* Animated background gradient */}
      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>

      <div className="relative mx-auto flex max-w-7xl gap-[2.5vw] p-6 py-10">
        {/* Poster skeleton */}
        <div className="flex-1/3">
          <div className="h-[60vh] w-full animate-pulse rounded-lg bg-gradient-to-br from-gray-700 to-gray-800"></div>
        </div>

        {/* Content skeleton */}
        <div className="flex-2/3 space-y-6">
          {/* Title skeleton */}
          <div className="h-8 w-3/4 animate-pulse rounded bg-gradient-to-r from-gray-700 to-gray-600"></div>

          {/* Meta info skeleton */}
          <div className="flex items-center gap-4">
            <div className="h-6 w-12 animate-pulse rounded border border-gray-600 bg-gradient-to-r from-gray-700 to-gray-600"></div>
            <div className="h-6 w-24 animate-pulse rounded bg-gradient-to-r from-gray-700 to-gray-600"></div>
            <div className="h-6 w-32 animate-pulse rounded bg-gradient-to-r from-gray-700 to-gray-600"></div>
          </div>

          {/* Rating and button skeleton */}
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 animate-pulse rounded-full bg-gradient-to-r from-gray-700 to-gray-600"></div>
              <div className="h-6 w-16 animate-pulse rounded bg-gradient-to-r from-gray-700 to-gray-600"></div>
            </div>
            <div className="h-8 w-24 animate-pulse rounded-lg border border-gray-600 bg-gradient-to-r from-gray-700 to-gray-600"></div>
          </div>

          {/* Overview skeleton */}
          <div className="space-y-2">
            <div className="h-6 w-32 animate-pulse rounded bg-gradient-to-r from-gray-700 to-gray-600"></div>
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-gradient-to-r from-gray-700 to-gray-600"></div>
              <div className="h-4 w-5/6 animate-pulse rounded bg-gradient-to-r from-gray-700 to-gray-600"></div>
              <div className="h-4 w-4/6 animate-pulse rounded bg-gradient-to-r from-gray-700 to-gray-600"></div>
            </div>
          </div>

          {/* Cast and Director skeleton */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-5 w-20 animate-pulse rounded bg-gradient-to-r from-gray-700 to-gray-600"></div>
              <div className="h-4 w-32 animate-pulse rounded bg-gradient-to-r from-gray-700 to-gray-600"></div>
            </div>
            <div className="space-y-2">
              <div className="h-5 w-12 animate-pulse rounded bg-gradient-to-r from-gray-700 to-gray-600"></div>
              <div className="h-4 w-40 animate-pulse rounded bg-gradient-to-r from-gray-700 to-gray-600"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading spinner overlay */}
      <div className="bg-opacity-50 absolute inset-0 flex items-center justify-center bg-black">
        <div className="relative">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-600 border-t-red-600"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-400 border-t-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
