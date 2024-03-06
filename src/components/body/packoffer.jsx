import check_mark from "../../assets/icon-check.svg";
const PackOffer = () => {
  const offer = [
    {
      id: 1,
      img: check_mark,
      points: "Unlimited websites",
    },
    {
      id: 1,
      img: check_mark,
      points: "100% data ownership",
    },
    {
      id: 1,
      img: check_mark,
      points: "Email reports",
    },
  ];
  return (
    <div className="flex md:items-center mt-10 md:justify-around max-sm:flex-col max-sm:space-y-10 ">
      <div className="space-y-3 ">
        {offer?.map((pack) => (
          <div key={pack?.id}>
            <div className="flex items-center gap-5  max-sm:justify-center">
              <div>
                {" "}
                <img className="" src={pack?.img} alt="" />
              </div>
              <div className="h-[17px] text-[#848ead] font-manrope text-[12px] font-[600] ">
                {pack?.points}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-[170px] h-[41px] rounded-[20.5px] bg-[#293356] flex items-center 
         cursor-pointer mouse hover:text-[#FFF] text-center justify-center font-manrope text-[12px]
         font-[800] text-[#becdff]  max-sm:m-auto
       ">
        Start my trial
      </div>
    </div>
  );
};

export default PackOffer;
