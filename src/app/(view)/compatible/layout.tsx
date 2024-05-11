"use client";

import Nav from "@/components/navBottom";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full  bg-black ">
      <div className="mb-[48px]">{children}</div>
      <Nav
        color=" from-black to-[rgba(169,78,78)] "
        textColor=" text-white "
      ></Nav>
    </div>
  );
}
