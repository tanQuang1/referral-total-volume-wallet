export const CashBoxSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 animate-pulse">
      {/* Top boxes */}
      <div className="flex flex-col gap-3">
        {/* CurrentBonusBox skeleton */}
        <div className="bg-[#F5F7FA] p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#E1E4EA]" />
              <div className="h-3 w-28 rounded bg-[#E1E4EA]" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-16 rounded bg-[#E1E4EA]" />
              <div className="w-3 h-3 rounded bg-[#E1E4EA]" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-6 w-24 rounded bg-[#E1E4EA]" />
            <div className="w-6 h-6 rounded-full bg-[#E1E4EA]" />
          </div>
        </div>

        {/* YourVolumeBox skeleton */}
        <div className="bg-[#F5F7FA] p-4 rounded-xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#E1E4EA]" />
              <div className="h-3 w-40 rounded bg-[#E1E4EA]" />
            </div>
            <div className="h-6 w-28 rounded bg-[#E1E4EA]" />
          </div>

          <hr className="my-3 border border-[#E1E4EA]" />

          <div className="flex flex-col gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="h-3 w-28 rounded bg-[#E1E4EA]" />
                <div className="h-4 w-16 rounded bg-[#E1E4EA]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RewardThresholds skeleton */}
      <div className="flex flex-col gap-2 mt-6">
        <div className="h-4 w-40 rounded bg-[#E1E4EA]" />
        <div className="flex flex-col gap-3">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-[#F5F7FA] p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E1E4EA]" />
                <div className="h-4 w-24 rounded bg-[#E1E4EA]" />
              </div>
              <div className="h-4 w-16 rounded bg-[#E1E4EA]" />
            </div>
          ))}
        </div>
      </div>

      {/* Fixed CTA skeleton */}
      <div className="fixed inset-x-0 bottom-4 z-50 px-5">
        <div className="w-full h-[52px] rounded-full bg-[#E1E4EA]" />
      </div>
    </div>
  );
};
