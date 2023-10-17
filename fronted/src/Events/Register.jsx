import React, { useEffect, useState } from "react";
import "../Style/Events.css";
import { useParams } from "react-router";
const Register = () => {
  let { id } = useParams();
  const [myRegisterData, setMyRegisterData] = useState({});
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const fetchingMyRegisterData = async () => {
    try {
      const myResponse = await fetch(
        `http://localhost:8080/event/registerevents/${id}`
      );
      const myData = await myResponse.json();
      setMyRegisterData(myData.register_data);
      console.log(myData.register_data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchingMyRegisterData(); // invoking function for fetching data in use-effect

    const targetDate = new Date("2023-12-10T00:00:00").getTime();
    let intervalId;
    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        clearInterval(intervalId);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);
        setTimeRemaining({ days, hours, minutes, seconds });
      }
    };

    intervalId = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="">
        <div className="register_upSec flex ">
          <div className="left_upSec p-10 pl-20">
            <div className="up_text flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="38"
                height="38"
                viewBox="0 0 48 48"
              >
                <circle cx="24" cy="24" r="20" fill="#3ddab4"></circle>
                <polygon
                  fill="#c1f5ea"
                  points="39.091,17.515 35.015,13.604 22.775,26.233 16.679,20.433 12.768,24.509 18.843,30.289 18.843,30.289 22.92,34.179 22.926,34.173 22.932,34.179 26.86,30.119 26.86,30.119"
                ></polygon>
                <polygon
                  fill="#fff"
                  points="22.926,34.173 26.86,30.119 22.775,26.233 18.843,30.289"
                ></polygon>
              </svg>

              <p className="text-3xl font-semibold ">
                You have registered successfully!
              </p>
            </div>
            <div className="main_descDiv mt-4">
              <p className="text-4xl font-bold">Explore how</p>
              <p className="text-4xl font-bold main_descP">
                {myRegisterData.main_desc}
              </p>
              <p className="mt-3">By {myRegisterData.speaker_post}</p>
            </div>

            <div className="flex py-3">
              <div>
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="calendar"
                >
                  <path
                    fill="#b2b1ff"
                    d="M7 6a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-.999 1H7zm10 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-.999 1H17z"
                  ></path>
                  <path
                    fill="#6563ff"
                    d="M19 4h-1v1a1 1 0 0 1-2 0V4H8v1a1 1 0 0 1-2 0V4H5a3 3 0 0 0-3 3v2h20V7a3 3 0 0 0-3-3z"
                  ></path>
                  <circle cx="7" cy="13" r="1" fill="#6563ff"></circle>
                  <circle cx="7" cy="17" r="1" fill="#6563ff"></circle>
                  <circle cx="12" cy="13" r="1" fill="#6563ff"></circle>
                  <circle cx="12" cy="17" r="1" fill="#6563ff"></circle>
                  <circle cx="17" cy="13" r="1" fill="#6563ff"></circle>
                  <circle cx="17" cy="17" r="1" fill="#6563ff"></circle>
                  <path
                    fill="#b2b1ff"
                    d="M2 9v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9H2zm5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                  ></path>
                </svg>
              </div>
              <div className="sag21 font-bold">
                {myRegisterData.date}th, {myRegisterData.month}
              </div>
              <div class="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-slate-700 opacity-100 dark:opacity-20 mx-4"></div>

              <div className="">
                <svg
                  className="sag2"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="clock"
                >
                  <path
                    fill="#6563ff"
                    d="M12 6a1.003 1.003 0 0 1 1 1v4.73l1.6 2.77a1 1 0 1 1-1.73 1l-1.69-2.93A.999.999 0 0 1 11 12V7a1.003 1.003 0 0 1 1-1Z"
                  ></path>
                  <path
                    fill="#b2b1ff"
                    d="M2 12A10 10 0 1 0 12 2 10 10 0 0 0 2 12Zm9-5a1 1 0 0 1 2 0v4.73l1.6 2.77a1 1 0 1 1-1.73 1l-1.69-2.93A.999.999 0 0 1 11 12Z"
                  ></path>
                </svg>
              </div>

              <div className="ml-2 timeDuration_div font-bold">
                {myRegisterData.start_time} {myRegisterData.type1} {"-"}{" "}
                {myRegisterData.end_time} {myRegisterData.type2}
              </div>
            </div>

            <div className="timer flex ">
              <div className="flex flex-col justify-center text-center p-4 px-7 day_block ">
                <p className="text-lg font-bold text-gray-500">
                  {timeRemaining.days}
                </p>
                <p className="text-lg font-bold text-red-500">Days</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gray-500 justify-center text-center p-4">
                  :
                </p>
              </div>
              <div className="flex flex-col justify-center text-center p-4 px-6  hour_block">
                <p className="text-lg font-bold text-gray-500">
                  {timeRemaining.hours}
                </p>
                <p className="text-lg font-bold text-red-500">Hours</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gray-500 justify-center text-center p-4">
                  :
                </p>
              </div>
              <div className="flex flex-col justify-center text-center p-4 px-7  min_block">
                <p className="text-lg font-bold text-gray-500 ">
                  {timeRemaining.minutes}
                </p>
                <p className="text-lg font-bold text-red-500">Mins</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gray-500 flex justify-center text-center p-4">
                  :
                </p>
              </div>

              <div className="flex flex-col justify-center text-center p-4 px-8  secs_block">
                <p className="text-lg font-bold text-gray-500">
                  {timeRemaining.seconds}
                </p>
                <p className="text-lg font-bold text-red-500">Secs</p>
              </div>
            </div>
          </div>
          <div className="right_upSec">
            <img className="" width={700} src={myRegisterData.instructor_img} />
          </div>
        </div>

        <div className="register_wtSec mt-5">
          <div className="flex">
            <div>
              <svg
                
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                // xmlns:svgjs="http://svgjs.com/svgjs"
                id="SvgjsSvg1026"
                width="50"
                height="50"
                version="1.1"
              >
                <defs id="SvgjsDefs1027" />
                <g id="SvgjsG1028">
                  <svg
                  
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    width="50"
                    height="50"
                  >
                    <path
                      d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
                      fill="#114b5f"
                      class="color000 svgShape"
                    />
                  </svg>
                </g>
              </svg>
            </div>
            <div>
              <p className="text-xl font-bold mt-3 ml-3">
                Join this event’s Whatsapp Group to get
              </p>
            </div>
          </div>
        </div>

        <div className="register_aboutSec">
          <h1>register_aboutSec</h1>
        </div>

        <div className="register_evtDescSec">
          <h1>register_evtDescSec</h1>
        </div>

        <div className="intrstuctor_desc flex justify-center">
          <div className="flex inside_div justify-center">
            <div className="about_event">
              <p className="font-sans">Know Your Speaker</p>
              <h1 className="font-sans text-xl mt-2 md:text-2xl font-bold">
                Meet
              </h1>
              <p className="font-sans text-3xl mt-2 font-bold">
                {myRegisterData.speaker}
              </p>
            </div>

            <div class="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-slate-700 opacity-100 dark:opacity-20 ml-14"></div>

            <div className="sideAbout_div">
              <p className="font-medium text-lg mt-20">
                {myRegisterData.instructor_desc}
              </p>
            </div>
          </div>

          <div>
            <img
              src={myRegisterData.instructor_img}
              width={300}
              alt="instructor_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
