"use client";
const ModeSelect = () => {
  return (
    <div className="w-full h-full flex flex-col  font-title items-center pt-36">
      <div
        className="w-36 h-36 bg-gradient-to-r rounded-full from-[#AFE4DF] to-[#71BACA]"
        style={{
          boxShadow: "inset -3px 3px 8px rgba(89,156,169, 0.8)",
        }}
      ></div>
      <div className="text-[28px]">
        我是<a className="text-pure">洁癖</a>
        <div className="text-neutral-400">
          推荐选择<u className="text-[#217DE3]">单推模式</u>
        </div>
      </div>
      <div
        className="w-36 h-36 bg-gradient-to-r rounded-full from-[#DF6B6B] to-[#7D2C2C]"
        style={{
          boxShadow: "inset -3px 3px 10px rgba(115,40,40, 0.8)",
        }}
      ></div>
      <div className="text-[28px]">
        我是<a className="text-compatible">杂食</a>
        <div className="text-neutral-400">
          推荐选择<u className="text-red-800">兼容模式</u>
        </div>
      </div>
    </div>
  );
};
export default ModeSelect;
