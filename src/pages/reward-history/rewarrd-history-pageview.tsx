import { RewardHistoryCard } from "../../components/reward-history/reward-history-card";

export const RewardHistoryPageView = () => {
  return (
    <div className="flex flex-col gap-4 px-6 pt-6">
      <h1 className="text-[#0E121B] text-[20px] font-semibold">
        Rewards History
      </h1>
      <div className="flex flex-col gap-3">
        <RewardHistoryCard />
      </div>
    </div>
  );
};
