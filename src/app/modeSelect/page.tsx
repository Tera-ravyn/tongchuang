"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const ModeSelect = () => {
  const [select, setSelect] = useState(0);
  const router = useRouter();
  return (
    <div className="absolute top-[50%] w-full translate-y-[-50%]">
      <div className="w-full h-full flex flex-col gap-y-4 font-title items-center ">
        <div
          onClick={() => setSelect(0)}
          className="transition-all duration-3000 ease-in-out w-36 h-36 bg-gradient-to-r rounded-full from-[#AFE4DF] to-[#71BACA]"
          style={{
            boxShadow:
              "inset -3px 3px 8px rgba(89,156,169, 0.8)" +
              (select === 0 ? ", 0 0 30px  rgba(89,156,169, 1) " : ""),
          }}
        ></div>
        <div className="text-[22px] items-center flex flex-col mb-6">
          <div>
            我是<a className="text-pure">洁癖</a>
          </div>
          <div className="text-neutral-400">
            推荐选择<u className="text-[#217DE3]">单推模式</u>
          </div>
        </div>
        <div
          onClick={() => setSelect(1)}
          className="transition-all duration-3000 ease-in-out w-36 h-36 bg-gradient-to-r rounded-full from-[#DF6B6B] to-[#7D2C2C]"
          style={{
            boxShadow:
              "inset -3px 3px 10px rgba(115,40,40, 0.8)" +
              (select === 1 ? ", 0 0 30px rgba(115,40,40, 1) " : ""),
          }}
        ></div>
        <div className="text-[22px] flex flex-col items-center ">
          <div>
            我是<a className="text-compatible">杂食</a>
          </div>
          <div className="text-neutral-400">
            推荐选择<u className="text-red-800">兼容模式</u>
          </div>
        </div>
        <button
          onClick={() => {
            if (select === 0) router.push("pure");
            else router.push("compatible");
          }}
          className="bg-gradient-to-r from-compatible to-pure rounded-2xl px-10 py-2 text-white text-[20px]"
        >
          我选好了
        </button>
      </div>
    </div>
  );
};
export default ModeSelect;
