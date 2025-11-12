import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
type CurrentBonusBoxProps = {
  currentBonus: number;
};
export const CurrentBonusBox = ({ currentBonus }: CurrentBonusBoxProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2  bg-[#F5F7FA] text-[#99A0AE] p-4 rounded-xl text-[14px]">
      <div className="flex justify-between ">
        <div className="flex gap-[6px] items-center">
          <img
            src="https://public.interlinklabs.ai/1762854124781_dollar-circle.png"
            alt=""
            className="w-4 h-4"
          />
          <p>{t("home.currentBonus")}</p>
        </div>
        <Link to="/history" className="flex items-center">
          <p>{t("home.history")}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none">
            <path
              d="M4.37549 10.624L10.6255 4.37402"
              stroke="#99A0AE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.37549 4.37402H10.6255V10.624"
              stroke="#99A0AE"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      <div className="flex items-center gap-[6px]">
        <h2 className="text-[#1FC16B] text-[24px] font-bold">
          +{currentBonus}
        </h2>
        <img
          src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85/logo.png"
          alt=""
          className="w-6 h-6"
        />
      </div>
    </div>
  );
};
