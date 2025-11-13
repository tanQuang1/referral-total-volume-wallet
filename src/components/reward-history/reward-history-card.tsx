import { useTranslation } from "react-i18next";

type RewardHistoryCardProps = {
  code: 1 | 2 | 3 | 4 | 5 | 6;
  reward: number;
  date?: string;
  isPaid?: boolean;
};
export const RewardHistoryCard = ({
  code,
  reward,
  date,
  isPaid,
}: RewardHistoryCardProps) => {
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
  const formatMonthYear = (dateString?: string) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;

    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    return `${month} - ${year}`;
  };
  return (
    <div className="bg-[#F5F7FA] p-3 rounded-[8px] ">
      <div className="flex gap-[12px] ">
        <div className="bg-[#FFF] p-2 rounded-[8px] border border-[#E1E4EA] flex items-center justify-center w-12 h-12">
          <img src={TIER_INFO[code].img} alt="" className="w-8 h-8" />
        </div>

        <div className="w-full">
          <div className="flex items-center justify-between ">
            <h2 className={`text-[16px] font-semibold`}>
              {t(`home.tier`)} {code}
            </h2>

            <div className="flex items-center gap-[6px]">
              <h2 className={`text-[14px] font-bold `}>+{reward}</h2>
              <img
                src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85/logo.png"
                alt=""
                className="w-[18px] h-[18px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <p className="text-[14px] font-normal text-[#99A0AE]">
              {formatMonthYear(date)}
            </p>
            <div
              className={`py-1 px-2 ${
                isPaid ? "bg-[rgba(31,193,107,0.10)]" : "bg-[#FFF1EB]"
              } rounded-full flex items-center `}>
              <p
                className={`${
                  isPaid ? "bg-[#1FC16B]" : "text-[#FF8447]"
                }  text-[14px] font-medium`}>
                {isPaid ? t("history.paid") : t("history.unpaid")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
