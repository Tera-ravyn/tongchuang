"use client";
import More from "@/assets/icons/more.svg";
import Star from "@/assets/icons/star.svg";
import Comment from "@/assets/icons/comment.svg";
import Clipboard from "@/assets/icons/clipboard.svg";
import Pawn from "@/assets/icons/pawn.svg";
import PawnOutline from "@/assets/icons/pawn-outline.svg";
import Crown from "@/assets/icons/crown.svg";
import CrownOutline from "@/assets/icons/crown-outline.svg";
import Favorites from "@/assets/icons/favorites.svg";
import FavoritesOutline from "@/assets/icons/favorites-outline.svg";
import Forward from "@/assets/icons/forward.svg";
import {
  ImageUploadItem,
  ImageUploader,
  SpinLoading,
  Toast,
} from "antd-mobile";
import { ReactElement, useState } from "react";
import { project, searchHistory } from "../../staticData";
import Image from "next/image";
import { pieceType, view } from "@/app/interface";
import { useMount } from "ahooks";
import { useRecoilState } from "recoil";
import { BiArrowToRight, BiRightArrow } from "react-icons/bi";
import { FaCheck, FaChevronRight } from "react-icons/fa";

export const SearchPage = ({
  value,
  setValue,
  setDetail,
  setState,
}: {
  value: string;
  setValue: React.Dispatch<string>;
  setDetail: React.Dispatch<pieceType>;
  setState: React.Dispatch<boolean>;
}) => {
  const [refresh, setRefresh] = useState(false);

  const [data, setData] = useState<any[]>([]);

  const handleRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 5000);
  };
  useMount(() => {
    setData([project]);
  });
  return (
    <div className="z-[100] bg-bblack w-full transition-all duration-300 ease-in-out">
      {refresh && (
        <div className=" text-white w-full pt-4 flex justify-center">
          <SpinLoading
            color="white"
            style={{ "--size": "64px", margin: "auto" }}
          />
        </div>
      )}

      <>
        <div className="p-4">
          <Class />
        </div>
        <div className="px-4 w-full  ">
          <div className="font-title text-[16px] text-white mb-2">最近搜索</div>
          <div className="w-full text-[15px] flex flex-row  bg-bblack items-center justify-start gap-x-3">
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
          <div className="w-full text-[15px] flex flex-col  bg-bblack items-center justify-start gap-y-5">
            {(data[0] as pieceType[])?.map((item, index) => {
              return (
                <div
                  key={`project${index}`}
                  onClick={() => {
                    setDetail(item);
                    setState(true);
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
                          ? "https://image.baidu.com/search/down?url=" +
                            item.userIcon
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
                              "https://image.baidu.com/search/down?url=" +
                              item.cover
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
                  <div className="w-full grid grid-cols-[1fr_60px] items-end py-2 text-[12px]">
                    <div className="flex flex-row gap-x-2 items-end flex-wrap gap-y-2">
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
                    <div className="min-w-[60px]">
                      {item.date.format("YYYY.MM.DD")}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    </div>
  );
};

export const Detail = ({ item }: { item: pieceType }) => {
  const [largeImg, setLargeImg] = useRecoilState(view);
  return (
    <div className=" py-2 text-white flex flex-col">
      <div className="px-4 flex flex-row items-center  py-2 justify-between">
        <div className="flex flex-row items-center gap-x-4">
          <Image
            width={36}
            height={36}
            alt=""
            objectFit="cover"
            src={
              typeof item.userIcon === "string"
                ? "https://image.baidu.com/search/down?url=" + item.userIcon
                : item.userIcon
            }
            className="rounded-full"
          />
          <div className="flex flex-col items-start">
            <div className="text-[16px] font-title ">
              {(item.class === "project" ? "发布者：" : "") + item.user}
            </div>
            <div>{item.date.format("YYYY.MM.DD HH:mm")}</div>
          </div>
        </div>
        <More className="w-8 h-8" />
      </div>
      {(item.cover ?? "") !== "" && (
        <div className="relative w-full pb-2">
          <Image
            onClick={() => setLargeImg(item.cover)}
            src={"https://image.baidu.com/search/down?url=" + item.cover}
            alt={item.title}
            width={1000}
            height={1000}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      )}
      <div className="px-4 flex flex-col gap-y-4 rounded-b-2xl pb-4 shadow-md ">
        <div className="flex flex-col justify-start items-start py-2 gap-y-2 text-[12px]">
          <div className="flex flex-row gap-x-2 items-end">
            <button className="outline outline-1 outline-white rounded-full px-3 text-[14px] ">
              {item.ip}
            </button>
          </div>
          <div className="flex flex-row gap-x-2 items-end">
            {item.tags.map((_, i) => (
              <button
                className=" outline outline-1 outline-white  rounded-full px-3"
                key={`tags${_}${i}`}
              >
                {_}
              </button>
            ))}
          </div>
        </div>

        <div className="text-[18px] font-title">
          {item.title ?? "" !== "" ? item.title : "（无标题）"}
        </div>
        <div dangerouslySetInnerHTML={{ __html: item.context }}></div>
        <div className="flex flex-row gap-x-4 justify-around w-full pt-4">
          <InteractIcon
            normal={<Pawn className="w-8 h-8" />}
            outline={<PawnOutline className="w-8 h-8" />}
            number={item.pawn}
          />

          <InteractIcon
            normal={<Crown className="w-8 h-8" />}
            outline={<CrownOutline className="w-8 h-8" />}
            number={item.crown}
          />

          <InteractIcon
            normal={<Favorites className="w-8 h-8" />}
            outline={<FavoritesOutline className="w-8 h-8" />}
            number={item.fav}
          />
          <div className="flex flex-col gap-y-1 items-center">
            <Forward
              className="w-8 h-8 cursor-pointer"
              onClick={() => {
                Toast.show("转发成功");
              }}
            />
            {item.share}
          </div>
        </div>
      </div>
      <div className="px-4 flex flex-col gap-y-2 pt-4 divide-y-2 divide-darkgray">
        <div className="text-[16px] flex flex-row gap-x-1 items-center">
          {`评论（${item.comments?.length ?? 0}）`}
          <Comment className="w-5 h-5" />
        </div>
        {item.comments?.map((comment, index) => (
          <div key={index}>
            <div className="flex flex-row items-center gap-x-4 py-2">
              <Image
                width={24}
                height={24}
                alt=""
                src={comment.userIcon}
                className="rounded-full"
              />
              <div className="flex flex-col items-start">
                <div className="flex flex-row items-center gap-x-4">
                  <div className="text-[14px] font-title ">{comment.user}</div>
                  <div className="text-[12px]  ">
                    {comment.date.format("YYYY.MM.DD HH:mm")}
                  </div>
                </div>
                {comment.context}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const InteractIcon = ({
  outline,
  normal,
  number,
}: {
  outline: JSX.Element;
  normal: JSX.Element;
  number: number;
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col gap-y-1 items-center">
      <div className=" cursor-pointer" onClick={() => setChecked(!checked)}>
        {checked ? normal : outline}
      </div>
      {number + (checked ? 1 : 0)}
    </div>
  );
};

export const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));
export const demoSrc =
  "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60";

export async function mockUpload(file: File) {
  await sleep(3000);
  return {
    url: URL.createObjectURL(file),
  };
}

export async function mockUploadFail() {
  await sleep(3000);
  throw new Error("Fail to upload");
}

export const Post = () => {
  const [fileList, setFileList] = useState<ImageUploadItem[]>([
    {
      url: demoSrc,
    },
  ]);
  const [select, setSelect] = useState(0);
  return (
    <div className="flex flex-col items-start px-4 py-2 gap-y-2 text-white">
      <SubPost title="可见范围">
        <div className="flex flex-row justify-around w-full">
          <div
            className="flex flex-row items-end gap-x-2"
            onClick={() => setSelect(0)}
          >
            <div className="w-12 h-12 border-[1px] rounded-full border-white bg-pure"></div>
            <div className="w-4 h-4 border-[1px] rounded-full border-white bg-white flex items-center">
              {select === 0 && (
                <FaCheck className="text-bblack w-2.5 h-2.5 mx-0.5" />
              )}
            </div>
          </div>
          <div
            className="flex flex-row items-end gap-x-2"
            onClick={() => setSelect(1)}
          >
            <div className="w-12 h-12 border-[1px] rounded-full border-white bg-red-800"></div>
            <div className="w-4 h-4 border-[1px] rounded-full border-white bg-white flex items-center">
              {select === 1 && (
                <FaCheck className="text-bblack w-2.5 h-2.5 mx-0.5" />
              )}
            </div>
          </div>
          <div
            className="flex flex-row items-end gap-x-2"
            onClick={() => setSelect(2)}
          >
            <div className="w-12 h-12 border-[1px] rounded-full border-white bg-gradient-to-r from-pure to-red-800"></div>
            <div className="w-4 h-4 border-[1px] rounded-full border-white bg-white flex items-center">
              {select === 2 && (
                <FaCheck className="text-bblack w-2.5 h-2.5 mx-0.5" />
              )}
            </div>
          </div>
        </div>
      </SubPost>
      <SubPost title="作品类型">
        <Class />
      </SubPost>
      <SubPost title="作品所属ip">
        <div className="flex flex-col gap-y-2 items-start">
          <button className="rounded-md bg-white px-8 py-1">
            <Clipboard className="w-4 h-4 text-black " />
          </button>
          <div>更多相关tag</div>
          <div className="flex flex-row gap-x-4 text-[12px] text-black">
            <div className="rounded-full bg-white px-6 font-bold">...</div>
            <div className="rounded-full bg-white px-6 font-bold ">...</div>
            <div className="rounded-full bg-white px-6 font-bold ">+</div>
          </div>
        </div>
      </SubPost>

      <SubPost title="文章标题">
        <div className="transition-all duration-300 ease-in-out text-[15px] px-4 py-1 flex flex-row items-center w-full justify-between bg-neutral-400 rounded-md">
          <input className="w-full bg-transparent" />
        </div>
      </SubPost>
      <SubPost title="上传附件">
        <ImageUploader
          value={fileList}
          onChange={setFileList}
          upload={mockUpload}
        />
      </SubPost>
      <SubPost title="文章内容">
        <div className="w-full px-2 py-1 bg-neutral-400 rounded-md">
          <textarea className="bg-transparent w-full min-h-[6rem] resize-none text-[15px]"></textarea>
        </div>
      </SubPost>
      <div className="flex flex-row w-full py-2 justify-between items-center font-title text-[18px]">
        加入合集
        <FaChevronRight />
      </div>
    </div>
  );
};

const SubPost = ({
  children,
  title,
}: {
  children?: ReactElement;
  title: string;
}) => {
  return (
    <div className="flex flex-col items-start py-2 gap-y-2 w-full">
      <div className="font-title text-[18px]">{title}</div>
      {children}
    </div>
  );
};
const Class = () => {
  const [active, setActive] = useState(0);
  const classes = ["文章", "插画", "漫画", "DIY", "剪辑"];
  return (
    <div
      className={` w-full  flex flex-row  bg-bblack items-center justify-between`}
    >
      {classes.map((item, index) => {
        return (
          <div key={item}>
            <div
              onClick={() => setActive(index)}
              className={`cursor-pointer  justify-evenly flex flex-row items-center gap-x-2 font-title text-[16px] text-white`}
            >
              <Star
                className={`w-6 h-6 ${
                  active === index
                    ? "text-red-800 stroke-1 stroke-white"
                    : "text-white"
                }`}
              />
              <div
                className={active === index ? "text-red-800 " : "text-white"}
                style={{
                  WebkitTextStroke: active === index ? "0.5px white" : "",
                }}
              >
                {item}
              </div>
              {index !== classes.length - 1 && (
                <div className="w-[2px] h-[25px] bg-darkgray"></div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
