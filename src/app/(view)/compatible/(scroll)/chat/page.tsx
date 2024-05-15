"use client";
import Refresh from "@/assets/icons/refresh.svg";
import { SpinLoading } from "antd-mobile";
import { useState } from "react";
const Chat = () => {
  const [refresh, setRefresh] = useState(false);
  const handleRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 5000);
  };
  return (
    <div>
      <div className="w-full sticky top-0 z-[100] ">
        <div
          className={`m-auto flex flex-col items-center justify-evenly w-full bg-neutral-200 rounded-b-2xl shadow-lg `}
        >
          <div className="w-full h-full bg-[#390F0F] absolute z-[-1]"></div>
          <div className="w-full px-4 flex justify-between items-center text-black ">
            <div className="flex justify-start items-center gap-x-3 w-full">
              <div className="  m-auto w-full  ">
                <div className="font-title gap-x-6 p-2 flex flex-row items-center w-full justify-start">
                  <div
                    className={`flex gap-2 items-center drop-shadow-lg text-[32px] text-black`}
                  >
                    十四狒
                  </div>
                  <Refresh
                    onClick={() => handleRefresh()}
                    className="w-9 h-9"
                  />
                </div>
                <div className="w-full relative">
                  <div className=" p-2 flex flex-row text-black  gap-x-4  w-[120%] ">
                    <button className="rounded-full shadow-lg outline outline-black outline-1 ">
                      <div className="mx-3 blackspace-nowarp">吃谎的人</div>
                    </button>
                    <button className="rounded-full  shadow-lg outline outline-black outline-1">
                      <div className="mx-3 blackspace-nowarp">深水之窗3</div>
                    </button>
                    <button className="rounded-full  shadow-lg outline outline-black outline-1">
                      <div className="mx-3 blackspace-nowarp">明天的船</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {refresh && (
        <div className=" text-white w-full pt-4 flex justify-center">
          <SpinLoading
            color="white"
            style={{ "--size": "64px", margin: "auto" }}
          />
        </div>
      )}
      <div className="w-full h-full"></div>
    </div>
  );
};
export default Chat;
