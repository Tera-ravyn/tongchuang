"use client";

import { view } from "@/app/interface";
import Nav from "@/components/navBottom";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [largeImg, setLargeImg] = useRecoilState(view);
  useEffect(() => {
    const div = document.getElementById("viewLargeImg");
    if (largeImg) {
      if (div) div.style.zIndex = "1111";
    } else
      setTimeout(() => {
        if (div) div.style.zIndex = "-1";
      }, 500); // 300ms = 0.3s
  }, [largeImg]);
  return (
    <div className="w-full h-full bg-bblack overflow-y-hidden ">
      <div className="w-full h-full pb-[48px] overflow-y-hidden">
        {children}
      </div>
      {/* {largeImg !== "" && ( */}
      <div
        id="viewLargeImg"
        className={`w-full h-full z-[-1] fixed top-0  transition-all duration-1000 ease-in-out ${
          largeImg !== "" ? " bg-[rgba(0,0,0,0.85)] " : " "
        }`}
        onClick={() => {
          setLargeImg("");
        }}
      >
        {largeImg !== "" && (
          <Image
            src={largeImg}
            alt=""
            style={{ objectFit: "contain" }}
            fill={true}
          />
        )}
      </div>
      {/* )} */}
      <Nav
        color=" from-black to-[rgba(169,78,78)] "
        textColor=" text-white "
      ></Nav>
    </div>
  );
}
