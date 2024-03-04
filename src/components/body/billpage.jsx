import PackOffer from "./packoffer";

const BillPage = () => {
  return (
    <div
      className="w-[540px] h-[394px] bg-[#FFF] rounded-[8px]  shadow-2xl m-auto 
    mt-[-10rem] max-sm:w-[327px] max-sm:h-[478px] ">
      <div>
        {/* pageview */}
        <div className="flex justify-between">
          <div>100k pageviews</div>
          <div>$16.00/month</div>
        </div>
        {/* scroll */}
        <div></div>
        {/* billing */}
        <div className="flex gap-10 justify-end">
          <div>monthly billing</div>
          <div></div>
          <div>yearly billing</div>
          <div>25% discount</div>
        </div>
        <hr />
        <div>
          <PackOffer />
        </div>
      </div>
    </div>
  );
};

export default BillPage;
