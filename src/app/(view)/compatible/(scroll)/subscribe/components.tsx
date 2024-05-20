"use client";

import { useMount } from "ahooks";
import Image from "next/image";
import { useState } from "react";
import { friends, sponsor, subscribeIp, subscribeUser } from "../../staticData";
import { pieceType } from "@/app/interface";
import { CenterPopup, Toast } from "antd-mobile";
import { BiChevronRight } from "react-icons/bi";
import MoveArrow from "@/assets/icons/moveArrow.svg";
export const Friends = ({
  setDetail,
  setPanel,
}: {
  setDetail: React.Dispatch<pieceType>;
  setPanel: React.Dispatch<boolean>;
}) => {
  const [select, setSelect] = useState<number[]>([]);
  return (
    <div className="flex flex-col gap-y-4 py-4">
      {/* <div
        onClick={() => {
          if (select.includes(-1)) setSelect(select.filter((i) => i !== -1));
          else setSelect((prev) => [...prev, -1]);
        }}
        key={`friend_index`}
        className={`transition-all duration-300 ease-in-out  grid  w-full ${
          select.includes(-1)
            ? " bg-neutral-200 grid-rows-[1fr_1fr]"
            : " bg-neutral-300 grid-rows-[1fr_0fr]"
        }`}
      >
        <div className=" flex flex-row justify-between items-center p-3">
          <div className=" text-[16px] font-bold pl-3">新的朋友</div>
          <div className=" text-[14px] flex flex-row text-darkgray items-center">
            全部
            <BiChevronRight className="w-8 h-8" />
          </div>
        </div>
      </div> */}

      {friends.map((friend, index) => (
        <div
          onClick={() => {
            if (select.includes(index))
              setSelect(select.filter((i) => i !== index));
            else setSelect((prev) => [...prev, index]);
          }}
          key={`friend_${index}`}
          className={`transition-all duration-300 ease-in-out grid px-4 py-2 w-full ${
            select.includes(index)
              ? " bg-neutral-200 grid-rows-[0fr_1fr]"
              : " bg-neutral-300 grid-rows-[0fr_0fr]"
          }`}
        >
          <div className=" flex flex-row justify-between items-center ">
            <div className=" text-[16px] font-bold pl-3">{friend.group}</div>
            <div className=" text-[14px] flex flex-row text-darkgray items-center">
              全部
              <BiChevronRight
                className={`w-8 h-8 transition-all duration-300 ease-in-out ${
                  select.includes(index) ? " rotate-90" : ""
                }`}
              />
            </div>
          </div>
          <div className="min-h-0 overflow-hidden flex flex-col gap-y-2">
            <div className="h-[2px] w-full bg-neutral-400 my-2"></div>
            {friend.users.map((user, i) => (
              <div
                key={`users_${index}_${i}`}
                className=" flex flex-row justify-between gap-y-2 items-center"
              >
                <div className="flex flex-row justify-start items-center gap-x-4 ">
                  <Image
                    className="rounded-full"
                    src={user.userIcon}
                    alt={user.user}
                    width={38}
                    height={38}
                    layout="fixed"
                    objectFit="contain"
                  />
                  <div className="flex flex-col justify-start">
                    <div className="flex flex-row items-center justify-start gap-x-2">
                      {user.user}{" "}
                      <div
                        className={`w-2 h-2 rounded-full ${
                          user.type === "pure" ? " bg-pure" : " bg-compatible"
                        }`}
                      ></div>
                    </div>
                    <div className="text-darkgray">{user.motto}</div>
                  </div>
                </div>
                <MoveArrow className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export const Chat = () => {
  return <></>;
};
export const SubscribeUser = ({
  setDetail,
  setPanel,
}: {
  setDetail: React.Dispatch<pieceType>;
  setPanel: React.Dispatch<boolean>;
}) => {
  const [data, setData] = useState<any[]>([]);
  useMount(() => {
    setData(subscribeUser);
  });
  return (
    <div className="w-full text-[15px] flex flex-col  bg-bblack items-center justify-start gap-y-5">
      {(data as pieceType[])?.map((item, index) => {
        return (
          <div
            key={`project${index}`}
            onClick={() => {
              setDetail(item);
              setPanel(true);
            }}
            className="bg-neutral-300  rounded-2xl w-full px-3"
          >
            <div className="flex flex-row items-center gap-x-2 font-title py-2">
              <Image
                width={25}
                height={25}
                alt=""
                src={
                  typeof item.userIcon === "string"
                    ? "https://image.baidu.com/search/down?url=" + item.userIcon
                    : item.userIcon
                }
                className="rounded-full"
              />
              <div>{item.user}</div>
              <div
                className={`w-2 h-2 rounded-full ${
                  item.type === "compatible" ? "bg-compatible" : "bg-pure"
                }`}
              ></div>
            </div>
            <div className="cursor-pointer items-center pb-2">
              <div className="font-title text-black text-[22px]">
                {item.title}
              </div>
              {item.cover !== "" ? (
                <div className="grid grid-cols-[1fr_110px] gap-x-3">
                  {/* <p className="line-clamp-4 text-gray-front">
                {item.context}
              </p> */}
                  <div className="flex flex-col max-h-[110px] gap-y-2 overflow-y-hidden">
                    <div
                      dangerouslySetInnerHTML={{ __html: item.context }}
                    ></div>
                  </div>
                  <div className="overflow-hidden relative w-[110px] h-[110px]  ">
                    <Image
                      style={{ objectFit: "cover" }}
                      src={
                        "https://image.baidu.com/search/down?url=" + item.cover
                      }
                      fill={true}
                      sizes="100vw"
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                <div
                  className="max-h-[110px] overflow-y-hidden"
                  dangerouslySetInnerHTML={{ __html: item.context }}
                ></div>
              )}
            </div>
            <div className="flex flex-row justify-between items-end py-2 text-[12px]">
              <div className="flex flex-row gap-x-2 items-end">
                <button className="bg-white rounded-full px-3 text-[14px] ">
                  {item.ip}
                </button>
                {item.tags.map((_, i) => (
                  <button
                    className="bg-white rounded-full px-3"
                    key={`tags${_}${i}`}
                  >
                    {_}
                  </button>
                ))}
              </div>
              {item.date.format("YYYY.MM.DD")}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export const SubscribeIp = ({
  setDetail,
  setPanel,
}: {
  setDetail: React.Dispatch<pieceType>;
  setPanel: React.Dispatch<boolean>;
}) => {
  const [data, setData] = useState<any[]>([]);
  useMount(() => {
    setData(subscribeIp);
  });
  return (
    <div className="w-full text-[15px] flex flex-col  bg-bblack items-center justify-start gap-y-5">
      {(data as pieceType[])?.map((item, index) => {
        return (
          <div
            key={`project${index}`}
            onClick={() => {
              setDetail(item);
              setPanel(true);
            }}
            className="bg-neutral-300  rounded-2xl w-full px-3"
          >
            <div className="flex flex-row items-center gap-x-2 font-title py-2">
              <Image
                width={25}
                height={25}
                alt=""
                src={
                  typeof item.userIcon === "string"
                    ? "https://image.baidu.com/search/down?url=" + item.userIcon
                    : item.userIcon
                }
                className="rounded-full"
              />
              <div>{item.user}</div>
              <div
                className={`w-2 h-2 rounded-full ${
                  item.type === "compatible" ? "bg-compatible" : "bg-pure"
                }`}
              ></div>
            </div>
            <div className="cursor-pointer items-center pb-2">
              <div className="font-title text-black text-[22px]">
                {item.title}
              </div>
              {item.cover !== "" ? (
                <div className="grid grid-cols-[1fr_110px] gap-x-3">
                  {/* <p className="line-clamp-4 text-gray-front">
              {item.context}
            </p> */}
                  <div className="flex flex-col max-h-[110px] gap-y-2 overflow-y-hidden">
                    <div
                      dangerouslySetInnerHTML={{ __html: item.context }}
                    ></div>
                  </div>
                  <div className="overflow-hidden relative w-[110px] h-[110px]  ">
                    <Image
                      style={{ objectFit: "cover" }}
                      src={
                        "https://image.baidu.com/search/down?url=" + item.cover
                      }
                      fill={true}
                      sizes="100vw"
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                <div
                  className="max-h-[110px] overflow-y-hidden"
                  dangerouslySetInnerHTML={{ __html: item.context }}
                ></div>
              )}
            </div>
            <div className="flex flex-row justify-between items-end py-2 text-[12px]">
              <div className="flex flex-row gap-x-2 items-end">
                <button className="bg-white rounded-full px-3 text-[14px] ">
                  {item.ip}
                </button>
                {item.tags.map((_, i) => (
                  <button
                    className="bg-white rounded-full px-3"
                    key={`tags${_}${i}`}
                  >
                    {_}
                  </button>
                ))}
              </div>
              {item.date.format("YYYY.MM.DD")}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export const Sponsor = ({
  setPopup,
}: {
  setPopup: React.Dispatch<boolean>;
}) => {
  const [data, setData] = useState<any[]>([]);

  useMount(() => {
    setData(sponsor);
  });
  return (
    <div className="w-full text-[15px] flex flex-col  bg-bblack items-center justify-start gap-y-5">
      {(data as pieceType[])?.map((item, index) => {
        return (
          <div
            key={`project${index}`}
            onClick={() => setPopup(true)}
            className="bg-neutral-300  rounded-2xl w-full px-3"
          >
            <div className="flex flex-row items-center gap-x-2 font-title py-2">
              <Image
                width={25}
                height={25}
                alt=""
                src={
                  typeof item.userIcon === "string"
                    ? "https://image.baidu.com/search/down?url=" + item.userIcon
                    : item.userIcon
                }
                className="rounded-full"
              />
              <div>{item.user}</div>
              <div
                className={`w-2 h-2 rounded-full ${
                  item.type === "compatible" ? "bg-compatible" : "bg-pure"
                }`}
              ></div>
            </div>
            <div className="cursor-pointer items-center pb-2">
              <div className="font-title text-black text-[22px]">
                {item.title}
              </div>
              {item.cover !== "" ? (
                <div className="grid grid-cols-[1fr_110px] gap-x-3 items-center">
                  {/* <p className="line-clamp-4 text-gray-front">
                  {item.context}
                </p> */}
                  <div className="flex flex-col max-h-[110px] gap-y-2 underline">
                    输入赞赏码解锁
                  </div>
                  <div className="overflow-hidden relative w-[110px] h-[110px]  ">
                    <Image
                      style={{ objectFit: "cover", filter: "blur(5px)" }}
                      src={
                        "https://image.baidu.com/search/down?url=" + item.cover
                      }
                      fill={true}
                      sizes="100vw"
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col max-h-[110px] gap-y-2 underline">
                  输入赞赏码解锁
                </div>
              )}
            </div>
            <div className="flex flex-row justify-between items-end py-2 text-[12px]">
              <div className="flex flex-row gap-x-2 items-end">
                <button className="bg-white rounded-full px-3 text-[14px] ">
                  {item.ip}
                </button>
                {item.tags.map((_, i) => (
                  <button
                    className="bg-white rounded-full px-3"
                    key={`tags${_}${i}`}
                  >
                    {_}
                  </button>
                ))}
              </div>
              {item.date.format("YYYY.MM.DD")}
            </div>
          </div>
        );
      })}
    </div>
  );
};
