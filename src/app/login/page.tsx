"use client";
import { Image, Form, SpinLoading, Toast, Popup } from "antd-mobile";
import { AiFillWechat } from "react-icons/ai";
import { useState } from "react";
import RadioIcon from "@/components/radio";
import Logo from "@/assets/icons/logo.svg";
import { useRouter } from "next/navigation";
import { useMount } from "ahooks";
import { CustomPopup } from "../(view)/CustomPopup";
const Login = () => {
  const [checked, setChecked] = useState(false);
  const [start, setStart] = useState(true);
  const [register, setRegister] = useState(false);
  const router = useRouter();
  useMount(() => {
    setTimeout(() => {
      setStart(false);
    }, 2000);
  });
  return (
    <div className=" w-full h-full flex flex-col items-center pt-24">
      <Popup position="right" bodyStyle={{ width: "100vw" }} visible={start}>
        <div className="w-full h-full flex flex-col items-center justify-around ">
          <div>
            <Logo className="w-36 h-36" />
            <div className="font-title text-[54px] ">同&nbsp;创</div>
          </div>
        </div>
      </Popup>
      <CustomPopup
        type="pure"
        noShadow
        title="注册同创账号"
        state={register}
        setState={setRegister}
      >
        <div className=" w-full  flex flex-col items-center pt-24">
          <div className="px-24 pt-20 pb-16">
            <div
              className="  rounded-2xl bg-neutral-100  w-full mb-8"
              style={{ boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.2)" }}
            >
              <input
                placeholder="输入账号"
                className="bg-transparent px-4 py-3 text-[18px]"
              />
            </div>
            <div
              className="  rounded-2xl bg-neutral-100  w-full  mb-8"
              style={{ boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.2)" }}
            >
              <input
                placeholder="输入密码"
                type="password"
                className="bg-transparent px-4 py-3 text-[18px]"
              />
            </div>
            <div
              className="  rounded-2xl bg-neutral-100  w-full"
              style={{ boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.2)" }}
            >
              <input
                placeholder="再次输入密码"
                type="password"
                className="bg-transparent px-4 py-3 text-[18px]"
              />
            </div>
          </div>
          <button
            onClick={() => {
              if (checked) {
                Toast.show({
                  content: "注册成功",
                  duration: 1000,
                });
                router.push("modeSelect");
              } else
                Toast.show({
                  content: "请先阅读并同意服务协议",
                  duration: 1000,
                });
            }}
            className="bg-gradient-to-r from-pure to-compatible rounded-full py-1 px-20 text-[20px] text-white font-title shadow-md"
          >
            注册账号
          </button>
          <div className="flex flex-row items-center pt-12">
            <RadioIcon checked={checked} setChecked={setChecked} />
            已阅读并同意<u className="text-red-700">服务协议</u>和
            <u className="text-red-700">同创隐私保护指引</u>
          </div>
        </div>
      </CustomPopup>
      <div className="font-title text-[54px] ">同&nbsp;创</div>
      <div className="font-title text-[18px] ">一款同人社群交流分享平台</div>
      <div className="px-24 pt-20 pb-16">
        <div
          className="  rounded-2xl bg-neutral-100  w-full mb-8"
          style={{ boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.2)" }}
        >
          <input
            placeholder="输入账号"
            className="bg-transparent px-4 py-3 text-[18px]"
          />
        </div>
        <div
          className="  rounded-2xl bg-neutral-100  w-full"
          style={{ boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.2)" }}
        >
          <input
            placeholder="输入密码"
            type="password"
            className="bg-transparent px-4 py-3 text-[18px]"
          />
        </div>
      </div>
      <button
        onClick={() => {
          if (checked) {
            Toast.show({
              content: "登录成功",
              duration: 1000,
            });
            router.push("modeSelect");
          } else
            Toast.show({
              content: "请先阅读并同意服务协议",
              duration: 1000,
            });
        }}
        className="bg-gradient-to-r from-pure to-compatible rounded-full py-1 px-20 text-[20px] text-white font-title shadow-md"
      >
        登录
      </button>
      <div className="flex flex-row items-center pt-12">
        <RadioIcon checked={checked} setChecked={setChecked} />
        已阅读并同意<u className="text-red-700">服务协议</u>和
        <u className="text-red-700">同创隐私保护指引</u>
      </div>
      <div className="flex flex-row items-center text-neutral-400 gap-x-8 pt-36">
        <div onClick={() => setRegister(true)}>注册账号</div>
        <div>忘记/修改密码</div>
        <div>手机号登陆</div>
      </div>
      {/* <div className="  w-full bg-white mx-auto  px-2 rounded-xl ">
        <>
          <Form
            requiredMarkStyle="none"
            layout="vertical"
            style={{
              paddingTop: "16px",
              "--border-bottom": "none",
              "--border-top": "none",
              "--border-inner": "none",
            }}
            // onFinish={login}
            footer={
              <button
                disabled={loading}
                className="bg-primary py-2 w-full rounded-full text-white text-base"
              >
                {loading ? (
                  <SpinLoading
                    color="white"
                    style={{ "--size": "24px", margin: "auto" }}
                  />
                ) : (
                  <span className="text-white">登录</span>
                )}
              </button>
            }
          >
            <Form.Item
              label="账号"
              name="user"
              initialValue=""
              //   rules={[ruleRequire]}
            >
              <input
                placeholder="请输入账号"
                className=" ease-in-out duration-200 border-[1px] rounded-md border-slate-300 h-10 w-[100%]  focus:border-sky-500"
              />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              initialValue=""
              //   rules={[ruleRequire]}
            >
              <input
                type="password"
                className=" ease-in-out duration-200 border-[1px] rounded-md border-slate-300 h-10 w-[100%]  focus:border-sky-500"
                placeholder="请输入密码"
              />
            </Form.Item>
          </Form>
          <div className="w-full text-right mb-10">
            <div
              //   onClick={() => setSignIn(false)}
              className="mr-4 text-primary cursor-pointer"
            >
              还没有账号？去注册
            </div>
          </div>
          <div className="flex flex-col mb-6 text-center">
            <button
              onClick={() => {
                Toast.show("该功能开发中");
              }}
              className=" w-12 h-12 rounded-full bg-green-500 flex justify-center items-center block m-auto"
            >
              <AiFillWechat className="fill-white w-8 h-8" />
            </button>
            <div className="mt-4 text-slate-400">微信登录</div>
          </div>
        </>
      </div> */}
    </div>
  );
};
export default Login;
