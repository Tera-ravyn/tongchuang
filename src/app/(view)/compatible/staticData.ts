import { randomDates } from "@/app/interface";
// import avatar[6] from "@/assets/Image/avatar[6].jpg";
import test from "@/assets/Image/test0.jpeg";
import test1 from "@/assets/Image/test1.jpg";
import test2 from "@/assets/Image/test2.jpeg";
import avatar1 from "@/assets/avatar/1.jpg";
import avatar2 from "@/assets/avatar/2.jpg";
import avatar3 from "@/assets/avatar/3.jpg";
import avatar4 from "@/assets/avatar/4.jpeg";
import avatar5 from "@/assets/avatar/5.jpeg";
import avatar6 from "@/assets/avatar/6.jpeg";
import avatar7 from "@/assets/avatar/7.jpg";

import dayjs from "dayjs";

const avatar = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7];
const randomAvatar = () => {
  return avatar[Math.floor(Math.random() * avatar.length)];
};
/*---------个人首页相关---------*/
//个人主页作品列表
export const PiecesList = [
  {
    title: "",
    cover:
      "https://imglf6.lf127.net/img/8b90ea3373d1d26e/R3VzUnZPSGczSUJ1bTBtU2NFRW93OWUrWnZKS0Z5a0x0V0x2cnlhN0oyOD0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg",
    date: randomDates(false),
    context: "<div><div>99嗯嗯嗯</div></div>",
    user: "我爱吃饭",
    userIcon: avatar[6],
    type: "pure",
    ip: "明天的船",
    tags: ["佣兵组", "父母爱情"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [
      {
        user: "博士",
        userIcon: randomAvatar(),
        context: "99",
        date: randomDates(),
      },
      {
        user: "w",
        userIcon: randomAvatar(),
        context: "草w",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
  {
    title: "",
    cover:
      "https://imglf4.lf127.net/img/74afba9e9cb20c00/R3VzUnZPSGczSUNjb3JVU1VoS3UvaVN3SnBOd0NwQVJ3Rm1pQU5JcmhLdz0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0",
    date: randomDates(false),
    context: "<div>啊啊啊啊啊</div>",
    user: "我爱吃饭",
    userIcon: avatar[6],
    type: "pure",
    ip: "明天的船",
    tags: ["佣兵组", "父母爱情"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [
      {
        user: "w",
        userIcon: randomAvatar(),
        context: "好肉麻的两公婆，这下我便样衰了",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
].sort((a, b) => b.date.diff(a.date));
//标签订阅列表
export const subList = [
  { ip: "IP名称", tags: ["tag1", "tag2", "tag3", "tag4", "tag5"] },
  { ip: "IP名称", tags: ["tag1", "tag2", "tag3", "tag4", "tag5"] },
];
//标签屏蔽列表
export const blockList = [
  { ip: "IP名称", tags: ["tag1", "tag2", "tag3", "tag4", "tag5"] },
  { ip: "IP名称", tags: ["tag1", "tag2", "tag3", "tag4", "tag5"] },
];
//合集列表
export const series = [
  {
    cover:
      "https://imglf6.lf127.net/img/8b90ea3373d1d26e/R3VzUnZPSGczSUJ1bTBtU2NFRW93OWUrWnZKS0Z5a0x0V0x2cnlhN0oyOD0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg",
    title: "父母爱情",
    type: "pure",
    ip: "明天的船",
    tags: ["佣兵组", "父母爱情"],
    description: "爸爸妈妈我出生了",
    pieces: [
      {
        title: "",
        cover:
          "https://imglf6.lf127.net/img/8b90ea3373d1d26e/R3VzUnZPSGczSUJ1bTBtU2NFRW93OWUrWnZKS0Z5a0x0V0x2cnlhN0oyOD0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg",
        date: randomDates(false),
        context: "<div><div>99嗯嗯嗯</div></div>",
        user: "我爱吃饭",
        userIcon: avatar[6],
        type: "pure",
        ip: "明天的船",
        tags: ["佣兵组", "父母爱情"],
        pawn: Math.floor(Math.random() * 500),
        crown: Math.floor(Math.random() * 500),
        fav: Math.floor(Math.random() * 500),
        share: Math.floor(Math.random() * 500),
        comments: [
          {
            user: "博士",
            userIcon: randomAvatar(),
            context: "99",
            date: randomDates(),
          },
          {
            user: "w",
            userIcon: randomAvatar(),
            context: "草w",
            date: randomDates(),
          },
        ].sort((a, b) => b.date.diff(a.date)),
      },
      {
        title: "",
        cover:
          "https://imglf4.lf127.net/img/74afba9e9cb20c00/R3VzUnZPSGczSUNjb3JVU1VoS3UvaVN3SnBOd0NwQVJ3Rm1pQU5JcmhLdz0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0",
        date: randomDates(false),
        context: "<div>啊啊啊啊啊</div>",
        user: "我爱吃饭",
        userIcon: avatar[6],
        type: "pure",
        ip: "明天的船",
        tags: ["佣兵组", "父母爱情"],
        pawn: Math.floor(Math.random() * 500),
        crown: Math.floor(Math.random() * 500),
        fav: Math.floor(Math.random() * 500),
        share: Math.floor(Math.random() * 500),
        comments: [
          {
            user: "w",
            userIcon: randomAvatar(),
            context: "好肉麻的两公婆，这下我便样衰了",
            date: randomDates(),
          },
        ].sort((a, b) => b.date.diff(a.date)),
      },
    ],
  },
  // {
  //   cover: "",
  //   title: "外币巴伯",
  //   type: "compatible",
  //   ip: "外壁吧薄",
  //   tags: ["歪比巴伯", "崴笔吧泊"],
  //   description:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ad molestias libero, amet facere quasi? Vel earum quas, facere reprehenderit inventore nesciunt maiores quod dolorum architecto praesentium, quidem laudantium suscipit.",
  //   pieces: [
  //     {
  //       title: "",
  //       cover:
  //         "https://imglf6.lf127.net/img/8b90ea3373d1d26e/R3VzUnZPSGczSUJ1bTBtU2NFRW93OWUrWnZKS0Z5a0x0V0x2cnlhN0oyOD0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg",
  //       date: randomDates(false),
  //       context: "<div><div>99嗯嗯嗯</div></div>",
  //       user: "我爱吃饭",
  //       userIcon: avatar[6],
  //       type: "pure",
  //       ip: "明天的船",
  //       tags: ["佣兵组", "父母爱情"],
  //       pawn: Math.floor(Math.random() * 500),
  //       crown: Math.floor(Math.random() * 500),
  //       fav: Math.floor(Math.random() * 500),
  //       share: Math.floor(Math.random() * 500),
  //       comments: [
  //         {
  //           user: "博士",
  //           userIcon: randomAvatar(),
  //           context: "99",
  //           date: randomDates(),
  //         },
  //         {
  //           user: "w",
  //           userIcon: randomAvatar(),
  //           context: "草w",
  //           date: randomDates(),
  //         },
  //       ].sort((a, b) => b.date.diff(a.date)),
  //     },
  //     {
  //       title: "",
  //       cover:
  //         "https://imglf4.lf127.net/img/74afba9e9cb20c00/R3VzUnZPSGczSUNjb3JVU1VoS3UvaVN3SnBOd0NwQVJ3Rm1pQU5JcmhLdz0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0",
  //       date: randomDates(false),
  //       context:
  //         "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
  //       user: "我爱吃饭",
  //       userIcon: avatar[6],
  //       type: "pure",
  //       ip: "明天的船",
  //       tags: ["佣兵组", "父母爱情"],
  //       pawn: Math.floor(Math.random() * 500),
  //       crown: Math.floor(Math.random() * 500),
  //       fav: Math.floor(Math.random() * 500),
  //       share: Math.floor(Math.random() * 500),
  //       comments: [
  //         {
  //           user: "w",
  //           userIcon: randomAvatar(),
  //           context: "好肉麻的两公婆，这下我便样衰了",
  //           date: randomDates(),
  //         },
  //       ].sort((a, b) => b.date.diff(a.date)),
  //     },
  //   ],
  // },
];
//点图历史的图片地址
export const history = [
  "https://imglf6.lf127.net/img/eb9cbd8f88054879/R3VzUnZPSGczSUNaVi9WTzlZd1k2ZGhwQk9rVlV0d1RXcEZTcVViTE5EUT0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg",
  "https://imglf6.lf127.net/img/0b6e137233c1ae68/R3VzUnZPSGczSUNaVi9WTzlZd1k2Y0tVZHZIZEFodFNHTFBMdTYyQkdGaz0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0",
  "https://imglf3.lf127.net/img/198c88c292c8211d/R3VzUnZPSGczSUNaVi9WTzlZd1k2U1U1UWsvb3E2WjRhZnZYbnByekFZVT0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg",
  "https://imglf4.lf127.net/img/b58a98ece809f366/R3VzUnZPSGczSUNaVi9WTzlZd1k2WXRHSHhYVytKdW1kR21MelJWdFBrST0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0",
];

/*---------版聊相关---------*/
export const tags = [
  "纷争后线",
  "尘开密岩",
  "水晶合作",
  "花嫁亚历山大",
  "大草原",
  "陪你一起看极光我超火流星",
];
export const chat = [
  {
    title: "标题",
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    date: randomDates(false),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "用户昵称",
    userIcon: avatar[6],
    type: "pure",
    ip: "ip",
    tags: ["tag1", "tag2"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [
      {
        user: "用户昵称",
        userIcon: randomAvatar(),
        context: "草",
        date: randomDates(),
      },
      {
        user: "用户昵称",
        userIcon: randomAvatar(),
        context: "草",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
  {
    title: "标题",
    cover:
      "https://imglf5.lf127.net/img/8324422c9fc99ddc/SHRJMUQ3VE0yMkkyRng1QjY2OS9LNlVFb21FUk83ODA5ajR6S2JLbEI0MD0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0",
    date: randomDates(false),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "用户昵称",
    userIcon: avatar[6],
    type: "pure",
    ip: "ip",
    tags: ["tag1", "tag2"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [
      {
        user: "用户昵称",
        userIcon: randomAvatar(),
        context: "草",
        date: randomDates(),
      },
      {
        user: "用户昵称",
        userIcon: randomAvatar(),
        context: "草",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
  {
    title: "标题",
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    date: randomDates(false),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "用户昵称",
    userIcon: avatar[6],
    type: "pure",
    ip: "ip",
    tags: ["tag1", "tag2"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [
      {
        user: "用户昵称",
        userIcon: randomAvatar(),
        context: "草",
        date: randomDates(),
      },
      {
        user: "用户昵称",
        userIcon: randomAvatar(),
        context: "草",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },

  {
    title: "",
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    date: randomDates(false),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "用户昵称",
    userIcon: avatar[6],
    type: "pure",
    ip: "ip",
    tags: ["tag1", "tag2"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [
      {
        user: "用户昵称",
        userIcon: randomAvatar(),
        context: "草",
        date: randomDates(),
      },
      {
        user: "用户昵称",
        userIcon: randomAvatar(),
        context: "草",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
  {
    title: "标题",
    cover: "",
    date: randomDates(false),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "用户昵称",
    userIcon: avatar[6],
    type: "pure",
    ip: "ip",
    tags: ["tag1", "tag2"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [
      {
        user: "用户昵称",
        userIcon: randomAvatar(),
        context: "草",
        date: randomDates(),
      },
      {
        user: "用户昵称",
        userIcon: randomAvatar(),
        context: "草",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
  {
    title: "标题",
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    date: randomDates(false),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "用户昵称",
    userIcon: avatar[6],
    type: "pure",
    ip: "ip",
    tags: ["tag1", "tag2"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [
      {
        user: "用户昵称",
        userIcon: randomAvatar(),
        context: "草",
        date: randomDates(),
      },
      {
        user: "用户昵称",
        userIcon: randomAvatar(),
        context: "草",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
  {
    title: "标题",
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    date: randomDates(false),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "用户昵称",
    userIcon: avatar[6],
    type: "pure",
    ip: "ip",
    tags: ["tag1", "tag2"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [
      {
        user: "用户昵称",
        userIcon: randomAvatar(),
        context: "草",
        date: randomDates(),
      },
      {
        user: "用户昵称",
        userIcon: randomAvatar(),
        context: "草",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
];

/*---------广场相关---------*/
//广场作品浏览列表
export const discovery = [
  {
    title: "",
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    date: randomDates(false),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "狗尾巴草",
    userIcon: avatar[6],
    type: "pure",
    ip: "吃谎的人",
    tags: ["吃谎人", "谎"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [
      {
        user: "我爱吃饭",
        userIcon: randomAvatar(),
        context: "呜呜呜",
        date: randomDates(),
      },
      {
        user: "我要吃饭",
        userIcon: randomAvatar(),
        context: "草",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
  {
    comments: [],
    title: "弥梶/Speak Low",
    cover: "",
    date: randomDates(false),
    context:
      "<p>&zwnj;&zwnj;&zwnj;　　&ldquo;没关系，等它愈合以后不会怎么显眼的。&rdquo; &nbsp;&nbsp;<br />&zwnj;&zwnj;&zwnj;　　&ldquo;是吗。&rdquo; &nbsp;<br />&zwnj;&zwnj;&zwnj;　　弥鳕又抓起梶的左手手腕，从他的扑克脸上梶什么都看不明白。弥鳕侧过身，用另一只手的指腹轻轻地抚摸那道都还没只有薄薄一层痂的伤口。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　&ldquo;啊、&rdquo; &nbsp;<br />&zwnj;&zwnj;&zwnj;　　弥鳕稍微长长了的指甲嵌进了肉里，一点点地把薄痂的边缘与肌肤分离。鲜红的颜色从被撬开的浅浅的保护层下渗出，浸润了狭长的伤口。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　&ldquo;&hellip;&hellip;痛！&rdquo;梶条件反射地抽动了一下，但是手腕被弥鳕紧紧地握住了。这跟被刀切割时候的感觉不一样，感觉更加漫长到难以忍受，持续的瘙痒和细碎的疼痛从手臂延伸出去爬满了全身。 梶感到燥热不安，仿佛氧气变得越来越稀薄，鼻子上稍微渗出了汗水。弥鳕静静地听着梶变得有点急促的呼吸，并没有抬起眼睛去看他此刻的神情。梶努力平复着心情，伸出右手想抓住弥鳕的肩膀，弥鳕却突然俯下了身。前发轻轻地扫过了梶的手臂，让他一下分散了注意力。然后弥鳕亲吻了那道伤口。说是亲吻也不准确，应该是在啜饮渗出的血珠。平常总是有些发白的嘴唇被染红的样子让梶有些困惑地心跳加速。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　&ldquo;啊&hellip;&hellip;&rdquo; &nbsp;<br />&zwnj;&zwnj;&zwnj;　　再接下来有一个湿润的、发热的物体覆盖在了他的伤口上。口腔内的热度高于自己的体温，伤口被湿热包裹着的感觉让梶感到无所适从。弥鳕轻轻地吸了一口，然后伸出了舌头，仔细地舔舐着皮肤的裂痕，感受被一分为二了的皮肤的形状。血液是咸的，然后伤口是酸的。弥鳕咽下快要溢出口腔的唾液，空气中混杂着轻微的铁锈味。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　梶努力忍耐着，偶尔轻轻地呼气，夹带一点颤抖的喉音。伤口因为最初的刺激变得敏感。残留的痛觉和被舔舐的快感让他陷入了混乱，他不由得眯起眼睛。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　伤口已经不再渗血了。弥鳕收回了舌头，轻轻叹了一口气，然后抬起身子注视着梶。那团湿润而温热的空气还余留在皮肤表面，梶就这样呆怔地和弥鳕四目相对，脑袋里一片空白。啪、啪啪，外面骤然传来雨滴击打地面的声音。骤然而降的暴雨，狂热地发出捶打的声音。空气变得更加黏稠而炎热，夏天的热度被固定在了小小的教室里。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　弥鳕看着依然出神的梶，安静地说，看来一时半会儿是回不去了。 &nbsp;</p>",
    user: "用户昵称",
    userIcon:
      "https://imglf4.lf127.net/img/8bf5c618387eb932/SHRJMUQ3VE0yMkltOVVtNS8xdk5PWERPUk5vYllwQ3V6OGMvWVNVSnNEdz0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0",
    type: "compatible",
    ip: "吃谎的人",
    tags: ["吃谎人", "谎", "弥梶"],
    comment: [],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
  },
  {
    title: "門梶/doppel",
    cover: "",
    date: randomDates(false),
    context:
      "<p>&zwnj;&zwnj;&zwnj;　　第二次看到梶的身影出现在那条街的时候门仓皱了下眉头。第一次他只是有点意外，并没太放在心上，但是这条无奇的后巷并没有什么值得再次拜访的地方&mdash;&mdash;除了极道的事务所。他眯起独眼追寻了一会儿梶的身影，看到他确实走进了那个地方。</p><p>&zwnj;&zwnj;&zwnj;　　直接接触？作为准备工作似乎显得有点过分了吧？他第一反应是梶是否为了避嫌而特意提出了不要自己作为他赌局的见证人，虽然就算有这种事也无可奈何。再说很多赌局事出突然，大多数时候前去现场的见证人本来就是随机的。即使貘当上了首领，梶进行的赌局也非全部事关重大。至少上一次门仓见到梶的时候就只是一场无聊到极点的赌局，像是心血来潮一样，以基本上称得上是欺负新手的状态和一个小混混打了一小会儿扑克。那时碰巧地遇上了，梶礼貌地笑笑，像往常一样跟他打招呼。非常无聊的赌局，就算是运气游戏，对方也过于易懂，横冲直撞的打法很快就以梶的胜利告终。</p><p>&zwnj;&zwnj;&zwnj;　　啊，小混混。所以说是引火上身了？&hellip;&hellip;不，也许本来就是故意的。</p><p>&zwnj;&zwnj;&zwnj;　　如果是这种赌局，想看啊。门仓缓缓吐出一口烟。不过里面一直迟迟没有动静。没有争吵声，也没有别的见证人。门仓也没有闲到在这里无所事事的地步，一支烟快要抽完，他准备离开。</p><p>&zwnj;&zwnj;&zwnj;　　拿出便携式烟灰缸的时候，门口传来脚步声。门仓下意识回头看了一眼。虽然是背对着，但还是一眼看出来了梶。黑发似乎比平时还要更软一些，似乎没怎么打发蜡，略微塌了下来。有些细碎的头发垂在后颈上。&mdash;&mdash;啊。后颈，平常不怎么见到。今天梶穿的并不是衬衫，而是连帽衫。便服是这种水平吗？门仓不禁为那份品位咂舌。</p><p>&zwnj;&zwnj;&zwnj;　　梶的对面站着一个比他高不少的人。穿着黑色的长风衣，衬衣的领子理所当然地翻出来盖在了外套的衣领上。然后是及肩的长发，左眼用黑色的眼罩遮住了。<br />梶的头略微转过了一点，露出了开朗的笑容。两个人看上去相谈甚欢。</p><p>&zwnj;&zwnj;&zwnj;　　门仓一时间就这么站在那里看着，已经有了一小截长度的烟灰从唇边洒落到了门仓昂贵的长西装上。本来早就该熄灭的烟被烧到只剩了一点点。</p><p>&zwnj;&zwnj;&zwnj;　　&hellip;&hellip;</p><p>&zwnj;&zwnj;&zwnj;　　在阳台上注视黄昏景色的门仓突然又想起来了从连帽衫露出的后颈。楼上孩子练习钢琴的声音随着晚风传来，他突然想到，为什么是便服？</p>",
    user: "死结乐队",
    userIcon:
      "https://imglf4.lf127.net/img/8bf5c618387eb932/SHRJMUQ3VE0yMkltOVVtNS8xdk5PWERPUk5vYllwQ3V6OGMvWVNVSnNEdz0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0",
    type: "pure",
    ip: "吃谎的人",
    tags: ["吃谎人", "谎", "門梶"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [
      {
        user: "死结乐队",
        userIcon: randomAvatar(),
        context: "坑了，耶",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
  {
    title: "博起",
    cover:
      "https://imglf3.lf127.net/img/ced7dfbfca3f33d5/R3VzUnZPSGczSUJpckVHSXA3RkVNNTdqTW1mYUxhbUNvNFhhSHVUaC9mVT0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0",
    date: randomDates(false),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "我爱吃饭",
    userIcon: randomAvatar(),
    type: "pure",
    ip: "博德之门3",
    tags: ["阿斯代伦", "血网"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [
      {
        user: "死结乐队",
        userIcon: randomAvatar(),
        context: "好！",
        date: randomDates(),
      },
      {
        user: "我要吃饭",
        userIcon: randomAvatar(),
        context: "我吃",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
  {
    title: "",
    cover:
      "https://imglf5.lf127.net/img/36e0689a4dc55ba6/R3VzUnZPSGczSUJRZFBMcnUrLzI5QmRCSzZCVkVpdkZwNkNCVS9DL29OZz0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg",
    date: randomDates(false),
    context: "",
    user: "我爱吃饭",
    userIcon: avatar[6],
    type: "pure",
    ip: "恶魔五月哭",
    tags: ["但丁", "Dante"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [
      {
        user: "但丁",
        userIcon: randomAvatar(),
        context: "？",
        date: randomDates(),
      },
      {
        user: "尼禄",
        userIcon: randomAvatar(),
        context: "我叔袭来",
        date: randomDates(),
      },
      {
        user: "维吉尔",
        userIcon: randomAvatar(),
        context: "我弟袭来",
        date: randomDates(),
      },
      {
        user: "斯巴达",
        userIcon: randomAvatar(),
        context: "我儿袭来",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
  {
    title: "父母爱情",
    cover:
      "https://imglf6.lf127.net/img/8b90ea3373d1d26e/R3VzUnZPSGczSUJ1bTBtU2NFRW93OWUrWnZKS0Z5a0x0V0x2cnlhN0oyOD0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg",
    date: randomDates(false),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "我爱吃饭",
    userIcon: randomAvatar(),
    type: "compatible",
    ip: "明天的船",
    tags: ["父母爱情"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [],
  },
  {
    title: "",
    cover:
      "https://imglf6.lf127.net/img/ac972666eb260784/SHRJMUQ3VE0yMkkyRng1QjY2OS9LMnJwMi9uYjVqZGlreTdCcEZ1SHpvbz0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg",
    date: randomDates(false),
    context: "<div>不会画画</div>",
    user: "死结乐队",
    userIcon:
      "https://imglf4.lf127.net/img/8bf5c618387eb932/SHRJMUQ3VE0yMkltOVVtNS8xdk5PWERPUk5vYllwQ3V6OGMvWVNVSnNEdz0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0",
    type: "pure",
    ip: "吃谎的人",
    tags: ["門梶"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [],
  },
].sort((a, b) => b.date.diff(a.date));
//企划列表
export const project = [
  {
    //发布人id
    user: "狗尾巴草",
    //发布人头像
    userIcon: avatar[6],
    //用户属性，pure-单推，compatible-兼容
    type: "pure",
    //企划标题
    title: "吃谎的人24h主题企划！",
    //企划封面
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    //企划ip
    ip: "吃谎的人",
    //其他tag
    tags: ["吃谎人", "谎"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    //评论
    comments: [
      {
        user: "我爱吃饭",
        userIcon: randomAvatar(),
        context: "求求你……",
        date: randomDates(),
      },
      {
        user: "我饿死了",
        userIcon: randomAvatar(),
        context: "求求你……",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
    //正文
    context:
      "<p>主题IP：吃谎的人<br />主办方：个人<br />企划形式：线上24h展览<br />企划介绍：求求你&hellip;</p>",
    date: randomDates(false),
    class: "project",
  },
  {
    user: "死结乐队",
    userIcon:
      "https://imglf4.lf127.net/img/8bf5c618387eb932/SHRJMUQ3VE0yMkltOVVtNS8xdk5PWERPUk5vYllwQ3V6OGMvWVNVSnNEdz0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0",
    type: "compatible",
    title: "企划2",
    cover:
      "https://imglf4.lf127.net/img/8bf5c618387eb932/SHRJMUQ3VE0yMkltOVVtNS8xdk5PWERPUk5vYllwQ3V6OGMvWVNVSnNEdz0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0",
    ip: "slapnuts",
    tags: ["lightMetal", "whiteMetal", "oldMetal"],
    comment: [],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    context:
      "<p>主题IP：死结乐队<br />主办方：钢筋享受者协会<br />企划形式：线下会展<br />企划介绍：还有人说听不见？不可能听不见！</p>",
    date: randomDates(false),
    class: "project",
  },
  {
    user: "战斗爽",
    userIcon: avatar[6],
    type: "compatible",
    title: "我有超能力",
    cover:
      "https://imglf4.lf127.net/img/36614d8998cfa3be/UmtjYTNiMEFNUld5aFNCK2pnL0NzN3Jsa0ZTVVBYcUNRZnR1QnVYRnVjbz0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0",
    ip: "超能100",
    tags: ["会展", "only"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    context:
      "<p>主题IP：我有超能力<br />主办方：哼哼哈哈社团<br />企划形式：线下only<br />企划介绍：详情见宣图下拉部分文字内容！</p>",
    date: randomDates(false),
    class: "project",
    comment: [],
  },
].sort((a, b) => b.date.diff(a.date));
//历史搜索记录
export const searchHistory = ["吃谎的人", "我有超能力", "1"];

/*---------订阅相关---------*/
//好友列表
export const friends = [
  {
    group: "新的朋友",
    users: [
      {
        userIcon: randomAvatar(),
        user: "狂暴同人女",
        motto: "狂暴！",
        type: "compatible",
      },
      {
        userIcon: randomAvatar(),
        user: "温柔同人女",
        motto: "纯爱就是最好的",
        type: "pure",
      },
    ],
  },
  {
    group: "狂暴！",
    users: [
      {
        userIcon: randomAvatar(),
        user: "狂暴同人女",
        motto: "狂暴！",
        type: "compatible",
      },
      {
        userIcon: randomAvatar(),
        user: "狂暴同人男",
        motto: "狂暴！",
        type: "compatible",
      },
    ],
  },
  {
    group: "可怜的社畜",
    users: [
      {
        userIcon: randomAvatar(),
        user: "社畜",
        motto: "社畜中……",
        type: "pure",
      },
      {
        userIcon: randomAvatar(),
        user: "高级社畜",
        motto: "我喜欢公司我对公司很有感情我绝不下班",
        type: "compatible",
      },
    ],
  },
  {
    group: "大学生",
    users: [
      {
        userIcon: randomAvatar(),
        user: "阳光开朗大学生",
        motto: "",
        type: "compatible",
      },
      {
        userIcon: randomAvatar(),
        user: "温柔同人女",
        motto: "纯爱就是最好的",
        type: "pure",
      },
    ],
  },
];
//订阅用户
export const subscribeUser = [
  {
    comments: [],
    title: "弥梶/Speak Low",
    cover: "",
    date: randomDates(false),
    context:
      "<p>&zwnj;&zwnj;&zwnj;　　&ldquo;没关系，等它愈合以后不会怎么显眼的。&rdquo; &nbsp;&nbsp;<br />&zwnj;&zwnj;&zwnj;　　&ldquo;是吗。&rdquo; &nbsp;<br />&zwnj;&zwnj;&zwnj;　　弥鳕又抓起梶的左手手腕，从他的扑克脸上梶什么都看不明白。弥鳕侧过身，用另一只手的指腹轻轻地抚摸那道都还没只有薄薄一层痂的伤口。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　&ldquo;啊、&rdquo; &nbsp;<br />&zwnj;&zwnj;&zwnj;　　弥鳕稍微长长了的指甲嵌进了肉里，一点点地把薄痂的边缘与肌肤分离。鲜红的颜色从被撬开的浅浅的保护层下渗出，浸润了狭长的伤口。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　&ldquo;&hellip;&hellip;痛！&rdquo;梶条件反射地抽动了一下，但是手腕被弥鳕紧紧地握住了。这跟被刀切割时候的感觉不一样，感觉更加漫长到难以忍受，持续的瘙痒和细碎的疼痛从手臂延伸出去爬满了全身。 梶感到燥热不安，仿佛氧气变得越来越稀薄，鼻子上稍微渗出了汗水。弥鳕静静地听着梶变得有点急促的呼吸，并没有抬起眼睛去看他此刻的神情。梶努力平复着心情，伸出右手想抓住弥鳕的肩膀，弥鳕却突然俯下了身。前发轻轻地扫过了梶的手臂，让他一下分散了注意力。然后弥鳕亲吻了那道伤口。说是亲吻也不准确，应该是在啜饮渗出的血珠。平常总是有些发白的嘴唇被染红的样子让梶有些困惑地心跳加速。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　&ldquo;啊&hellip;&hellip;&rdquo; &nbsp;<br />&zwnj;&zwnj;&zwnj;　　再接下来有一个湿润的、发热的物体覆盖在了他的伤口上。口腔内的热度高于自己的体温，伤口被湿热包裹着的感觉让梶感到无所适从。弥鳕轻轻地吸了一口，然后伸出了舌头，仔细地舔舐着皮肤的裂痕，感受被一分为二了的皮肤的形状。血液是咸的，然后伤口是酸的。弥鳕咽下快要溢出口腔的唾液，空气中混杂着轻微的铁锈味。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　梶努力忍耐着，偶尔轻轻地呼气，夹带一点颤抖的喉音。伤口因为最初的刺激变得敏感。残留的痛觉和被舔舐的快感让他陷入了混乱，他不由得眯起眼睛。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　伤口已经不再渗血了。弥鳕收回了舌头，轻轻叹了一口气，然后抬起身子注视着梶。那团湿润而温热的空气还余留在皮肤表面，梶就这样呆怔地和弥鳕四目相对，脑袋里一片空白。啪、啪啪，外面骤然传来雨滴击打地面的声音。骤然而降的暴雨，狂热地发出捶打的声音。空气变得更加黏稠而炎热，夏天的热度被固定在了小小的教室里。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　弥鳕看着依然出神的梶，安静地说，看来一时半会儿是回不去了。 &nbsp;</p>",
    user: "死结乐队",
    userIcon:
      "https://imglf4.lf127.net/img/8bf5c618387eb932/SHRJMUQ3VE0yMkltOVVtNS8xdk5PWERPUk5vYllwQ3V6OGMvWVNVSnNEdz0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0",
    type: "compatible",
    ip: "吃谎的人",
    tags: ["吃谎人", "谎", "弥梶"],
    comment: [],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
  },
  {
    title: "門梶/doppel",
    cover: "",
    date: randomDates(false),
    context:
      "<p>&zwnj;&zwnj;&zwnj;　　第二次看到梶的身影出现在那条街的时候门仓皱了下眉头。第一次他只是有点意外，并没太放在心上，但是这条无奇的后巷并没有什么值得再次拜访的地方&mdash;&mdash;除了极道的事务所。他眯起独眼追寻了一会儿梶的身影，看到他确实走进了那个地方。</p><p>&zwnj;&zwnj;&zwnj;　　直接接触？作为准备工作似乎显得有点过分了吧？他第一反应是梶是否为了避嫌而特意提出了不要自己作为他赌局的见证人，虽然就算有这种事也无可奈何。再说很多赌局事出突然，大多数时候前去现场的见证人本来就是随机的。即使貘当上了首领，梶进行的赌局也非全部事关重大。至少上一次门仓见到梶的时候就只是一场无聊到极点的赌局，像是心血来潮一样，以基本上称得上是欺负新手的状态和一个小混混打了一小会儿扑克。那时碰巧地遇上了，梶礼貌地笑笑，像往常一样跟他打招呼。非常无聊的赌局，就算是运气游戏，对方也过于易懂，横冲直撞的打法很快就以梶的胜利告终。</p><p>&zwnj;&zwnj;&zwnj;　　啊，小混混。所以说是引火上身了？&hellip;&hellip;不，也许本来就是故意的。</p><p>&zwnj;&zwnj;&zwnj;　　如果是这种赌局，想看啊。门仓缓缓吐出一口烟。不过里面一直迟迟没有动静。没有争吵声，也没有别的见证人。门仓也没有闲到在这里无所事事的地步，一支烟快要抽完，他准备离开。</p><p>&zwnj;&zwnj;&zwnj;　　拿出便携式烟灰缸的时候，门口传来脚步声。门仓下意识回头看了一眼。虽然是背对着，但还是一眼看出来了梶。黑发似乎比平时还要更软一些，似乎没怎么打发蜡，略微塌了下来。有些细碎的头发垂在后颈上。&mdash;&mdash;啊。后颈，平常不怎么见到。今天梶穿的并不是衬衫，而是连帽衫。便服是这种水平吗？门仓不禁为那份品位咂舌。</p><p>&zwnj;&zwnj;&zwnj;　　梶的对面站着一个比他高不少的人。穿着黑色的长风衣，衬衣的领子理所当然地翻出来盖在了外套的衣领上。然后是及肩的长发，左眼用黑色的眼罩遮住了。<br />梶的头略微转过了一点，露出了开朗的笑容。两个人看上去相谈甚欢。</p><p>&zwnj;&zwnj;&zwnj;　　门仓一时间就这么站在那里看着，已经有了一小截长度的烟灰从唇边洒落到了门仓昂贵的长西装上。本来早就该熄灭的烟被烧到只剩了一点点。</p><p>&zwnj;&zwnj;&zwnj;　　&hellip;&hellip;</p><p>&zwnj;&zwnj;&zwnj;　　在阳台上注视黄昏景色的门仓突然又想起来了从连帽衫露出的后颈。楼上孩子练习钢琴的声音随着晚风传来，他突然想到，为什么是便服？</p>",
    user: "死结乐队",
    userIcon:
      "https://imglf4.lf127.net/img/8bf5c618387eb932/SHRJMUQ3VE0yMkltOVVtNS8xdk5PWERPUk5vYllwQ3V6OGMvWVNVSnNEdz0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0",
    type: "compatible",
    ip: "吃谎的人",
    tags: ["吃谎人", "谎", "門梶"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [
      {
        user: "死结乐队",
        userIcon: randomAvatar(),
        context: "坑了，耶",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
].sort((a, b) => b.date.diff(a.date));
//订阅ip
export const subscribeIp = [
  {
    title: "",
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    date: randomDates(false),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "狗尾巴草",
    userIcon: avatar[6],
    type: "pure",
    ip: "吃谎的人",
    tags: ["吃谎人", "谎"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [
      {
        user: "我爱吃饭",
        userIcon: randomAvatar(),
        context: "呜呜呜",
        date: randomDates(),
      },
      {
        user: "我要吃饭",
        userIcon: randomAvatar(),
        context: "草",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
  {
    //发布人id
    user: "狗尾巴草",
    //发布人头像
    userIcon: avatar[6],
    //用户属性，pure-单推，compatible-兼容
    type: "pure",
    //企划标题
    title: "吃谎的人24h主题企划！",
    //企划封面
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    //企划ip
    ip: "吃谎的人",
    //其他tag
    tags: ["吃谎人", "谎"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    //评论
    comments: [
      {
        user: "我爱吃饭",
        userIcon: randomAvatar(),
        context: "求求你……",
        date: randomDates(),
      },
      {
        user: "我饿死了",
        userIcon: randomAvatar(),
        context: "求求你……",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
    //正文
    context:
      "<p>主题IP：吃谎的人<br />主办方：个人<br />企划形式：线上24h展览<br />企划介绍：求求你&hellip;</p>",
    date: randomDates(false),
    class: "project",
  },
  {
    comments: [],
    title: "弥梶/Speak Low",
    cover: "",
    date: randomDates(false),
    context:
      "<p>&zwnj;&zwnj;&zwnj;　　&ldquo;没关系，等它愈合以后不会怎么显眼的。&rdquo; &nbsp;&nbsp;<br />&zwnj;&zwnj;&zwnj;　　&ldquo;是吗。&rdquo; &nbsp;<br />&zwnj;&zwnj;&zwnj;　　弥鳕又抓起梶的左手手腕，从他的扑克脸上梶什么都看不明白。弥鳕侧过身，用另一只手的指腹轻轻地抚摸那道都还没只有薄薄一层痂的伤口。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　&ldquo;啊、&rdquo; &nbsp;<br />&zwnj;&zwnj;&zwnj;　　弥鳕稍微长长了的指甲嵌进了肉里，一点点地把薄痂的边缘与肌肤分离。鲜红的颜色从被撬开的浅浅的保护层下渗出，浸润了狭长的伤口。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　&ldquo;&hellip;&hellip;痛！&rdquo;梶条件反射地抽动了一下，但是手腕被弥鳕紧紧地握住了。这跟被刀切割时候的感觉不一样，感觉更加漫长到难以忍受，持续的瘙痒和细碎的疼痛从手臂延伸出去爬满了全身。 梶感到燥热不安，仿佛氧气变得越来越稀薄，鼻子上稍微渗出了汗水。弥鳕静静地听着梶变得有点急促的呼吸，并没有抬起眼睛去看他此刻的神情。梶努力平复着心情，伸出右手想抓住弥鳕的肩膀，弥鳕却突然俯下了身。前发轻轻地扫过了梶的手臂，让他一下分散了注意力。然后弥鳕亲吻了那道伤口。说是亲吻也不准确，应该是在啜饮渗出的血珠。平常总是有些发白的嘴唇被染红的样子让梶有些困惑地心跳加速。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　&ldquo;啊&hellip;&hellip;&rdquo; &nbsp;<br />&zwnj;&zwnj;&zwnj;　　再接下来有一个湿润的、发热的物体覆盖在了他的伤口上。口腔内的热度高于自己的体温，伤口被湿热包裹着的感觉让梶感到无所适从。弥鳕轻轻地吸了一口，然后伸出了舌头，仔细地舔舐着皮肤的裂痕，感受被一分为二了的皮肤的形状。血液是咸的，然后伤口是酸的。弥鳕咽下快要溢出口腔的唾液，空气中混杂着轻微的铁锈味。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　梶努力忍耐着，偶尔轻轻地呼气，夹带一点颤抖的喉音。伤口因为最初的刺激变得敏感。残留的痛觉和被舔舐的快感让他陷入了混乱，他不由得眯起眼睛。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　伤口已经不再渗血了。弥鳕收回了舌头，轻轻叹了一口气，然后抬起身子注视着梶。那团湿润而温热的空气还余留在皮肤表面，梶就这样呆怔地和弥鳕四目相对，脑袋里一片空白。啪、啪啪，外面骤然传来雨滴击打地面的声音。骤然而降的暴雨，狂热地发出捶打的声音。空气变得更加黏稠而炎热，夏天的热度被固定在了小小的教室里。 &nbsp;<br />&zwnj;&zwnj;&zwnj;　　弥鳕看着依然出神的梶，安静地说，看来一时半会儿是回不去了。 &nbsp;</p>",
    user: "死结乐队",
    userIcon:
      "https://imglf4.lf127.net/img/8bf5c618387eb932/SHRJMUQ3VE0yMkltOVVtNS8xdk5PWERPUk5vYllwQ3V6OGMvWVNVSnNEdz0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0",
    type: "compatible",
    ip: "吃谎的人",
    tags: ["吃谎人", "谎", "弥梶"],
    comment: [],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
  },
  {
    title: "門梶/doppel",
    cover: "",
    date: randomDates(false),
    context:
      "<p>&zwnj;&zwnj;&zwnj;　　第二次看到梶的身影出现在那条街的时候门仓皱了下眉头。第一次他只是有点意外，并没太放在心上，但是这条无奇的后巷并没有什么值得再次拜访的地方&mdash;&mdash;除了极道的事务所。他眯起独眼追寻了一会儿梶的身影，看到他确实走进了那个地方。</p><p>&zwnj;&zwnj;&zwnj;　　直接接触？作为准备工作似乎显得有点过分了吧？他第一反应是梶是否为了避嫌而特意提出了不要自己作为他赌局的见证人，虽然就算有这种事也无可奈何。再说很多赌局事出突然，大多数时候前去现场的见证人本来就是随机的。即使貘当上了首领，梶进行的赌局也非全部事关重大。至少上一次门仓见到梶的时候就只是一场无聊到极点的赌局，像是心血来潮一样，以基本上称得上是欺负新手的状态和一个小混混打了一小会儿扑克。那时碰巧地遇上了，梶礼貌地笑笑，像往常一样跟他打招呼。非常无聊的赌局，就算是运气游戏，对方也过于易懂，横冲直撞的打法很快就以梶的胜利告终。</p><p>&zwnj;&zwnj;&zwnj;　　啊，小混混。所以说是引火上身了？&hellip;&hellip;不，也许本来就是故意的。</p><p>&zwnj;&zwnj;&zwnj;　　如果是这种赌局，想看啊。门仓缓缓吐出一口烟。不过里面一直迟迟没有动静。没有争吵声，也没有别的见证人。门仓也没有闲到在这里无所事事的地步，一支烟快要抽完，他准备离开。</p><p>&zwnj;&zwnj;&zwnj;　　拿出便携式烟灰缸的时候，门口传来脚步声。门仓下意识回头看了一眼。虽然是背对着，但还是一眼看出来了梶。黑发似乎比平时还要更软一些，似乎没怎么打发蜡，略微塌了下来。有些细碎的头发垂在后颈上。&mdash;&mdash;啊。后颈，平常不怎么见到。今天梶穿的并不是衬衫，而是连帽衫。便服是这种水平吗？门仓不禁为那份品位咂舌。</p><p>&zwnj;&zwnj;&zwnj;　　梶的对面站着一个比他高不少的人。穿着黑色的长风衣，衬衣的领子理所当然地翻出来盖在了外套的衣领上。然后是及肩的长发，左眼用黑色的眼罩遮住了。<br />梶的头略微转过了一点，露出了开朗的笑容。两个人看上去相谈甚欢。</p><p>&zwnj;&zwnj;&zwnj;　　门仓一时间就这么站在那里看着，已经有了一小截长度的烟灰从唇边洒落到了门仓昂贵的长西装上。本来早就该熄灭的烟被烧到只剩了一点点。</p><p>&zwnj;&zwnj;&zwnj;　　&hellip;&hellip;</p><p>&zwnj;&zwnj;&zwnj;　　在阳台上注视黄昏景色的门仓突然又想起来了从连帽衫露出的后颈。楼上孩子练习钢琴的声音随着晚风传来，他突然想到，为什么是便服？</p>",
    user: "死结乐队",
    userIcon:
      "https://imglf4.lf127.net/img/8bf5c618387eb932/SHRJMUQ3VE0yMkltOVVtNS8xdk5PWERPUk5vYllwQ3V6OGMvWVNVSnNEdz0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0",
    type: "compatible",
    ip: "吃谎的人",
    tags: ["吃谎人", "谎", "門梶"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    comments: [
      {
        user: "死结乐队",
        userIcon: randomAvatar(),
        context: "坑了，耶",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
].sort((a, b) => b.date.diff(a.date));
export const sponsor = [
  {
    //发布人id
    user: "我爱吃饭",
    //发布人头像
    userIcon: avatar[5],
    //用户属性，pure-单推，compatible-兼容
    type: "compatible",
    //企划标题
    title: "5d",
    //企划封面
    cover:
      "https://imglf5.lf127.net/img/ae68902ef1ae1e4e/R3VzUnZPSGczSUEwM1pSU2Vqa2ZXMmJjZzViNUJMMFVnNHFLRU1nWTdBZz0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0",
    //企划ip
    ip: "恶魔五月哭",
    //其他tag
    tags: ["Dante"],
    date: randomDates(false),
  },
  {
    user: "我爱吃饭",
    userIcon: avatar[5],
    type: "compatible",
    title: "维舅",
    cover:
      "https://imglf5.lf127.net/img/f88b9bdc9e56d887/R3VzUnZPSGczSUNITU4yb3VjUTJRMWcxbGVqdVNnVk1zSEFXYS9TREEwUT0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg",
    ip: "恶魔五月哭",
    tags: ["Vergil"],
    date: randomDates(false),
  },
  {
    user: "狗尾巴草",
    userIcon: avatar[6],
    type: "pure",
    title: "这是一份神秘的饭",
    cover: "",
    ip: "谎",
    tags: ["谎"],
    date: randomDates(false),
  },
];
