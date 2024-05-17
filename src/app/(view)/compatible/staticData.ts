import { randomDates } from "@/app/interface";
import avatar from "@/assets/Image/avatar.jpg";
import test from "@/assets/Image/test0.jpeg";
import test1 from "@/assets/Image/test1.jpg";
import test2 from "@/assets/Image/test2.jpeg";
import dayjs from "dayjs";

/*---------个人首页相关---------*/
//个人主页作品列表
export const PiecesList = [
  {
    cover: avatar,
    description: "不要再打游戏了好吗？好的。但打游戏是一种人生态度……",
    time: dayjs("2024-04-13 21:29:10"),
  },
  {
    cover: test,
    description: "我爱吃饭，饭真好吃，真想一辈子吃饭。",
    time: dayjs("2024-04-13 19:55:24"),
  },
  {
    cover: avatar,
    description: "从前有座山，山里有座庙，庙里有个老和尚给小和尚讲故事",
    time: dayjs("2024-02-18 00:03:35"),
  },
  {
    cover: avatar,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem in consequuntur similique dignissimos quaerat earum explicabo temporibus vitae nobis culpa enim, eaque ab voluptate quis aspernatur quod alias architecto? Incidunt!",
    time: dayjs("2024-01-17 12:26:11"),
  },
];
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
    cover: test1,
    title: "外币巴伯",
    type: "pure",
    tag: "外壁吧薄",
    tags: ["歪比巴伯", "崴笔吧泊"],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse assumenda architecto quaerat optio perferendis dolore temporibus minima voluptate? Doloribus corrupti saepe repellat deleniti ullam assumenda voluptatibus delectus debitis ad!",
  },
  {
    cover: test2,
    title: "外币巴伯",
    type: "compatible",
    tag: "外壁吧薄",
    tags: ["歪比巴伯", "崴笔吧泊"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ad molestias libero, amet facere quasi? Vel earum quas, facere reprehenderit inventore nesciunt maiores quod dolorum architecto praesentium, quidem laudantium suscipit.",
  },
];
//点图历史的图片地址
export const history = [
  "https://m.qpic.cn/psc?/V540G2XK2NvuIf2mCCsH1NvPPH4Nq2pJ/ruAMsa53pVQWN7FLK88i5j6tkz36O8wBZlzpDnBkD4AKYz0eFhmSu0PgTvrxqklnBhXApbxw10Lp6WR5QZj9T32QQsjJ0O2ORXIOo.RQJKA!/mnull&bo=nQTsBp0E7AYDCSw!&rf=photolist&t=5",
  "https://m.qpic.cn/psc?/V540G2XK2NvuIf2mCCsH1NvPPH4Nq2pJ/ruAMsa53pVQWN7FLK88i5j6tkz36O8wBZlzpDnBkD4AKYz0eFhmSu0PgTvrxqklnBhXApbxw10Lp6WR5QZj9T32QQsjJ0O2ORXIOo.RQJKA!/mnull&bo=nQTsBp0E7AYDCSw!&rf=photolist&t=5",
  "https://m.qpic.cn/psc?/V540G2XK2NvuIf2mCCsH1NvPPH4Nq2pJ/ruAMsa53pVQWN7FLK88i5j6tkz36O8wBZlzpDnBkD4AKYz0eFhmSu0PgTvrxqklnBhXApbxw10Lp6WR5QZj9T32QQsjJ0O2ORXIOo.RQJKA!/mnull&bo=nQTsBp0E7AYDCSw!&rf=photolist&t=5",
  "https://m.qpic.cn/psc?/V540G2XK2NvuIf2mCCsH1NvPPH4Nq2pJ/ruAMsa53pVQWN7FLK88i5j6tkz36O8wBZlzpDnBkD4AKYz0eFhmSu0PgTvrxqklnBhXApbxw10Lp6WR5QZj9T32QQsjJ0O2ORXIOo.RQJKA!/mnull&bo=nQTsBp0E7AYDCSw!&rf=photolist&t=5",
  "https://m.qpic.cn/psc?/V540G2XK2NvuIf2mCCsH1NvPPH4Nq2pJ/ruAMsa53pVQWN7FLK88i5j6tkz36O8wBZlzpDnBkD4AKYz0eFhmSu0PgTvrxqklnBhXApbxw10Lp6WR5QZj9T32QQsjJ0O2ORXIOo.RQJKA!/mnull&bo=nQTsBp0E7AYDCSw!&rf=photolist&t=5",
];

/*---------广场相关---------*/
//广场作品浏览列表
export const discovery = [
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
//企划列表
export const project = [
  {
    //发布人id
    user: "用户昵称",
    //发布人头像
    userIcon: avatar,
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
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    //评论
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
    //正文
    context:
      "<p>主题IP：XXX漫画<br />主办方：X0社团/个人<br />企划形式：线上24h展览/线下会展/讨论某话会<br />企划介绍：求求你&hellip;</p>",
    date: randomDates(),
    class: "project",
  },
  {
    user: "用户昵称",
    userIcon: avatar,
    type: "pure",
    title: "企划2",
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    ip: "tag1",
    tags: ["tag1", "tag2", "tag3"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    context: "<p>这是一个咕咕咕的企划</p>",
    date: randomDates(),
    class: "project",
  },
  {
    user: "用户昵称",
    userIcon: avatar,
    type: "pure",
    title: "企划3",
    cover: "",
    ip: "tag1",
    tags: ["tag1", "tag2", "tag3"],
    pawn: Math.floor(Math.random() * 500),
    crown: Math.floor(Math.random() * 500),
    fav: Math.floor(Math.random() * 500),
    share: Math.floor(Math.random() * 500),
    context:
      "<div><div>&nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reiciendis praesentium tempore molestiae harum, error veritatis quo, sed rem accusantium, ipsa exercitationem tempora saepe animi minus corrupti dolore sequi corporis.</div><div><div><div>&nbsp; &nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore commodi atque libero distinctio est culpa rem quod iusto modi, nobis dolores quidem illum nemo sit nisi illo sapiente dicta!</div></div></div></div>",
    date: randomDates(),
    class: "project",
  },
].sort((a, b) => b.date.diff(a.date));
//历史搜索记录
export const searchHistory = ["词条1", "词条2", "词条3"];
