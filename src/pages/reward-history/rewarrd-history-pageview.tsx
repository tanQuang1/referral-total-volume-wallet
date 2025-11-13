// import { RewardHistoryCard } from "../../components/reward-history/reward-history-card";

import { useTranslation } from "react-i18next";

export const RewardHistoryPageView = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4 px-6 pt-6">
      <h1 className="text-[#0E121B] text-[20px] font-semibold">
        {t("history.rewardHistory")}
      </h1>
      <div className="flex flex-col  ">
        <div className="flex flex-col gap-6 items-center h-screen justify-center ">
          <img
            src="https://public.interlinklabs.ai/1763001295112_doc.png"
            alt=""
            className="w-[120px] h-[120px]"
          />
          <p className="text-[#99A0AE] text-[16px] font-medium text-center ">
            {t("history.noData")}
          </p>
        </div>
        {/* <RewardHistoryCard /> */}
      </div>
    </div>
  );
};
