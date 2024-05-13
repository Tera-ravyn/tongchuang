import { useState } from "react";

const RadioIcon = ({
  checked,
  setChecked,
}: {
  checked: boolean;
  setChecked: any;
}) => {
  return (
    <div onClick={() => setChecked(!checked)} className="px-2">
      {checked ? (
        <div className=" w-[16px] h-[16px] bg-red-700 rounded-full relative hover:bg-red-700">
          <div className=" w-[8px] h-[8px] left-[4px] top-[4px] bg-white rounded-full absolute " />
        </div>
      ) : (
        <div className="w-[16px] h-[16px] bg-transparent border-[1px] border-gray-300 rounded-full hover:border-gray-200" />
      )}
    </div>
  );
};
export default RadioIcon;
