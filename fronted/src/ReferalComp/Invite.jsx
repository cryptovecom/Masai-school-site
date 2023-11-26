import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import './Invite.css'
import { FaBeer } from 'react-icons/fa';
import RewardLeaderBCard from "./RewardLeaderBCard";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll } from "react-scroll";
import { getUser } from "../redux/RewardReducer/action";
import { useToast } from "@chakra-ui/react";



function Invite() {
  const curr_user = useSelector(state=>state.user.user)
  const UserData = useSelector(state => state.Reward.Users)
  const UserArr=UserData.sort((a,b)=>{
    return b.coin-a.coin
  })
  const toast = useToast();
  const handleToast = ()=>{
    toast({
      title: "Referral Code Copied !!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  const dispatch = useDispatch();
 
    useEffect(() => {
      animateScroll.scrollToTop({ smooth: true })
      dispatch(getUser());
  }, [])
  return (
    <div className="Invite_Main flex lg:flex-row items-center gap-10 pt-[30px] md:flex-col sm:flex-col" >
               <div>
            <div className="px-4 pb-8 pt-4 rounded-[10px]" style={{boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} >
      <h1 className="text-left pb-4 font-[700] md:text-[16px] leading-40 tracking-wider text-[#777bf2] text-[15px]">
        Refer Friends and earn rewards while they start their journey at Masai!
      </h1>
      <div>
        <div className="flex items-center py-2">
          <div className="mr-4">
            <img
              src="https://dashboard.masaischool.com/img/referral/coin_banner_1.svg"
              alt="boy"
            />
          </div>

          <div>
          <h1 className="text-left font-[500] md:text-[16px] leading-40 tracking-wider text-[#000000] text-[15px]">
            Your friend successfully clears the MSAT.
            </h1>
            <p className="text-2xl text-gray-900 mt-2 
              flex items-center
            ">
              <span className="inline-flex items-center px-2 py-2 md:px-4  md:text-[14px] text-xs mr-1 font-[500] text-[#6E71CC]  bg-[#f7f7ff] rounded-full">
                    You both get 100 coins
                <img
                  className="-mr-1 ml-1"
                  alt="coins"
                  src="https://www.masaischool.com/images/referral/coin.svg"
                  loading="lazy"
                />
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center py-2">
          <div className="mr-4">
            <img
              src="https://dashboard.masaischool.com/img/referral/coin_banner_2.svg"
              alt="boy"
            />
          </div>

          <div>
          <h1 className="text-left font-[500] md:text-[16px] leading-40 tracking-wider text-[#000000] text-[15px]">
            Your friend successfully completes the Onboarding Process.
            </h1>
            <p className="text-2xl text-gray-900 mt-2 
              flex items-center
            ">
              <span className="inline-flex items-center px-2 py-2 md:px-4  md:text-[14px] text-xs mr-1 font-[500] text-[#6E71CC]  bg-[#f7f7ff] rounded-full">
                    You both get 100 coins
                <img
                  className="-mr-1 ml-1"
                  alt="coins"
                  src="https://www.masaischool.com/images/referral/coin.svg"
                  loading="lazy"
                />
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center py-2">
          <div className="mr-4">
            <img
              src="https://dashboard.masaischool.com/img/referral/coin_banner_3.svg"
              alt="boy"
            />
          </div>

          <div>
          <h1 className="text-left font-[500] md:text-[16px] leading-40 tracking-wider text-[#000000] text-[15px]">
              Your friend starts their classes and completes their 1st week.
            </h1>
            <p className="text-2xl text-gray-900 mt-2 
              flex items-center
            ">
              <span className="inline-flex items-center px-2 py-2 md:px-4  md:text-[14px] text-xs mr-1 font-[500] text-[#6E71CC]  bg-[#f7f7ff] rounded-full">
              You both get 500 coins
                <img
                  className="-mr-1 ml-1"
                  alt="coins"
                  src="https://www.masaischool.com/images/referral/coin.svg"
                  loading="lazy"
                />
              </span>
            </p>
          </div>
        </div>
      </div>
      
      
    </div>
    <div className="flex justify-center py-4" >
    <div className="bg-[#ffe180] px-10 py-2 rounded-[10px] mt-[-40px]">
    <CopyToClipboard text={curr_user?.referalCode}>
        <span>{curr_user?.referalCode}<button onClick={handleToast} className="bg-[#3670e4] p-[5px] ml-2 px-4 text-[white] text-[14px] font-[600] rounded-[10px]">COPY CODE</button></span>
          
        </CopyToClipboard>
    </div>
      
      </div>

    </div>
    <div className="mt-[-35px] py-6 rounded-[10px]" style={{boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
    <h1 className="text-center text-left font-[700] md:text-[16px] leading-40 tracking-wider text-[#777bf2] text-[15px]">Current Leaderboard</h1>
    {
      UserArr.slice(0,5)?.map((el,i)=>{
        return   <RewardLeaderBCard key={i} {...el} />
      })
    }
     

    </div>
    </div>
 
   
  );
}

export default Invite;
