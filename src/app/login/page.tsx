"use client";
import { Image, Form, SpinLoading, Toast } from "antd-mobile";
import { AiFillWechat } from "react-icons/ai";
import { useState } from "react";
const Login = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className=" w-full h-full">
      <Image
        // src={}
        alt=""
        className="0 ease-in-out duration-300"
      />
      <div className="  w-full bg-white mx-auto  px-2 rounded-xl ">
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
      </div>
    </div>
  );
};
export default Login;
