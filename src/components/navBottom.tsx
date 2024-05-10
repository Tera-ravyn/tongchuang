"use cliet";
import { TabBar } from "antd-mobile";
import { usePathname, useRouter } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { MdBook } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import Image from "next/image";
import Home from "@/assets/icons/home.svg";
import Favorite from "@/assets/icons/favorite.svg";

const Nav = ({ color }: { color: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const setRouteActive = (value: string) => {
    router.push(value);
  };
  const tabs = [
    {
      key: "/home/homePage",
      // title: "首页",
      icon: <Home className="w-6 h-6" />,
    },
    {
      key: "/studyCenter",
      // title: "学习中心",
      icon: <Favorite className="w-6 h-6" />,
    },
    {
      key: "/myPage",
      // title: "我的",
      icon: <IoPersonSharp />,
    },
  ];

  return (
    <div
      className={`bg-gradient-to-r from-white ${color} fixed bottom-0 w-full`}
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
