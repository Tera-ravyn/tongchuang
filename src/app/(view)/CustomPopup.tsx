"use client";

import { NavBar, Popup } from "antd-mobile";
import Back from "@/assets/icons/back.svg";
import { useState, createContext } from "react";
import { useRecoilValue } from "recoil";
import { mode } from "../interface";

export const panelContext = createContext<panelState | null>(null);
export interface panelState {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactElement;
  destroyOnClose?: boolean;
}
interface backArrow {
  className?: string;
  fontSize?: number;
  color?: string;
  forbidden?: boolean;
}
interface style {
  title?: string;
  background?: string;
  navBg?: string;
  type: string;
  noShadow?: boolean;
  right?: React.ReactElement;
}
/**
 * @param state 弹窗是否可见
 * @param setState 控制弹窗可见的setState函数
 * @param navBg 标题背景颜色，接受tailwind样式标签，默认为渐变蓝
 * @param title 标题
 * @param color 标题与返回按钮颜色
 * @param background 弹窗背景颜色，接受antd主题颜色和rgba、hex字符串
 * @param forbidden 禁止弹窗的返回按钮
 * @param destroyOnClose 关闭弹窗后销毁dom
 * @returns
 */
export const CustomPopup = ({
  title,
  type,
  state,
  setState,
  children,
  noShadow = false,
  className = "my-5 mx-4",
  fontSize = 24,
  forbidden = false,
  destroyOnClose = true,
  right,
}: panelState & backArrow & style) => {
  return (
    <Popup
      destroyOnClose={destroyOnClose}
      position="right"
      visible={state}
      bodyStyle={{
        width: "100vw",
        background: type === "pure" ? "#D4D4D4" : "#303030",
        overflowY: "scroll",
      }}
    >
      <div className={" h-[48px] z-30 sticky top-0 align-center"}>
        <NavBar
          right={right}
          style={{
            background: noShadow === (type === "pure") ? "#D4D4D4" : "#303030",
            color: noShadow === (type === "pure") ? "black" : "white",
            width: "100%",
            height: "100%",
            borderRadius: "0 0 1rem 1rem",
            fontFamily: "阿里妈妈数黑体 Bold",
            boxShadow: noShadow
              ? ""
              : "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          }}
          onBack={() => setState(false || forbidden)}
          backArrow={
            <Back
              className={`w-10 h-10 z-[3] cursor-pointer  
             
              `}
              style={{
                color: noShadow === (type === "pure") ? "black" : "white",
              }}
              onClick={() => setState(false)}
            />
          }
        >
          {title}
        </NavBar>
      </div>
      {/* <Back
        className={className}
        fontSize={fontSize}
        color={type === "pure" ? "black" : "white"}
        onClick={() => setState(false)}
        style={{ zIndex: 3, cursor: "pointer", position: "absolute" }}
      /> */}

      <panelContext.Provider value={{ state: state, setState: setState }}>
        {children}
      </panelContext.Provider>
    </Popup>
  );
};
