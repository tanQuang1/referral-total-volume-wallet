import useSWR from "swr";
import { CurrentBonusBox } from "./current-bonus-box";
import { RewardThresholds } from "./reward-thresholds";
import { YourVolumeBox } from "./your-volume-box";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const CashBox = () => {
  const { address } = useParams();
  const { t } = useTranslation();
  const {
    data: overviewVolumeReferralData,
    isLoading: isOverviewVolumeReferralDataLoading,
    error: overviewVolumeReferralDataError,
  } = useSWR(`user-wallet/overview-volume-referral?address=${address}`);
  const communityVolume =
    overviewVolumeReferralData?.data.volumes.communityVolume || 0;
  const myTotalVolume =
    overviewVolumeReferralData?.data.volumes.myTotalVolume || 0;
  const totalF1Volume =
    overviewVolumeReferralData?.data.volumes.totalF1Volume || 0;
  const totalF2Volume =
    overviewVolumeReferralData?.data.volumes.totalF2Volume || 0;
  const currentBonus = overviewVolumeReferralData?.data.currentBonus || 0;
  const tiers = overviewVolumeReferralData?.data.tiers || [];
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <CurrentBonusBox currentBonus={currentBonus} />
        <YourVolumeBox
          communityVolume={communityVolume}
          myTotalVolume={myTotalVolume}
          totalF1Volume={totalF1Volume}
          totalF2Volume={totalF2Volume}
        />
      </div>
      <RewardThresholds tiers={tiers} />
      <div className="fixed inset-x-0 bottom-4 z-50 px-5">
        <button
          className="bg-[#6962F1] text-[#FFF] text-[16px] font-bold rounded-full w-full px-6 py-[18px]"
          onClick={() => {
            window.location.href = "interlinkid://(wallet)/trade?tab=perp";
          }}>
          {t("tradeNow")}
        </button>
      </div>
    </div>
  );
};
