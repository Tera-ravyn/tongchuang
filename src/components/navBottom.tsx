"use cliet";
import { TabBar } from "antd-mobile";
import { usePathname, useRouter } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { MdBook } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import Image from "next/image";
import Home from "@/assets/icons/home.svg";
import HomeOutline from "@/assets/icons/home-outline.svg";
import Chat from "@/assets/icons/sofa.svg";
import ChatOutline from "@/assets/icons/sofa-outline.svg";
import Paint from "@/assets/icons/paint.svg";
import PaintOutline from "@/assets/icons/paint-outline.svg";
import Subscribe from "@/assets/icons/subscribe.svg";
import SubscribeOutline from "@/assets/icons/subscribe-outline.svg";
import Pay from "@/assets/icons/pay.svg";
import PayOutline from "@/assets/icons/pay-outline.svg";
import { useRecoilState } from "recoil";
import { mode } from "@/app/interface";
import { useEffect } from "react";
import { useMount } from "ahooks";

const Nav = ({ color, textColor }: { color: string; textColor: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [type, setType] = useRecoilState(mode);

  const setRouteActive = (value: string) => {
    router.push(value);
  };
  const tabs = [
    {
      key: `/${type}`,
      title: "个人首页",
      icon:
        pathname.split("/").length === 2 ? (
          <Home className={`w-6 h-6 ${textColor}`} />
        ) : (
          <HomeOutline className={`w-6 h-6 ${textColor}`} />
        ),
    },
    {
      key: `/${type}/chat`,
      title: "版聊",
      icon: pathname.includes(`chat`) ? (
        <Chat className={`w-6 h-6 ${textColor}`} />
      ) : (
        <ChatOutline className={`w-6 h-6 ${textColor}`} />
      ),
    },
    {
      key: `/${type}/discovery`,
      title: "发现",
      icon: pathname.includes(`discovery`) ? (
        <Paint className={`w-6 h-6 ${textColor}`} />
      ) : (
        <PaintOutline className={`w-6 h-6 ${textColor}`} />
      ),
    },
    {
      key: `/${type}/subscribe`,
      title: "订阅用户",
      icon: pathname.includes(`subscribe`) ? (
        <Subscribe className={`w-6 h-6 ${textColor}`} />
      ) : (
        <SubscribeOutline className={`w-6 h-6 ${textColor}`} />
      ),
    },
    {
      key: `/${type}/payFunc`,
      title: "付费功能",
      icon: pathname.includes(`payFunc`) ? (
        <Pay className={`w-6 h-6 ${textColor}`} />
      ) : (
        <PayOutline className={`w-6 h-6 ${textColor}`} />
      ),
    },
  ];
  useMount(() => {
    const cur = pathname.split("/")[1];
    if (cur !== type) setType(cur);
  });

  return (
    <div
      className={`bg-gradient-to-r ${color} fixed bottom-0 w-full`}
      style={{ boxShadow: " 0px -6px 20px rgba(0, 0, 0, 0.3)" }}
    >
      <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
        {tabs.map((item) => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            // title={item.title}
            className=" text-lg"
          />
        ))}
      </TabBar>
    </div>
  );
};

export default Nav;
