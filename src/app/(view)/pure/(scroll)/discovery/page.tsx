"use client";
import Search from "@/assets/icons/search.svg";
import Clipboard from "@/assets/icons/clipboard.svg";
import { Popup, SpinLoading } from "antd-mobile";
import { useEffect, useState } from "react";
import { discovery } from "../../staticData";
import Image from "next/image";
import { Detail, Post, SearchPage } from "./components";
import { useRecoilState } from "recoil";
import { pieceType, view } from "@/app/interface";
import { useMount } from "ahooks";
import { CustomPopup } from "@/app/(view)/CustomPopup";

const Discovery = () => {
  const [refresh, setRefresh] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [post, setPost] = useState(false);
  const [panel, setPanel] = useState(false);
  const [detail, setDetail] = useState<pieceType>();
  const [data, setData] = useState<any[]>([]);

  const handleRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 5000);
  };
  useMount(() => {
    setData([discovery]);
  });
  return (
    <div className="">
      <CustomPopup
        state={panel}
        setState={setPanel}
        title={detail?.class !== "project" ? "作品详情" : "企划详情"}
        type="pure"
      >
        {detail && <Detail item={detail} />}
      </CustomPopup>
      <CustomPopup
        right={
          <button className="rounded-lg bg-neutral-700 px-4 text-black ">
            发送
          </button>
        }
        state={post}
        setState={setPost}
        title={"发布作品"}
        type="pure"
      >
        <Post />
      </CustomPopup>
      <div className="w-full sticky top-0 z-[100] ">
        <div
          className={`z-[100] py-6 px-10 flex flex-row transition-all duration-300 ease-in-out justify-between w-full bg-neutral-200 rounded-b-2xl shadow-lg gap-x-3 ${
            open ? " items-stretch " : " items-center "
          }`}
        >
          <button
            onClick={() => setOpen(false)}
            className={`transition-all duration-300 ease-in-out rounded-md  text-black whitespace-nowrap ${
              open ? " px-4 bg-white " : " bg-transparent "
            }`}
          >
            {open ? (
              <div className=" py-1 ">取消</div>
            ) : (
              <Clipboard
                className="text-black"
                onClick={() => {
                  setPost(true);
                }}
              />
            )}
          </button>
          <div
            className="transition-all duration-300 ease-in-out text-[15px] px-4 py-1 flex flex-row items-center w-full justify-between bg-gray rounded-md"
            style={{ boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.2)" }}
          >
            <input
              className="w-full bg-transparent"
              onClick={() => setOpen(true)}
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
      </div>
      <div className="relative">
        <div
          className={`w-full grid absolute top-0 transition-all duration-500 ease-in-out z-[] ${
            open ? " grid-rows-[1fr]" : " grid-rows-[0fr]"
          }`}
        >
          <div className="flex flex-col min-h-0 overflow-hidden ">
            <SearchPage
              value={value}
              setValue={setValue}
              setDetail={setDetail}
              setState={setPanel}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 w-full gap-4 absolute top-0 p-4">
          {(data[0] as typeof discovery)?.map((item, index) => (
            <div
              className="overflow-hidden relative w-full pb-[100%]  "
              key={"item" + index}
              onClick={() => {
                setDetail(item);
                setPanel(true);
              }}
            >
              {item.cover === "" ? (
                <div className="absolute top-0 left-0 w-full h-full bg-neutral-300 px-4 py-1.5 text-black">
                  <div className="font-title text-[18px]">{item.title}</div>
                  <div
                    className="text-[14px] "
                    dangerouslySetInnerHTML={{ __html: item.context }}
                  ></div>
                </div>
              ) : (
                <Image
                  // onClick={() => {
                  //   setLargeImg(item.cover);
                  // }}
                  style={{ objectFit: "cover" }}
                  src={"https://image.baidu.com/search/down?url=" + item.cover}
                  fill={true}
                  alt=""
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Discovery;
