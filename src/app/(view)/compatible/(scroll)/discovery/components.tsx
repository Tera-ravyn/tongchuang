"use client";
import Search from "@/assets/icons/search.svg";
import Star from "@/assets/icons/star.svg";
import { SpinLoading } from "antd-mobile";
import { useState } from "react";
import { project, searchHistory } from "../../staticData";
import Image from "next/image";

export const SearchPage = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<boolean>;
}) => {
  const [refresh, setRefresh] = useState(false);
  const [active, setActive] = useState(0);
  const [value, setValue] = useState("");
  const classes = ["文章", "插画", "漫画", "DIY", "剪辑"];
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
          className={`py-6 px-10 flex flex-col items-center justify-evenly w-full bg-neutral-200 rounded-b-2xl shadow-lg `}
        >
          <div
            className=" text-[15px] px-4 py-1 flex flex-row items-center w-full justify-between bg-gray rounded-md"
            style={{ boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.2)" }}
          >
            <input
              className="w-full bg-transparent"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <Search
              // onClick={() => handleRefresh()}
              className="w-5 h-5"
            />
          </div>
        </div>
        <div className="w-full  sticky top-0 z-[100] flex flex-row p-4 bg-black items-center justify-between">
          {classes.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className={`justify-evenly flex flex-row items-center gap-x-2 font-title text-[16px] text-white`}
                >
                  <Star
                    className={`w-6 h-6 ${
                      active === index
                        ? "text-red-800 stroke-1 stroke-white"
                        : "text-white"
                    }`}
                  />
                  <div
                    className={
                      active === index ? "text-red-800 " : "text-white"
                    }
                    style={{
                      WebkitTextStroke: active === index ? "0.5px white" : "",
                    }}
                  >
                    {item}
                  </div>
                </div>
                {index !== classes.length - 1 && (
                  <div className="w-[2px] h-[25px] bg-darkgray"></div>
                )}
              </>
            );
          })}
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
      <div className="px-4 w-full  ">
        <div className="font-title text-[16px] text-white mb-2">最近搜索</div>
        <div className="w-full text-[15px] flex flex-row  bg-black items-center justify-start gap-x-3">
          {searchHistory.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(item)}
                className="bg-neutral-300 rounded-full px-3 py-[0.5px]"
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="px-4 w-full pt-8 ">
        <div className="font-title text-[16px] text-white mb-2">
          近期企划宣传
        </div>
        <div className="w-full text-[15px] flex flex-col  bg-black items-center justify-start gap-y-5">
          {project.map((item, index) => {
            return (
              <div
                key={`project${index}`}
                onClick={() => {}}
                className="bg-neutral-300  rounded-2xl w-full px-3"
              >
                <div className="flex flex-row items-center gap-x-2 font-title py-2">
                  <Image
                    width={25}
                    height={25}
                    alt=""
                    src={item.userIcon}
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
                          src={item.cover}
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
      </div>
      <div className="w-full h-full"></div>
    </div>
  );
};
