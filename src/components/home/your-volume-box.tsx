import { useTranslation } from "react-i18next";

type YourVolumeBoxProps = {
  communityVolume: number;
  myTotalVolume: number;
  totalF1Volume: number;
  totalF2Volume: number;
};
export const YourVolumeBox = ({
  communityVolume,
  myTotalVolume,
  totalF1Volume,
  totalF2Volume,
}: YourVolumeBoxProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-3  bg-[#F5F7FA] text-[#99A0AE] p-4 rounded-xl text-[14px]">
      <div className="space-y-2">
        <div className="flex gap-[6px] items-center">
          <img
            src="https://public.interlinklabs.ai/1762856880358_Group.png"
            alt=""
            className="w-4 h-4"
          />
          <p>{t("home.yourCommunityVolume")}</p>
        </div>
        <h2 className="text-[#0E121B] text-[24px] font-bold">
          {Number(communityVolume || 0).toLocaleString("de-DE", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          })}
        </h2>
      </div>
      <hr className="border border-[#E1E4EA]" />
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <p className="text-[12px] text-[#99A0AE] font-normal">
            {t("home.yourVolume")}
          </p>
          <p className="text-[#0E121B] font-medium text-[14px]">
            {Number(myTotalVolume || 0).toLocaleString("de-DE", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[12px] text-[#99A0AE] font-normal">
            {t("home.yourF1Volume")}
          </p>
          <p className="text-[#0E121B] font-medium text-[14px]">
            {Number(totalF1Volume || 0).toLocaleString("de-DE", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[12px] text-[#99A0AE] font-normal">
            {t("home.yourF2Volume")}
          </p>
          <p className="text-[#0E121B] font-medium text-[14px]">
            {Number(totalF2Volume || 0).toLocaleString("de-DE", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
