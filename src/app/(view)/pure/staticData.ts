import { randomDates } from "@/app/interface";
import avatar from "@/assets/Image/avatar.jpg";
import test from "@/assets/Image/test0.jpeg";
import test3 from "@/assets/Image/test3.jpeg";
import test4 from "@/assets/Image/test4.jpg";
import dayjs from "dayjs";

/*---------个人首页相关---------*/
//个人主页作品列表
export const PiecesList = [
  {
    title: "标题",
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    date: randomDates(),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "用户昵称",
    userIcon: avatar,
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
        userIcon: avatar,
        context: "草",
        date: randomDates(),
      },
      {
        user: "用户昵称",
        userIcon: avatar,
        context: "草",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
  {
    title: "标题",
    cover: "",
    date: randomDates(),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "用户昵称",
    userIcon: avatar,
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
        userIcon: avatar,
        context: "草",
        date: randomDates(),
      },
      {
        user: "用户昵称",
        userIcon: avatar,
        context: "草",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
  {
    title: "标题",
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    date: randomDates(),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "用户昵称",
    userIcon: avatar,
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
        userIcon: avatar,
        context: "草",
        date: randomDates(),
      },
      {
        user: "用户昵称",
        userIcon: avatar,
        context: "草",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
  {
    title: "标题",
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    date: randomDates(),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "用户昵称",
    userIcon: avatar,
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
        userIcon: avatar,
        context: "草",
        date: randomDates(),
      },
      {
        user: "用户昵称",
        userIcon: avatar,
        context: "草",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
  {
    title: "标题",
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    date: randomDates(),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "用户昵称",
    userIcon: avatar,
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
        userIcon: avatar,
        context: "草",
        date: randomDates(),
      },
      {
        user: "用户昵称",
        userIcon: avatar,
        context: "草",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
  {
    title: "标题",
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    date: randomDates(),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "用户昵称",
    userIcon: avatar,
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
        userIcon: avatar,
        context: "草",
        date: randomDates(),
      },
      {
        user: "用户昵称",
        userIcon: avatar,
        context: "草",
        date: randomDates(),
      },
    ].sort((a, b) => b.date.diff(a.date)),
  },
  {
    title: "标题",
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    date: randomDates(),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    user: "用户昵称",
    userIcon: avatar,
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
        userIcon: avatar,
        context: "草",
        date: randomDates(),
      },
      {
        user: "用户昵称",
        userIcon: avatar,
        context: "草",
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
    cover: test3,
    title: "外币巴伯",
    type: "pure",
    tag: "外壁吧薄",
    tags: ["歪比巴伯", "崴笔吧泊"],
    description:
      "Voluptatum esse assumenda architecto quaerat optio perferendis dolore temporibus minima voluptate? Doloribus corrupti saepe repellat deleniti ullam assumenda voluptatibus delectus debitis ad!",
  },
  {
    cover: test4,
    title: "外币巴伯",
    type: "compatible",
    tag: "外壁吧薄",
    tags: ["歪比巴伯", "崴笔吧泊"],
    description:
      "Minima ad molestias libero, amet facere quasi? Vel earum quas, facere reprehenderit inventore nesciunt maiores quod dolorum architecto praesentium, quidem laudantium suscipit.",
  },
];
//点图历史的图片地址
export const history = [
  "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
  "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
  "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
  "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
  "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
];

/*---------广场相关---------*/
//企划列表
export const project = [
  {
    //发布人
    user: "用户昵称",
    //用户头像
    userIcon:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    //用户属性，pure-单推，compatible-兼容
    type: "pure",
    //企划标题
    title: "企划1",
    //企划封面
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    //企划ip
    ip: "tag1",
    //其他tag
    tags: ["tag1", "tag2", "tag3"],
    //主办方
    host: "社团名称",
    //企划形式
    form: "线上",
    //企划介绍
    introduction: "这是一个咕咕咕的企划",
  },
  {
    user: "用户昵称",
    userIcon:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    type: "pure",
    title: "企划2",
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    ip: "tag1",
    tags: ["tag1", "tag2", "tag3"],
    host: "社团名称",
    form: "线上",
    introduction: "这是一个咕咕咕的企划",
  },
  {
    user: "用户昵称",
    userIcon:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    type: "pure",
    title: "企划3",
    cover: "",
    ip: "tag1",
    tags: ["tag1", "tag2", "tag3"],
    host: "",
    form: "",
    introduction: "这是一个咕咕咕的企划",
  },
];
