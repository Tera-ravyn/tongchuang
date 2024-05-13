"use client";

import "../compatible.css";
import {
  Collapse,
  ImageUploader,
  InfiniteScroll,
  Modal,
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
import test1 from "@/assets/Image/test1.jpg";
import test2 from "@/assets/Image/test2.jpeg";
import dayjs, { Dayjs } from "dayjs";
import { collection, piece, view } from "@/app/interface";
import { CustomPopup } from "../../CustomPopup";
import Ufo from "@/assets/icons/ufo.svg";
import More from "@/assets/icons/more.svg";
import Down from "@/assets/icons/down.svg";
import Hide from "@/assets/icons/hide.svg";
import { history } from "../staticData";
import { useRecoilState } from "recoil";

export const Info = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [height, setHeight] = useState(true);
  const [selected, setSelected] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [panel, setPanel] = useState(false);
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
      <CustomPopup state={panel} setState={setPanel}>
        <TagManage />
      </CustomPopup>
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
                  <div
                    className="w-full relative"
                    onClick={() => {
                      setPanel(true);
                    }}
                  >
                    <div className=" right-0 h-10 w-10 top-0 bg-gradient-to-r from-transparent to-neutral-200 absolute "></div>
                    <div className=" left-full h-10 w-10 top-0 bg-neutral-200 absolute "></div>
                    <div className="w-full overflow-x-scroll">
                      <div className=" p-2 flex flex-row text-black  gap-x-4  w-[120%] ">
                        <button className="rounded-full shadow-lg outline outline-black outline-1 ">
                          <div className="mx-3 blackspace-nowarp">吃谎的人</div>
                        </button>
                        <button className="rounded-full  shadow-lg outline outline-black outline-1">
                          <div className="mx-3 blackspace-nowarp">
                            深水之窗3
                          </div>
                        </button>
                        <button className="rounded-full  shadow-lg outline outline-black outline-1">
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
        <div className=" text-white w-full pt-4 flex justify-center">
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
          <Swiper.Item className=" w-full ">
            <Series />
          </Swiper.Item>
          <Swiper.Item className=" w-full ">
            <Sponsor />
          </Swiper.Item>
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
      cover: avatar,
      description: "不要再打游戏了好吗？好的。但打游戏是一种人生态度……",
      time: dayjs("2024-04-13 21:29:10"),
    },
    {
      cover: test,
      description: "我爱吃饭，饭真好吃，真想一辈子吃饭。",
      time: dayjs("2024-04-13 19:55:24"),
    },
    {
      cover: avatar,
      description: "从前有座山，山里有座庙，庙里有个老和尚给小和尚讲故事",
      time: dayjs("2024-02-18 00:03:35"),
    },
    {
      cover: avatar,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem in consequuntur similique dignissimos quaerat earum explicabo temporibus vitae nobis culpa enim, eaque ab voluptate quis aspernatur quod alias architecto? Incidunt!",
      time: dayjs("2024-01-17 12:26:11"),
    },
  ];
  return (
    <div className="w-full flex flex-col justify-between items-center gap-y-6">
      {PiecesList.map((item, index) => (
        <PieceItem item={item} key={`pieces${index}`} />
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
const PieceItem = ({ item }: { item: piece }) => {
  return (
    <div className="bg-neutral-200 w-full rounded-2xl px-8  py-3 flex flex-col items-center">
      {/* <div className="w-[90%]"> */}
      <Image
        src={item.cover}
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
            {item.time.year()}
          </div>
          <div className="w-[85px] h-[65px] bg-neutral-300 rounded-2xl absolute right-0 bottom-0">
            <div className="flex flex-col text-[20px] font-bold text-neutral-600 items-end px-1 justify-center h-full ">
              <div>
                <div className="">{`${item.time.format(
                  "MM"
                )}/${item.time.format("DD")}`}</div>
                <div style={{ marginTop: "-10px" }}>{`${item.time.format(
                  "HH"
                )}:${item.time.format("ss")}`}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-1 py-4 grid grid-rows-[1fr_10px] gap-y-4">
          {item.description}
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
const Series = () => {
  const series = [
    {
      cover: test1,
      title: "外币巴伯",
      type: "pure",
      tag: "外壁吧薄",
      tags: ["歪比巴伯", "崴笔吧泊"],
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse assumenda architecto quaerat optio perferendis dolore temporibus minima voluptate? Doloribus corrupti saepe repellat deleniti ullam assumenda voluptatibus delectus debitis ad!",
    },
    {
      cover: test2,
      title: "外币巴伯",
      type: "compatible",
      tag: "外壁吧薄",
      tags: ["歪比巴伯", "崴笔吧泊"],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ad molestias libero, amet facere quasi? Vel earum quas, facere reprehenderit inventore nesciunt maiores quod dolorum architecto praesentium, quidem laudantium suscipit.",
    },
  ];
  return (
    <div className="flex flex-col gap-y-6 px-4">
      {series.map((item, index) => (
        <SeriesItem item={item} key={`collection${index}`}></SeriesItem>
      ))}
    </div>
  );
};
const SeriesItem = ({ item }: { item: collection }) => {
  return (
    <div className="w-full bg-neutral-200 rounded-2xl ">
      <div className="cursor-pointer grid grid-cols-[110px_1fr] gap-x-4 m-4 p-2 rounded-md items-center">
        <div className="overflow-hidden relative w-[110px] h-[110px]  ">
          <Image
            style={{ objectFit: "cover" }}
            src={item.cover}
            // width={97}
            // height={97}
            fill={true}
            sizes="100vw"
            alt=""
          />
        </div>
        <div className="flex flex-col max-h-[110px] gap-y-2">
          <div className="text-[15px] font-title drop-shadow-lg text-[20px]">
            {item.title}
          </div>
          <div className="flex flex-row gap-x-4 items-center">
            <button className="outline outline-1 rounded-full px-3 outline-black shadow-lg">
              {item.tag}
            </button>
            <div
              className={`w-4 h-4 rounded-full ${
                item.type === "pure" ? " bg-pure " : " bg-compatible "
              }`}
            ></div>
          </div>
          <div className=" flex flex-row text-black gap-x-2 text-[12px]">
            {item.tags.map((_, i) => (
              <button
                className="rounded-full px-3 shadow-lg outline outline-black outline-1"
                key={`tags${_}${i}`}
              >
                {_}
              </button>
            ))}
          </div>
          <p className="line-clamp-4 text-gray-front">{item.description}</p>
        </div>
      </div>
    </div>
  );
};
const upload = async (file: File) => {
  return {
    url: "",
  };
};
//赞助点图
const Sponsor = () => {
  const [largeImg, setLargeImg] = useRecoilState(view);
  return (
    <div className="px-4">
      <div className="w-full bg-neutral-200 rounded-2xl py-4 flex flex-col gap-y-4">
        <div className=" flex flex-row px-6 ">
          向&nbsp;
          <div className="font-title drop-shadow-lg ">我要吃饭</div>
          &nbsp;发出赞助点图请求：
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <Ufo className="text-black w-10 h-10 pl-1" />
          <div className="flex flex-row w-[64px] px-2 py-1 bg-neutral-300 rounded-md">
            <input
              className="bg-transparent w-full"
              type="number"
              placeholder="---"
            ></input>
            <b>￥</b>
          </div>
          <div className="w-[75%] px-2 py-1 bg-neutral-300 rounded-md">
            <textarea
              className="bg-transparent w-full h-[6rem] resize-none"
              placeholder="在这里写下自己的需求吧"
            ></textarea>
          </div>
          <button className="bg-[#323232] rounded-md text-white px-7 py-1 font-title text-[16px]">
            确定
          </button>
        </div>
      </div>
      <div className="w-full h-[2px] bg-gray my-4"></div>
      <div className="flex flex-wrap justify-between">
        {history.map((item, index) => (
          <div
            className="overflow-hidden relative w-[120px] h-[120px]  "
            key={item + index}
          >
            <Image
              onClick={() => {
                setLargeImg(item);
              }}
              style={{ objectFit: "cover" }}
              src={item}
              fill={true}
              // sizes="100vw"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="w-full h-[2px] bg-gray my-4"></div>
      <div className="w-full text-center">
        <u
          className="text-white"
          onClick={() =>
            Modal.show({
              content: "我也不知道捏……",
              closeOnMaskClick: true,
              actions: [],
            })
          }
        >
          什么是赞助点图？赞助点图与普通点图和约稿的区别？
        </u>
      </div>
    </div>
  );
};

const TagManage = () => {
  const subList = [
    { ip: "IP名称", tags: ["tag1", "tag2", "tag3", "tag4", "tag5"] },
    { ip: "IP名称", tags: ["tag1", "tag2", "tag3", "tag4", "tag5"] },
  ];
  const blockList = [
    { ip: "IP名称", tags: ["tag1", "tag2", "tag3", "tag4", "tag5"] },
    { ip: "IP名称", tags: ["tag1", "tag2", "tag3", "tag4", "tag5"] },
  ];
  return (
    <div className="bg-black">
      <Collapse defaultActiveKey={["1"]} style={{ padding: "4px 16px" }}>
        <Collapse.Panel
          key="1"
          arrow={<Down className="w-8 h-8 text-white" />}
          title={
            <div className="text-[20px] font-title py-2 pl-1">订阅列表</div>
          }
          className="bg-black"
        >
          {subList.map((item, index) => (
            <Collapse key={`subscribe${index}`} defaultActiveKey={["0"]}>
              <Collapse.Panel
                key={String(index)}
                arrow={(active) =>
                  active ? (
                    <More className="w-8 h-8 text-white" />
                  ) : (
                    <Hide className="w-8 h-8 text-white" />
                  )
                }
                title={
                  <div className="py-3 pl-1">
                    <button className="text-[16px] font-title px-6 py-[0.5px] rounded-full outline outline-2 outline-white">
                      {item.ip}
                    </button>
                  </div>
                }
              >
                <div className="flex flex-wrap gap-4 px-6 py-3">
                  {item.tags.map((tag, index) => (
                    <button
                      key={`subscribeTag${index}`}
                      className="text-[16px]  px-6 py-[0.5px] rounded-full outline outline-1 outline-white"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </Collapse.Panel>
            </Collapse>
          ))}
        </Collapse.Panel>
        <Collapse.Panel
          key="2"
          arrow={<Down className="w-8 h-8 text-white" />}
          title={
            <div className="text-[20px] font-title py-2 pl-1">屏蔽列表</div>
          }
          style={{ background: "black", color: "white" }}
        >
          {blockList.map((item, index) => (
            <Collapse key={`subscribe${index}`} defaultActiveKey={["0"]}>
              <Collapse.Panel
                key={String(index)}
                arrow={(active) =>
                  active ? (
                    <More className="w-8 h-8 text-white" />
                  ) : (
                    <Hide className="w-8 h-8 text-white" />
                  )
                }
                title={
                  <div className="py-3 pl-2">
                    <button className="text-[16px] font-title px-6 py-[0.5px] rounded-full outline outline-2 outline-white">
                      {item.ip}
                    </button>
                  </div>
                }
              >
                <div className="flex flex-wrap gap-4 px-6 py-3">
                  {item.tags.map((tag, index) => (
                    <button
                      key={`subscribeTag${index}`}
                      className="text-[16px]  px-6 py-[0.5px] rounded-full outline outline-1 outline-white"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </Collapse.Panel>
            </Collapse>
          ))}
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};
