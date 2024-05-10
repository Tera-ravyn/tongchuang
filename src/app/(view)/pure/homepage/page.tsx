"use client";
import { useEffect, useState } from "react";
import { Info } from "./components";
const HomePage = () => {
  //   fetch("http://loripsum.net/api?type=short&decorate=yes")
  //     .then((response) => response.text())
  //     .then((data) => console.log(data));

  return (
    <div className="">
      <Info />
      <div className="w-full text-[28px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        porro officiis, fugit quo, nulla possimus totam reiciendis modi fugiat
        officia provident aut recusandae sit earum? At dolore asperiores maxime
        sed. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
        modi facilis nemo assumenda atque numquam sed, velit obcaecati cum,
        quisquam tempora corrupti ut laborum inventore cumque, aliquam
        voluptatibus consequatur suscipit!
      </div>
    </div>
  );
};
export default HomePage;
