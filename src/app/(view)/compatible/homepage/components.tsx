"use client";

import { useMount } from "ahooks";
import {
  InfiniteScroll,
  SpinLoading,
  Swiper,
  SwiperRef,
  Toast,
} from "antd-mobile";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Refresh from "@/assets/icons/refresh.svg";
import Image, { StaticImageData } from "next/image";
import avatar from "@/assets/Image/avatar.jpg";
import test from "@/assets/Image/test0.jpeg";
import Pawn from "@/assets/icons/pawn.svg";
import PawnOutline from "@/assets/icons/pawn-outline.svg";
import Crown from "@/assets/icons/crown.svg";
import CrownOutline from "@/assets/icons/crown-outline.svg";
import Favorites from "@/assets/icons/favorites.svg";
import FavoritesOutline from "@/assets/icons/favorites-outline.svg";
import Forward from "@/assets/icons/forward.svg";
import dayjs, { Dayjs } from "dayjs";
import { useRouter } from "next/navigation";
import { resolve } from "path";

export const Info = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [height, setHeight] = useState(true);
  const [selected, setSelected] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const curHeight = useRef(true);

  const handleRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 5000);
  };

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
  useEffect(() => {
    const item = document.getElementsByName("tabbar").item(selected);
    const indicator = document.getElementById("indicator");
    const rect = item.getBoundingClientRect();
    if (indicator) {
      item.style.background = "transparent";
      indicator.style.width = `${rect.width}px`;
      indicator.style.height = `${rect.height}px`;
      indicator.style.left = `${item.offsetLeft}px`;
      indicator.style.top = `${item.offsetHeight - rect.height / 2 - 2}px`;
    }
  }, [selected]);

  return (
    <div className="relative">
      <div className="w-full sticky top-0 z-[100] ">
        <div
          onClick={() => {
            setHeight(true);
          }}
          className={`m-auto flex flex-col items-center justify-evenly w-full bg-neutral-200 rounded-b-2xl shadow-lg transition-all ease-in-out duration-300 ${
            height ? "h-[212px]" : "h-[83px]"
          }`}
        >
          <div className="w-full h-full bg-[#390F0F] absolute z-[-1]"></div>
          <div className="w-full px-4 flex justify-between items-center text-black ">
            <div className="flex justify-start items-center gap-x-3 w-full">
              <Image
                width={height ? 80 : 40}
                height={height ? 80 : 40}
                alt=""
                src={avatar}
                className="rounded-full transition-all ease-in-out duration-300"
              />
              <div className="  m-auto w-full  ">
                <div className="font-title  p-2 text-[20px] flex flex-row items-center w-full justify-between">
                  <div
                    className={`flex gap-2 items-center drop-shadow-lg ${
                      height ? " text-black" : " text-neutral-800"
                    }`}
                  >
                    我要吃饭
                    {height && (
                      <div className="rounded-full bg-compatible w-3 h-3"></div>
                    )}
                  </div>
                  <Refresh onClick={() => handleRefresh()} />
                </div>
                {height && (
                  <div className="w-full relative">
                    <div className=" right-0 h-10 w-10 top-0 bg-gradient-to-r from-transparent to-neutral-200 absolute "></div>
                    <div className=" left-full h-10 w-10 top-0 bg-neutral-200 absolute "></div>
                    <div className="w-full overflow-x-scroll">
                      <div className=" p-2 flex flex-row text-black  gap-x-4  w-[120%] ">
                        <button className="rounded-full outline outline-black outline-1 ">
                          <div className="mx-3 blackspace-nowarp">吃谎的人</div>
                        </button>
                        <button className="rounded-full outline outline-black outline-1">
                          <div className="mx-3 blackspace-nowarp">
                            深水之窗3
                          </div>
                        </button>
                        <button className="rounded-full outline outline-black outline-1">
                          <div className="mx-3 blackspace-nowarp">明天的船</div>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {height && (
            <div className="px-12 flex flex-row text-black text-[16px] gap-x-4 font-title w-full justify-around">
              <div>订阅</div>
              <div>好友</div>
              <div>收藏</div>
              <div>推荐</div>
            </div>
          )}
        </div>

        <div className="relative bg-gradient-to-b from-50% to-100% from-[#390F0F] to-black py-3 px-5 text-[16px] w-full transition-all ease-in-out duration-300 sticky  h-[52px] shadow-md shadow-b flex flex-row justify-between">
          <div
            className="absolute bg-neutral-200  rounded-xl z-[-1] transition-all ease-in-out duration-300"
            id="indicator"
          ></div>
          <button
            onClick={() => {
              setSelected(0);
              swiperRef.current?.swipeTo(0);
            }}
            name="tabbar"
            className={`rounded-xl px-4 font-title transition-all ease-in-out duration-300 bg-neutral-200${
              selected === 0 ? " text-black" : " text-neutral-200"
            }`}
          >
            作品列表
          </button>
          <button
            name="tabbar"
            onClick={() => {
              setSelected(1);
              swiperRef.current?.swipeTo(1);
            }}
            className={`rounded-xl px-4 font-title transition-all ease-in-out duration-300 ${
              selected === 1 ? " text-black" : " text-neutral-200"
            }`}
          >
            系列合集
          </button>
          <button
            name="tabbar"
            onClick={() => {
              setSelected(2);
              swiperRef.current?.swipeTo(2);
            }}
            className={`rounded-xl px-4 font-title  transition-all ease-in-out duration-300 ${
              selected === 2 ? " text-black" : " text-neutral-200"
            }`}
          >
            赞助点图
          </button>
        </div>
      </div>
      {refresh && (
        <div className=" text-white w-full pt-16 flex justify-center">
          <SpinLoading
            color="white"
            style={{ "--size": "64px", margin: "auto" }}
          />
        </div>
      )}
      <div className="pt-4">
        <Swiper
          indicator={() => null}
          ref={swiperRef}
          defaultIndex={selected}
          onIndexChange={(index) => {
            setSelected(index);
          }}
        >
          <Swiper.Item className=" w-full ">
            <Pieces />
          </Swiper.Item>
          <Swiper.Item className="h-4">222</Swiper.Item>
          <Swiper.Item className="h-4">333</Swiper.Item>
        </Swiper>
      </div>
    </div>
  );
};
const generateDates = (count: number) => {
  const startDate = dayjs("2024-01-01");
  const endDate = dayjs("2024-5-11");

  const randomDates = [];
  for (let i = 0; i < count; i++) {
    const randomMilliseconds =
      Math.random() * endDate.diff(startDate, "milliseconds");
    const date = startDate.add(randomMilliseconds, "milliseconds");
    randomDates.push(date);
  }
  return randomDates.sort((a, b) => b.diff(a)); // 降序排序，确保从最新到最旧
};

//作品合集
const Pieces = () => {
  const [hasMore, setHasMore] = useState(true);
  const PiecesList = [
    {
      image: avatar,
      introduction: "不要再打游戏了好吗？好的。但打游戏是一种人生态度……",
      time: dayjs("2024-04-13 21:29:10"),
    },
    {
      image: test,
      introduction: "我爱吃饭，饭真好吃，真想一辈子吃饭。",
      time: dayjs("2024-04-13 19:55:24"),
    },
    {
      image: avatar,
      introduction: "从前有座山，山里有座庙，庙里有个老和尚给小和尚讲故事",
      time: dayjs("2024-02-18 00:03:35"),
    },
    {
      image: avatar,
      introduction:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem in consequuntur similique dignissimos quaerat earum explicabo temporibus vitae nobis culpa enim, eaque ab voluptate quis aspernatur quod alias architecto? Incidunt!",
      time: dayjs("2024-01-17 12:26:11"),
    },
  ];
  return (
    <div className="w-full flex flex-col justify-between items-center gap-y-6">
      {PiecesList.map((item, index) => (
        <PieceItem
          image={item.image}
          introduction={item.introduction}
          time={item.time}
          key={`pieces${index}`}
        />
      ))}
      <InfiniteScroll
        hasMore={hasMore}
        loadMore={async () => {
          async function timer(): Promise<boolean> {
            return new Promise((resolve) => {
              setTimeout(() => {
                const result = false;
                resolve(result);
              }, 3000);
            });
          }
          const result = await timer();
          setHasMore(result);
        }}
      />
    </div>
  );
};
const PieceItem = ({
  image,
  introduction,
  time,
}: {
  image: StaticImageData;
  introduction: string;
  time: dayjs.Dayjs;
}) => {
  return (
    <div className="bg-neutral-200 w-full rounded-2xl px-8  py-3 flex flex-col items-center">
      {/* <div className="w-[90%]"> */}
      <Image
        src={image}
        alt="image"
        style={{
          objectFit: "cover",
          maxWidth: "100%",
          boxShadow: "0 0 16px rgba(0, 0, 0, 0.15)",
        }}
      />
      {/* </div> */}
      <div className="grid grid-cols-[105px_1fr] gap-x-4 justify-flex-start w-full ">
        <div className="row-span-1  w-[105px] h-[85px] relative ">
          <div className="text-[26px] font-bold text-neutral-600 absolute left-0 top-0 z-[1]">
            {time.year()}
          </div>
          <div className="w-[85px] h-[65px] bg-neutral-300 rounded-2xl absolute right-0 bottom-0">
            <div className="flex flex-col text-[20px] font-bold text-neutral-600 items-end px-1 justify-center h-full ">
              <div>
                <div className="">{`${time.format("MM")}/${time.format(
                  "DD"
                )}`}</div>
                <div style={{ marginTop: "-10px" }}>{`${time.format(
                  "HH"
                )}:${time.format("ss")}`}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-1 py-4 grid grid-rows-[1fr_10px] gap-y-4">
          {introduction}
          <div className="flex flex-row gap-x-4 justify-around w-full">
            <InteractIcon
              normal={<Pawn className="w-6 h-6" />}
              outline={<PawnOutline className="w-6 h-6" />}
            />
            <InteractIcon
              normal={<Crown className="w-6 h-6" />}
              outline={<CrownOutline className="w-6 h-6" />}
            />
            <InteractIcon
              normal={<Favorites className="w-6 h-6" />}
              outline={<FavoritesOutline className="w-6 h-6" />}
            />
            <Forward
              className="w-6 h-6 cursor-pointer"
              onClick={() => {
                Toast.show("转发成功");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const InteractIcon = ({
  outline,
  normal,
}: {
  outline: JSX.Element;
  normal: JSX.Element;
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className=" cursor-pointer" onClick={() => setChecked(!checked)}>
      {checked ? normal : outline}
    </div>
  );
};
//系列合集
const Series = () => {};
//赞助点图
const Sponsor = () => {};
