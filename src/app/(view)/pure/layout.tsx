"use client";

import Nav from "@/components/navBottom";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full ">
      <div className="mb-[48px]">{children}</div>
      <Nav color=" to-pure "></Nav>
    </div>
  );
}