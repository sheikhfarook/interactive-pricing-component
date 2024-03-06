import React, { useState, useEffect } from "react";
import PackOffer from "./packoffer";
import right from "../../assets/icon-slider.svg";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";
import { Switch, FormControl } from "@chakra-ui/react";

const BillPage = () => {
  const [monthly, setMonthly] = useState(false);
  const [sliderValue, setSliderValue] = useState(75); // Initially set to 16
  const [pageviews, setPageviews] = useState("100k");
  const [price, setPrice] = useState(16);

  useEffect(() => {
    const newPrice = calculatePrice(pageviews);
    setPrice(newPrice);
  }, [monthly]);

  useEffect(() => {
    const newPageviews = calculatePageviews(sliderValue);
    const newPrice = calculatePrice(newPageviews);
    setPageviews(newPageviews);
    setPrice(newPrice);
  }, []); // Run only once on initial render

  const calculatePrice = (pageviews) => {
    let newPrice;
    if (monthly) {
      switch (pageviews) {
        case "10k":
          newPrice = 8;
          break;
        case "50k":
          newPrice = 12;
          break;
        case "100k":
          newPrice = 16;
          break;
        case "500k":
          newPrice = 24;
          break;
        case "1M":
          newPrice = 36;
          break;
        default:
          break;
      }
    } else {
      switch (pageviews) {
        case "10k":
          newPrice = 6;
          break;
        case "50k":
          newPrice = 9;
          break;
        case "100k":
          newPrice = 12;
          break;
        case "500k":
          newPrice = 18;
          break;
        case "1M":
          newPrice = 27;
          break;
        default:
          break;
      }
    }
    return newPrice;
  };

  const calculatePageviews = (value) => {
    let newPageviews;
    switch (true) {
      case value <= 25:
        newPageviews = "10k";
        break;
      case value <= 50:
        newPageviews = "50k";
        break;
      case value <= 75:
        newPageviews = "100k";
        break;
      case value <= 90:
        newPageviews = "500k";
        break;
      case value <= 100:
        newPageviews = "1M";
        break;
      default:
        break;
    }
    return newPageviews;
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
    const newPageviews = calculatePageviews(value);
    const newPrice = calculatePrice(newPageviews);
    setPageviews(newPageviews);
    setPrice(newPrice);
  };

  return (
    <div className="w-full h-full p-4">
      <div
        className="w-[540px] h-[394px] bg-white rounded-[8px] font-manrope shadow-2xl m-auto
       mt-[-10rem] max-sm:w-[327px] max-sm:h-[478px] ">
        <div className="p-10 space-y-7">
          {/* pageview */}
          <div className="max-sm:hidden">
            {/* first */}
            <div className="flex justify-between items-center max-sm:flex-col">
              <div className="w-[150px] h-[19px] text-[#848ead] text-[14px] uppercase font-[800] tracking-[2px]">
                {pageviews} pageviews
              </div>

              <div className="flex items-center">
                <div className="w-[140px] h-[55px] text-[#293356] text-[40px] font-[800] tracking-[-1px]">
                  ${price.toFixed(2)}
                </div>
                <div className="w-[61px] h-[22px] text-[#848ead] text-[16px] font-[600] pt-[-1rem]">
                  /month
                </div>
              </div>
            </div>
          </div>
          {/* slider */}
          <div>
            {/* first */}
            <div className="md:hidden">
              <div className="m-auto w-[150px] h-[19px] text-[#848ead] text-[14px] uppercase font-[800] tracking-[2px]">
                {pageviews} pageviews
              </div>
            </div>
          </div>
          <div className="">
            <Slider
              colorScheme="cyan"
              min={0}
              max={100}
              value={sliderValue}
              onChange={(value) => handleSliderChange(value)}>
              <SliderTrack height="8px" rounded="5px">
                <SliderFilledTrack />
              </SliderTrack>
              <div className="shadow-2xl">
                <SliderThumb
                  boxSize="40px"
                  bg="cyan"
                  _focus={{ boxShadow: "none" }}>
                  <Box />
                  <img className="" src={right} alt="" />
                </SliderThumb>
              </div>
            </Slider>
          </div>
          {/*  */}
          <div className="flex items-center md:hidden ">
            <div className="m-auto w-[140px] h-[55px] mt-[-2rem] text-[#293356] ml-[20px] text-[40px] font-[800] tracking-[-1px]">
              ${price.toFixed(2)}
            </div>
            <div className="w-[61px] h-[22px] mr-[20px] mt-[-2rem] text-[#848ead] text-[16px] font-[600] pt-[-1rem]">
              /month
            </div>
          </div>

          {/* billing */}
          <div className="flex gap-5 justify-end items-center">
            <div className="w-[85px] h-[17px] text-[#848ead] font-[600] text-[12px] ">
              Monthly Billing
            </div>
            <div>
              <FormControl display="flex" alignItems="center">
                <Switch
                  colorScheme="cyan"
                  id="email-alerts"
                  onChange={(e) => {
                    setMonthly(e.target.checked);
                  }}
                />
              </FormControl>
            </div>
            <div className="w-[72px] h-[17px] text-[#848ead] text-[12px] font-[600]">
              Yearly Billing
            </div>
            {/* {monthly && ( */}
            <div className="w-[80px] h-[19px] rounded-[91.5px] bg-[#feede8] text-[#ff8d68] text-[10px] font-[800] flex items-center justify-center">
              25% discount
            </div>
            {/* // )} */}
          </div>
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
