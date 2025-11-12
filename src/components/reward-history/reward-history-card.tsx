export const RewardHistoryCard = () => {
  return (
    <div className="bg-[#F5F7FA] p-3 rounded-[8px] ">
      <div className="flex gap-[12px] ">
        <div className="bg-[#FFF] p-2 rounded-[8px] border border-[#E1E4EA] flex items-center justify-center w-12 h-12">
          <img
            src="https://public.interlinklabs.ai/1762858722905_tier-3.png"
            alt=""
            className="w-8 h-8"
          />
        </div>

        <div className="w-full">
          <div className="flex items-center justify-between ">
            <h2 className={`text-[16px] font-semibold`}>Tier 6</h2>

            <div className="flex items-center gap-[6px]">
              <h2 className={`text-[14px] font-bold `}>+3.240</h2>
              <img
                src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/assets/0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85/logo.png"
                alt=""
                className="w-[18px] h-[18px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <p className="text-[14px] font-normal text-[#99A0AE]">
              August - 2025
            </p>
            <div className="py-1 px-2 bg-[#FFF1EB] rounded-full flex items-center ">
              <p className="text-[#FF8447]  text-[14px] font-medium">Unpaid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
