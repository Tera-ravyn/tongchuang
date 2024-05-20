import dayjs from "dayjs";
import { StaticImageData } from "next/image";
import { atom } from "recoil";

export interface collection {
  cover: string;
  title: string;
  description: string;
  type: string;
  ip: string;
  tags: string[];
  pieces: pieceType[];
}

export const mode = atom<string>({
  key: "mode",
  default: "pure",
});

export const view = atom<string | StaticImageData>({
  key: "view",
  default: "",
});

export const generateDates = (count: number) => {
  const startDate = dayjs("2024-01-01");
  const endDate = dayjs("2024-5-11");

  const randomDates = [];
  for (let i = 0; i < count; i++) {
    const randomMilliseconds =
      Math.random() * endDate.diff(startDate, "milliseconds");
    const date = startDate.add(randomMilliseconds, "milliseconds");
    randomDates.push(date);
  }
  return randomDates.sort((a, b) => b.diff(a)); // 降序排序，确保从最新到最旧
};

export const randomDates = (comment = true) => {
  const startDate = dayjs(comment ? "2024-3-1" : "2024-1-1");
  const endDate = dayjs(comment ? "2024-5-11" : "2024-2-29");
  const randomMilliseconds =
    Math.random() * endDate.diff(startDate, "milliseconds");
  const date = startDate.add(randomMilliseconds, "milliseconds");
  return date;
};

export interface pieceType {
  title: string;
  cover: string;
  date: dayjs.Dayjs;
  context: string;
  user: string;
  userIcon: string | StaticImageData;
  type: string;
  class?: string;
  ip: string;
  tags: string[];
  pawn: number;
  crown: number;
  fav: number;
  share: number;
  comments: comment[];
}
export interface comment {
  user: string;
  userIcon: string | StaticImageData;
  context: string;
  date: dayjs.Dayjs;
}

export interface user {
  userIcon: string;
  user: string;
  type: string;
}
