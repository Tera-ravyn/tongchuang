"use client";
import Search from "@/assets/icons/search.svg";
import Star from "@/assets/icons/star.svg";
import { SpinLoading } from "antd-mobile";
import { useState } from "react";
import { project, searchHistory } from "../../staticData";
import Image from "next/image";
import { SearchPage } from "./components";

const Discovery = () => {
  const [refresh, setRefresh] = useState(false);
  const [open, setOpen] = useState(false);

  const handleRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 5000);
  };
  return (
    <div>
      <SearchPage open={open} setOpen={setOpen} />
    </div>
  );
};
export default Discovery;
