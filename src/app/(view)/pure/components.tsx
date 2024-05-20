"use client";

import "./pure.css";
import {
  Collapse,
  InfiniteScroll,
  Modal,
  SpinLoading,
  Swiper,
  SwiperRef,
  Toast,
} from "antd-mobile";
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
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
import { pieceType, collection, view } from "@/app/interface";
import Ufo from "@/assets/icons/ufo.svg";
import More from "@/assets/icons/more.svg";
import Down from "@/assets/icons/down.svg";
import Hide from "@/assets/icons/hide.svg";
import { PiecesList, blockList, history, series, subList } from "./staticData";
import { useRecoilState } from "recoil";
import { CustomPopup } from "../CustomPopup";
import { useRouter } from "next/navigation";
import { useMount } from "ahooks";
const dataContext = createContext<any[]>([]);
export const Info = () => {
  const router = useRouter();
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const swiperRef = useRef<SwiperRef>(null);
  const piecesRef = useRef<any>(null);
  const seriesRef = useRef<any>(null);
  const sponsorRef = useRef<any>(null);
  const scroll = useRef([0, 0, 0]);
  const [height, setHeight] = useState(true);
  const [selected, setSelected] = useState(0);
  const [panel, setPanel] = useState(false);
  const curHeight = useRef(true);
  const handleRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 3000);
  };
  const handleScroll = () => {
    const pieces = piecesRef.current?.scrollTop;
    const series = seriesRef.current?.scrollTop;
    const sponsor = sponsorRef.current?.scrollTop;
    const scrollRef = [pieces, series, sponsor];
    const threshold = 3; // 可以根据需要调整
    const current = scroll.current.findIndex(
      (item, index) => item !== scrollRef[index]
    );
    if (scrollRef[current] && scrollRef[current] > threshold) {
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
  useMount(() => {
    setData([PiecesList, series, history, blockList, subList]);
  });
  return (
    <div className="relative w-full h-full">
      <dataContext.Provider value={data}>
        <CustomPopup
          state={panel}
          setState={setPanel}
          type="pure"
          title="标签管理"
          noShadow
        >
          <TagManage />
        </CustomPopup>
        <div className="w-full sticky top-0 z-[100] ">
          <div
            onClick={() => {
              setHeight(true);
            }}
            className={`m-auto flex flex-col items-center justify-evenly w-full bg-bblack rounded-b-2xl shadow-lg transition-all ease-in-out duration-300 ${
              height ? "h-[212px]" : "h-[83px]"
            }`}
          >
            <div className="w-full px-4 flex justify-between items-center text-white ">
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
                      className={`flex gap-2 items-center ${
                        height ? "text-white" : "text-gray"
                      }`}
                    >
                      狗尾巴草
                      {height && (
                        <div
                          onClick={() => router.push("modeSelect")}
                          className="rounded-full bg-pure w-3 h-3"
                        ></div>
                      )}
                    </div>
                    <Refresh
                      className="text-white"
                      onClick={() => handleRefresh()}
                    />
                  </div>
                  {height && (
                    <div
                      className="w-full relative"
                      onClick={() => {
                        setPanel(true);
                      }}
                    >
                      <div className=" right-0 h-10 w-10 top-0 bg-gradient-to-r from-transparent to-black absolute "></div>
                      <div className=" left-full h-10 w-10 top-0 bg-bblack absolute "></div>
                      <div className="w-full overflow-x-scroll">
                        <div className=" p-2 flex flex-row text-white  gap-x-4  w-auto w-[160%]">
                          <button className="rounded-full outline outline-white outline-1 whitespace-nowarp">
                            <div className="mx-3 whitespace-nowarp">
                              吃谎的人
                            </div>
                          </button>
                          <button className="rounded-full outline outline-white outline-1">
                            <div className="mx-3 whitespace-nowarp">
                              我有超能力
                            </div>
                          </button>
                          <button className="rounded-full outline outline-white outline-1">
                            <div className="mx-3 whitespace-nowarp">
                              纷争前线
                            </div>
                          </button>
                        </div>
                      </div>
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

          <div className="relative bg-white py-3 px-5 text-[16px] w-full transition-all ease-in-out duration-300 sticky top-0 h-[52px] shadow-md shadow-b flex flex-row justify-between">
            <div
              className="absolute bg-[#323232]  rounded-xl z-[-1] transition-all ease-in-out duration-300"
              id="indicator"
            ></div>
            <button
              onClick={() => {
                setSelected(0);
                swiperRef.current?.swipeTo(0);
              }}
              name="tabbar"
              className={`rounded-xl px-4 font-title transition-all ease-in-out duration-300 bg-[#323232]${
                selected === 0 ? " text-white" : " text-darkgray"
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
                selected === 1 ? " text-white" : " text-darkgray"
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
                selected === 2 ? " text-white" : " text-darkgray"
              }`}
            >
              赞助点图
            </button>
          </div>
        </div>
        {refresh && (
          <div className=" text-black w-full pt-4 flex justify-center">
            <SpinLoading
              color="white"
              style={{ "--size": "64px", margin: "auto", "--color": "black" }}
            />
          </div>
        )}
        <div className="pt-4 w-full h-full">
          <Swiper
            indicator={() => null}
            ref={swiperRef}
            defaultIndex={selected}
            onIndexChange={(index) => {
              setSelected(index);
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <Swiper.Item className=" w-full h-full">
              <Pieces ref={piecesRef} />
            </Swiper.Item>
            <Swiper.Item className=" w-full h-full">
              <Series ref={seriesRef} />
            </Swiper.Item>
            <Swiper.Item className=" w-full h-full">
              <Sponsor ref={sponsorRef} />
            </Swiper.Item>
          </Swiper>
        </div>
      </dataContext.Provider>
    </div>
  );
};

//作品合集
const Pieces = forwardRef<HTMLDivElement>((props, ref) => {
  const [hasMore, setHasMore] = useState(true);
  const data = useContext(dataContext);
  return (
    <div
      ref={ref}
      className="w-full h-full overflow-y-auto pb-[169px] flex flex-col justify-between items-center gap-y-6"
    >
      {(data[0] as pieceType[])?.map((item, index) => (
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
});
Pieces.displayName = "Pieces";
const PieceItem = ({ item }: { item: pieceType }) => {
  return (
    <div className="bg-neutral-200 w-full rounded-2xl px-8  py-3 flex flex-col items-center">
      {/* <div className="w-[90%]"> */}
      {item.cover && (
        <Image
          src={"https://image.baidu.com/search/down?url=" + item.cover}
          alt="image"
          // fill={true}
          width={360}
          height={360}
          layout="responsive"
          objectFit="cover"
          style={{
            boxShadow: "0 0 16px rgba(0, 0, 0, 0.15)",
          }}
        />
      )}
      {/* </div> */}
      <div className="grid grid-cols-[105px_1fr] gap-x-4 justify-flex-start w-full ">
        <div className="row-span-1  w-[105px] h-[85px] relative ">
          <div className="text-[26px] font-bold text-neutral-600 absolute left-0 top-0 z-[1]">
            {item.date.year()}
          </div>
          <div className="w-[85px] h-[65px] bg-neutral-300 rounded-2xl absolute right-0 bottom-0">
            <div className="flex flex-col text-[20px] font-bold text-neutral-600 items-end px-1 justify-center h-full ">
              <div>
                <div className="">{`${item.date.format(
                  "MM"
                )}/${item.date.format("DD")}`}</div>
                <div style={{ marginTop: "-10px" }}>{`${item.date.format(
                  "HH"
                )}:${item.date.format("ss")}`}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-1 py-4 grid grid-rows-[1fr_10px] gap-y-4">
          <div dangerouslySetInnerHTML={{ __html: item.context }} />
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
const Series = forwardRef<HTMLDivElement>((props, ref) => {
  const data = useContext(dataContext);
  return (
    <div
      ref={ref}
      className="w-full h-full overflow-y-auto pb-[169px] flex flex-col gap-y-6 px-4"
    >
      {(data[1] as collection[])?.map((item, index) => (
        <SeriesItem item={item} key={`collection${index}`}></SeriesItem>
      ))}
    </div>
  );
});
Series.displayName = "Series";
const SeriesItem = ({ item }: { item: collection }) => {
  return (
    <div className="w-full bg-neutral-200 rounded-2xl ">
      <div className="cursor-pointer grid grid-cols-[110px_1fr] gap-x-4 m-4 p-2 rounded-md items-center">
        <div className="overflow-hidden relative w-[110px] h-[110px]  ">
          <Image
            style={{ objectFit: "cover" }}
            src={"https://image.baidu.com/search/down?url=" + item.cover}
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
              {item.ip}
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
//赞助点图
const Sponsor = forwardRef<HTMLDivElement>((props, ref) => {
  const [largeImg, setLargeImg] = useRecoilState(view);
  const data = useContext(dataContext);
  return (
    <div ref={ref} className="w-full h-full overflow-y-auto pb-[169px] px-4">
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
      <div className="grid grid-cols-3 w-full gap-4 ">
        {(data[2] as typeof history)?.map((item, index) => (
          <div
            className="overflow-hidden relative w-full pb-[100%]  "
            key={item + index}
          >
            <Image
              onClick={() => {
                setLargeImg(item);
              }}
              style={{ objectFit: "cover" }}
              src={"https://image.baidu.com/search/down?url=" + item}
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
          className="text-black"
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
});
Sponsor.displayName = "Sponsor";
const TagManage = () => {
  const data = useContext(dataContext);
  return (
    <div>
      <Collapse defaultActiveKey={["0", "1"]} style={{ padding: "4px 16px" }}>
        <Collapse.Panel
          key="0"
          arrow={<Down className="w-8 h-8 text-black" />}
          title={
            <div className="text-[20px] font-title py-2 pl-1">屏蔽列表</div>
          }
        >
          {(data[3] as typeof blockList)?.map((item, index) => (
            <Collapse key={`subscribe${index}`} defaultActiveKey={["0", "1"]}>
              <Collapse.Panel
                key={String(index)}
                arrow={(active) =>
                  active ? (
                    <More className="w-8 h-8 text-black" />
                  ) : (
                    <Hide className="w-8 h-8 text-black" />
                  )
                }
                title={
                  <div className="py-3 pl-1">
                    <button className="text-[16px] font-title px-6 py-[0.5px] rounded-full outline outline-2 outline-black text-black">
                      {item.ip}
                    </button>
                  </div>
                }
              >
                <div className="flex flex-wrap gap-4 px-6 py-3">
                  {item.tags.map((tag, index) => (
                    <button
                      key={`subscribeTag${index}`}
                      className="text-[16px]  px-6 py-[0.5px] rounded-full outline outline-1 outline-black text-black"
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
          key="1"
          arrow={<Down className="w-8 h-8 text-black" />}
          title={
            <div className="text-[20px] font-title py-2 pl-1">订阅列表</div>
          }
        >
          {(data[4] as typeof subList)?.map((item, index) => (
            <Collapse key={`subscribe${index}`} defaultActiveKey={["0", "1"]}>
              <Collapse.Panel
                key={String(index)}
                arrow={(active) =>
                  active ? (
                    <More className="w-8 h-8 text-black" />
                  ) : (
                    <Hide className="w-8 h-8 text-black" />
                  )
                }
                title={
                  <div className="py-3 pl-2">
                    <button className="text-[16px] font-title px-6 py-[0.5px] rounded-full outline outline-2 outline-black text-black">
                      {item.ip}
                    </button>
                  </div>
                }
              >
                <div className="flex flex-wrap gap-4 px-6 py-3">
                  {item.tags.map((tag, index) => (
                    <button
                      key={`subscribeTag${index}`}
                      className="text-[16px]  px-6 py-[0.5px] rounded-full outline outline-1 outline-black text-black"
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
