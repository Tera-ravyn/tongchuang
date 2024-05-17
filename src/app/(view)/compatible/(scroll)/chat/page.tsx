"use client";
import Refresh from "@/assets/icons/refresh.svg";
import More from "@/assets/icons/more.svg";
import { SpinLoading } from "antd-mobile";
import { useState } from "react";
import { chat, tags } from "../../staticData";
import { pieceType } from "@/app/interface";
import Image from "next/image";
import { useMount } from "ahooks";
import { CustomPopup } from "@/app/(view)/CustomPopup";
import { Detail } from "../discovery/components";
const Chat = () => {
  const [refresh, setRefresh] = useState(false);
  const [panel, setPanel] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const [detail, setDetail] = useState<pieceType>();
  const [data, setData] = useState<any[]>([]);
  const handleRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 5000);
  };
  useMount(() => {
    setData([chat, tags]);
  });
  return (
    <div>
      <CustomPopup
        state={panel}
        setState={setPanel}
        type="compatible"
        title="帖子详情"
      >
        <Detail item={detail!} />
      </CustomPopup>
      <div className="w-full sticky top-0 z-[100] ">
        <div
          className={`gap-y-2 px-4 pt-2 pb-4 flex flex-col items-center justify-evenly w-full bg-neutral-200 rounded-b-2xl shadow-lg `}
        >
          <div className="flex flex-row justify-between items-start w-full">
            <div className="font-title gap-x-6  flex flex-row items-center w-full justify-start">
              <div
                className={`flex gap-2 items-center drop-shadow-lg text-[32px] text-black`}
              >
                十四狒
              </div>
              <Refresh onClick={() => handleRefresh()} className="w-9 h-9" />
            </div>
            <More className="w-9 h-9 text-darkgray" />
          </div>
          <div className="w-full flex flex-row justify-between items-start">
            <div className="max-w-[70%]  flex flex-row flex-wrap gap-y-2 text-black  gap-x-3 w-[120%] ">
              <>
                {(data[1] as string[])?.map((item, index) => (
                  <button
                    key={`tags_${index}`}
                    className="rounded-full shadow-lg outline outline-black outline-1 "
                  >
                    <div className="mx-3 blackspace-nowarp">{item}</div>
                  </button>
                ))}
              </>
            </div>
            <button
              onClick={() => setSubscribe(!subscribe)}
              className={`transition-all duration-500 ease-in-out font-title text-[16px] text-white px-4 py-1 rounded-full ${
                subscribe ? " bg-neutral-400 " : " bg-bblack"
              }`}
            >
              {subscribe ? "已订阅" : "订阅"}
            </button>
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
      <div className="w-full h-full p-4 grid grid-cols-2 gap-x-2">
        <div className="w-full flex flex-col gap-y-2">
          {(data[0] as pieceType[])?.map((item, index) => {
            return (
              <>
                {index % 2 === 0 && (
                  <div
                    onClick={() => {
                      setDetail(item);
                      setPanel(true);
                    }}
                    className="px-4 py-2 bg-neutral-300 rounded-lg flex flex-col items-start gap-y-2"
                  >
                    <div className="font-title text-[18px] text-black">
                      {item.title}
                    </div>
                    {item.cover !== "" && (
                      <div id={`item_${index}`} className="w-full relative">
                        <Image
                          src={
                            "https://image.baidu.com/search/down?url=" +
                            item.cover
                          }
                          alt={item.title}
                          fill={true}
                          objectFit="contain"
                          onLoad={({ target }) => {
                            const { naturalWidth, naturalHeight } =
                              target as HTMLImageElement;
                            const father = document.getElementById(
                              `item_${index}`
                            );
                            father!.style.paddingBottom = `calc(100% / (${naturalWidth} / ${naturalHeight})`;
                          }}
                        />
                      </div>
                    )}
                    <div
                      className="max-h-[158px] overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: item.context }}
                    ></div>
                    <div className="flex flex-row gap-x-2 items-end">
                      <button
                        className="shadow-md outline outline-1 outline-black  rounded-full px-3"
                        key={`tags${index}0`}
                      >
                        {item.ip}
                      </button>
                      {item.tags.map((_, i) => (
                        <button
                          className="shadow-md outline outline-1 outline-black  rounded-full px-3"
                          key={`tags${_}${i}`}
                        >
                          {_}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
        <div className="w-full flex flex-col gap-y-2">
          {(data[0] as pieceType[])?.map((item, index) => {
            return (
              <>
                {index % 2 !== 0 && (
                  <div
                    onClick={() => {
                      setDetail(item);
                      setPanel(true);
                    }}
                    className="px-4 py-2 bg-neutral-300 rounded-lg flex flex-col items-start gap-y-2"
                  >
                    <div className="font-title text-[18px] text-black">
                      {item.title}
                    </div>
                    {item.cover !== "" && (
                      <div id={`item_${index}`} className="w-full relative">
                        <Image
                          src={
                            "https://image.baidu.com/search/down?url=" +
                            item.cover
                          }
                          alt={item.title}
                          fill={true}
                          objectFit="contain"
                          onLoad={({ target }) => {
                            const { naturalWidth, naturalHeight } =
                              target as HTMLImageElement;
                            const father = document.getElementById(
                              `item_${index}`
                            );
                            father!.style.paddingBottom = `calc(100% / (${naturalWidth} / ${naturalHeight})`;
                          }}
                        />
                      </div>
                    )}
                    <div
                      className="max-h-[158px] overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: item.context }}
                    ></div>
                    <div className="flex flex-row gap-x-2 items-end">
                      <button
                        className="shadow-md outline outline-1 outline-black  rounded-full px-3"
                        key={`tags${index}0`}
                      >
                        {item.ip}
                      </button>
                      {item.tags.map((_, i) => (
                        <button
                          className="shadow-md outline outline-1 outline-black  rounded-full px-3"
                          key={`tags${_}${i}`}
                        >
                          {_}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Chat;
