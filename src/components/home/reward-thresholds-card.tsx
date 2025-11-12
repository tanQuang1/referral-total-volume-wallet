import { useTranslation } from "react-i18next";

type RewardThresholdsCardProps = {
  code: 1 | 2 | 3 | 4 | 5 | 6;
  reward: number;
};

export const RewardThresholdsCard = ({
  code,
  reward,
}: RewardThresholdsCardProps) => {
  const { t } = useTranslation();
  const TIER_INFO = {
    1: {
      threshold: 243000000,
      img: "https://public.interlinklabs.ai/1762916310695_tier1.png",
    },
    2: {
      threshold: 81000000,
      img: "https://public.interlinklabs.ai/1762916311285_tier2.png",
    },
    3: {
      threshold: 27000000,
      img: "https://public.interlinklabs.ai/1762916311561_tier3.png",
    },
    4: {
      threshold: 9000000,
      img: "https://public.interlinklabs.ai/1762916311801_tier4.png",
    },
    5: {
      threshold: 3000000,
      img: "https://public.interlinklabs.ai/1762916312022_tier5.png",
    },
    6: {
      threshold: 1000000,
      img: "https://public.interlinklabs.ai/1762916312253_tier6.png",
    },
  };
  const progress = (reward / TIER_INFO[code].threshold) * 100;
  const pct = Math.max(0, Math.min(progress, 100));
  const isComplete = pct >= 100;

  return (
    <div className="px-3 py-2 border border-[rgba(31,193,107,0.16)] rounded-[12px]">
      <div className="flex gap-2 ">
        <div className="bg-[#F5F7FA] p-2 rounded-[8px] flex items-center justify-center w-12 h-12">
          <img src={TIER_INFO[code].img} alt="" className="w-8 h-8" />
        </div>

        <div className="w-full">
          <div className="flex items-center justify-between ">
            <h2
              className={`text-[16px] font-semibold ${
                isComplete ? "text-[#1FC16B]" : ""
              }`}>
              {t(`home.tier`)} {code}
            </h2>

            <div className="flex items-center gap-[6px]">
              <h2
                className={`text-[18px] font-bold ${
                  isComplete ? "text-[#1FC16B]" : "text-[#6962F1]"
                }`}>
                {isComplete
                  ? `+${reward.toLocaleString()}`
                  : `${reward.toLocaleString()}`}
              </h2>
              <img
                src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85/logo.png"
                alt=""
                className="w-[18px] h-[18px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <p className="text-[12px] font-normal text-[#99A0AE]">
              {Number(pct || 0).toLocaleString("en-US", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 2,
              })}
              %
            </p>
            <p className="text-[12px] font-normal text-[#99A0AE]">
              {TIER_INFO[code].threshold.toLocaleString()}
            </p>
          </div>

          <div className="rounded-full bg-[#E1E4EA] h-2">
            <div
              className={`rounded-full h-full ${
                isComplete ? "bg-[#1FC16B]" : "bg-[#6962F1]"
              }`}
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
