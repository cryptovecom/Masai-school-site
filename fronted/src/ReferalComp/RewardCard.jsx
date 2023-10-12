import React from 'react';
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";

function RewardCard({ Coin_Req, Gift_name, Gift_url }) {
  return (
    <div className='border-solid items-center rounded-xl justify-center' style={{ background: "#f3f2f2",boxshadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;" }}>
      <div className='flex justify-center pt-8 px-4'> 
        <img src={Gift_url} alt={Gift_name} width={900} />
      </div>
      <div className='flex items-center justify-between mt-1 mx-4'> {/* Align Coin_Req and coin image side by side */}
        <h1 className='text-center font-[700] md:text-[20px] leading-20 text-[16px]'>{Gift_name}</h1>
        <div className='flex items-center py-2'>
          <span className=' md:text-[18px] leading-20 text-[14px]'>{Coin_Req }</span>
          <img
            alt="coins"
            className='pl-[4px]'
            src="https://www.masaischool.com/images/referral/coin.svg"
            loading="lazy"
          />
        </div>
      </div>
     <div className='pl-4 mb-6'>
        <button className='px-2 py-2 rounded-[4px] text-center  md:text-[14px] font-[500] leading-20 text-[12px] text-[#d28187] hover:bg-red-200' style={{border:"1px solid black"}}>CLAIM FOR {Coin_Req} COIN</button>
     </div>
    </div>
  )
}

export default RewardCard;
