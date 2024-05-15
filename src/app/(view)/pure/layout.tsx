"use client";

import { view } from "@/app/interface";
import Nav from "@/components/navBottom";
import Image from "next/image";
import { useRecoilState } from "recoil";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [largeImg, setLargeImg] = useRecoilState(view);
  return (
    <div className="w-full h-full bg-white overflow-y-hidden ">
      <div className="w-full h-full pb-[48px] overflow-y-hidden">
        {children}
      </div>
      {largeImg !== "" && (
        <div
          className="w-full h-full bg-[rgba(0,0,0,0.85)] fixed top-0 z-[200]"
          onClick={() => {
            setLargeImg("");
          }}
        >
          <Image
            src={largeImg}
            alt=""
            style={{ objectFit: "contain" }}
            fill={true}
          />
        </div>
      )}
      <Nav color=" from-white  to-pure " textColor=" text-black "></Nav>
    </div>
  );
}
