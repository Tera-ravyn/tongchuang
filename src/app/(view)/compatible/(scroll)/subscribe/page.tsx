"use client";

import { useRef, useState } from "react";
import { Friends, Sponsor, SubscribeIp, SubscribeUser } from "./components";
import { pieceType } from "@/app/interface";
import { CustomPopup } from "@/app/(view)/CustomPopup";
import { Detail } from "../discovery/components";
import { CenterPopup, Swiper, SwiperRef, Toast } from "antd-mobile";

const Chat = () => {
  const tabs = ["列表好友", "订阅用户", "订阅ip", "赞赏用户"];
  const swiperRef = useRef<SwiperRef>(null);
  const [panel, setPanel] = useState(false);
  const [detail, setDetail] = useState<pieceType>();
  const [select, setSelect] = useState(0);
  const [popup, setPopup] = useState(false);
  return (
    <div className="relative">
      <CenterPopup
        visible={popup}
        onMaskClick={() => {
          setPopup(false);
        }}
      >
        <div className="w-full h-full p-6 flex flex-col gap-y-4">
          <div className="font-title text-[16px]">请输入赞赏码</div>
          <div className="w-full py-1 bg-neutral-300 rounded-md">
            <input className="bg-transparent px-2" />
          </div>
          <div className="flex flex-row justify-around font-title ">
            <button
              className="bg-neutral-300 rounded-md px-4 py-1"
              onClick={() => {
                setPopup(false);
              }}
            >
              取消
            </button>
            <button
              className="bg-red-700 rounded-md px-4 py-1 text-white"
              onClick={() => {
                Toast.show("出了点小问题……请稍后再试");
              }}
            >
              确定
            </button>
          </div>
        </div>
      </CenterPopup>
      <CustomPopup
        state={panel}
        setState={setPanel}
        title="作品详情"
        type="compatible"
      >
        {detail && <Detail item={detail} />}
      </CustomPopup>
      <div className="w-full sticky top-0 z-[100] ">
        <div
          className={`z-[100] py-6 px-10 grid grid-cols-4 transition-all duration-300 ease-in-out justify-between w-full bg-neutral-200 rounded-b-2xl shadow-lg gap-x-3 `}
        >
          {tabs.map((item, index) => (
            <button
              onClick={() => {
                setSelect(index);
                swiperRef.current?.swipeTo(index);
              }}
              key={`tabs${index}`}
              className={`transition-all duration-300 ease-in-out  font-title  text-[14px]  py-1 rounded-md ${
                index === select
                  ? " bg-bblack text-white"
                  : " bg-white text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className=" w-full h-full ">
        <Swiper
          style={{ background: "#303030", width: "100%", height: "100%" }}
          indicator={() => null}
          ref={swiperRef}
          defaultIndex={select}
          onIndexChange={(index) => {
            setSelect(index);
          }}
        >
          <Swiper.Item className=" w-full h-full ">
            <Friends setDetail={setDetail} setPanel={setPanel} />
          </Swiper.Item>
          <Swiper.Item className=" w-full h-full p-4">
            <SubscribeUser setDetail={setDetail} setPanel={setPanel} />
          </Swiper.Item>
          <Swiper.Item className=" w-full h-full p-4">
            <SubscribeIp setDetail={setDetail} setPanel={setPanel} />
          </Swiper.Item>
          <Swiper.Item className=" w-full h-full p-4">
            <Sponsor setPopup={setPopup} />
          </Swiper.Item>
        </Swiper>
      </div>
      {/* <div className="w-full h-full p-4">
        {childPanel(select, setDetail, setPanel)}
      </div> */}
    </div>
  );
};
export default Chat;
