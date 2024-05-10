"use client";

import { useMount } from "ahooks";
import { Avatar } from "antd-mobile";
import { useLayoutEffect, useRef, useState } from "react";
import Refresh from "@/assets/icons/refresh.svg";
import Image from "next/image";
import avatar from "@/assets/Image/avatar.jpg";

export const Info = () => {
  const [height, setHeight] = useState(true);
  const [selected, setSelected] = useState(0);
  const curHeight = useRef(true);

  const handleScroll = () => {
    const scrollTop = document.body.scrollTop;
    const threshold = 3; // 可以根据需要调整

    if (scrollTop > threshold) {
      setHeight(false);
      curHeight.current = false;
      // window.scrollTo({ top: 10, left: 0, behavior: "smooth" });
    } else {
      console.log(height);
      if (!curHeight.current) {
        setHeight(true);
        curHeight.current = true;
        document.body.scrollTo({ top: 0, left: 0 });
      }
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full sticky top-0 ">
      <div
        onClick={() => {
          setHeight(true);
        }}
        className={`m-auto flex flex-col items-center justify-evenly w-full bg-black rounded-b-2xl shadow-lg transition-all ease-in-out duration-300 ${
          height ? "h-[212px]" : "h-[83px]"
        }`}
      >
        {/* <div className="m-auto h-full flex items-center flex-col"> */}
        <div className="w-full px-4 flex justify-between items-center text-white ">
          <div className="flex justify-start items-center gap-x-3 w-full">
            <Image
              width={60}
              height={60}
              alt=""
              src={avatar}
              className="rounded-full transition-all duration-300 ease-in-out"
            />
            <div className="  m-auto w-full  ">
              <p className="font-title  p-2 text-[20px] flex flex-row items-center w-full justify-between">
                <div
                  className={`flex gap-2 items-center ${
                    height ? "text-white" : "text-gray"
                  }`}
                >
                  用户昵称
                  {height && (
                    <div className="rounded-full bg-pure w-3 h-3"></div>
                  )}
                </div>
                <Refresh className="fill-white" />
              </p>
              {height && (
                <div className=" p-2 flex flex-row text-white text-[12px] gap-x-4 ">
                  <button className="rounded-full outline outline-white outline-1">
                    <div className="mx-3 whitespace-nowarp">关注标签</div>
                  </button>
                  <button className="rounded-full outline outline-white outline-1">
                    <div className="mx-3 whitespace-nowarp">关注标签</div>
                  </button>
                  <button className="rounded-full outline outline-white outline-1">
                    <div className="mx-3 whitespace-nowarp">关注标签</div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {height && (
          <div className="px-12 flex flex-row text-white text-[16px] gap-x-4 font-title w-full justify-around">
            <div>订阅</div>
            <div>好友</div>
            <div>收藏</div>
            <div>推荐</div>
          </div>
        )}
      </div>
      <div className="bg-white py-3 px-5 text-[16px] w-full transition-all ease-in-out duration-300 sticky top-0 h-[52px] shadow-md shadow-b flex flex-row justify-between">
        <button
          onClick={() => {
            setSelected(0);
          }}
          className={`rounded-xl px-4 font-title transition-all ease-in-out duration-300 ${
            selected === 0
              ? "bg-[#323232] text-white"
              : "bg-transparent text-darkgray"
          }`}
        >
          作品列表
        </button>
        <button
          onClick={() => {
            setSelected(1);
          }}
          className={`rounded-xl px-4 font-title transition-all ease-in-out duration-300 ${
            selected === 1
              ? "bg-[#323232] text-white"
              : "bg-transparent text-darkgray"
          }`}
        >
          系列合集
        </button>
        <button
          onClick={() => {
            setSelected(2);
          }}
          className={`rounded-xl px-4 font-title  transition-all ease-in-out duration-300 ${
            selected === 2
              ? "bg-[#323232] text-white"
              : "bg-transparent text-darkgray"
          }`}
        >
          赞助点图
        </button>
      </div>
    </div>
  );
};
