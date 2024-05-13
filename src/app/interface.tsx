import dayjs from "dayjs";
import { StaticImageData } from "next/image";
import { atom } from "recoil";
export interface piece {
  cover: StaticImageData;
  time: dayjs.Dayjs;
  description: string;
}

export interface collection {
  cover: StaticImageData;
  title: string;
  description: string;
  type: string;
  tag: string;
  tags: string[];
}

export const mode = atom<string>({
  key: "mode",
  default: "pure",
});

export const view = atom<string | StaticImageData>({
  key: "view",
  default: "",
});
