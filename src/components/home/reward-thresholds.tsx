import { useTranslation } from "react-i18next";
import { RewardThresholdsCard } from "./reward-thresholds-card";
type RewardThresholdsProps = {
  tiers?: Array<{
    code: 1 | 2 | 3 | 4 | 5 | 6;
    reward: number;
  }>;
};
export const RewardThresholds = ({ tiers }: RewardThresholdsProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2 mt-6 ">
      <h1 className="text-[14px] text-[#0E121B] font-medium ">
        {t("home.rewardThresholds")}
      </h1>
      <div className="pb-[100px]">
        {tiers && tiers.length > 0 ? (
          <div className="flex flex-col gap-3">
            {tiers.map((tier) => (
              <RewardThresholdsCard
                key={tier.code}
                code={tier.code}
                reward={tier.reward}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};
