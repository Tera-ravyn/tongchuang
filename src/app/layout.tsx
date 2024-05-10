// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
// app/layout.tsx
"use client";
import { Viewport } from "next";
import "./mobile.css";
import { ConfigProvider } from "antd-mobile";
import zhCN_m from "antd-mobile/es/locales/zh-CN";
import { RecoilRoot } from "recoil";

export const viewport: Viewport = {
  width: "width=device-width",
  initialScale: undefined,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider locale={zhCN_m}>
          <RecoilRoot>
            {/* <div className=" w-full h-screen flex flex-col bg-white"> */}
            {children}
            {/* <div className=" w-full flex-1 overflow-y-auto"></div> */}
            {/* </div> */}
          </RecoilRoot>
        </ConfigProvider>
      </body>
    </html>
  );
}
