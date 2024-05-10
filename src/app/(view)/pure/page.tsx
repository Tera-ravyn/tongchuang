"use client";

import { Badge, Swiper, SwiperRef, Tabs } from "antd-mobile";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const Page = () => {
  const [searchText, setSearchText] = useState("");
  const timer = useRef<NodeJS.Timeout | null>(null);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(async () => {
      setSearchText(event.target.value);
    }, 500);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const tabItems = [
    { title: "0", key: "0" },
    { title: "1", key: "1" },
  ];
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <>
      <div className=" w-full bg-gray-back">
        <div className="w-full bg-white">
          <div className="w-full p-4">
            <div className="rounded-md bg-gray-back flex flex-row items-center px-2 h-[30px]">
              <span className="h-[20px] w-[20px]">
                {/* <Image src={Search} alt="搜索" /> */}
              </span>
              <input
                className="bg-transparent border-none text-[14px]"
                placeholder="输入关键字"
                onChange={(e) => handleSearch(e)}
              />
            </div>
          </div>
        </div>
        <div className=" sticky top-0 z-10">
          <Tabs
            style={{ "--content-padding": "0px 4px" }}
            activeKey={String(activeIndex)}
            onChange={(key) => {
              setActiveIndex(Number(key));
              swiperRef.current?.swipeTo(Number(key));
            }}
          >
            {tabItems.map((item, index) => (
              <Tabs.Tab
                // title={
                //   badge !== 0 && index == 0 ? (
                //     <Badge
                //       content={badge}
                //       style={{ "--right": "-10px", "--top": "8px" }}
                //     >
                //       {item.title}
                //     </Badge>
                //   ) : (
                //     <>{item.title}</>
                //   )
                // }
                title={item.title}
                key={item.key}
                className="bg-white "
              />
            ))}
          </Tabs>
        </div>
        {/* <tabContext.Provider value={{ tabTitle: tabTitle, type: type }}>
          <modifiedContext.Provider
            value={{ state: modified, setState: setModified }}
          >
            <div className="pt-4">
              <Swiper
                style={{ height: "calc(100vh - 184px)" }}
                direction="horizontal"
                indicator={() => null}
                ref={swiperRef}
                defaultIndex={activeIndex}
                onIndexChange={(index) => {
                  setActiveIndex(index);
                }}
              >
                <Swiper.Item className="px-4">
                  <CustomCapsuleTabs
                    status={0}
                    type={type}
                    searchText={searchText}
                  ></CustomCapsuleTabs>
                </Swiper.Item>
                <Swiper.Item className="px-4">
                  <CustomCapsuleTabs
                    status={1}
                    type={type}
                    searchText={searchText}
                  ></CustomCapsuleTabs>
                </Swiper.Item>
              </Swiper>
            </div>
          </modifiedContext.Provider>
        </tabContext.Provider> */}
      </div>
    </>
  );
};
export default Page;
