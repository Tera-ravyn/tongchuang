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
        userIcon: avatar[6],
        context: "草",
        date: randomDates(),
      },
      {
        user: "用户昵称",
        userIcon: avatar[6],
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
        userIcon: avatar[6],
        context: "草",
        date: randomDates(),
      },
      {
        user: "用户昵称",
        userIcon: avatar[6],
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
    type: "pure",
    tag: "外壁吧薄",
    tags: ["歪比巴伯", "崴笔吧泊"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ad molestias libero, amet facere quasi? Vel earum quas, facere reprehenderit inventore nesciunt maiores quod dolorum architecto praesentium, quidem laudantium suscipit.",
  },
];
//点图历史的图片地址
export const history = [
  "https://wx1.sinaimg.cn/orj360/006bPIrHly1hk6mch2u14j31ac1uc1l0.jpg",
  "https://wx1.sinaimg.cn/orj360/006bPIrHly1hk6mch2u14j31ac1uc1l0.jpg",
  "https://wx1.sinaimg.cn/orj360/006bPIrHly1hk6mch2u14j31ac1uc1l0.jpg",
  "https://wx1.sinaimg.cn/orj360/006bPIrHly1hk6mch2u14j31ac1uc1l0.jpg",
  "https://wx1.sinaimg.cn/orj360/006bPIrHly1hk6mch2u14j31ac1uc1l0.jpg",
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
    title: "标题",
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
    type: "pure",
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
    user: "战斗爽",
    userIcon: avatar[6],
    type: "pure",
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
        user: "用户1",
        motto: "狂暴同人女",
        type: "compatible",
      },
      {
        userIcon: randomAvatar(),
        user: "用户2",
        motto: "温柔同人女",
        type: "pure",
      },
    ],
  },
  {
    group: "分组1",
    users: [
      {
        userIcon: randomAvatar(),
        user: "用户1",
        motto: "狂暴同人女",
        type: "compatible",
      },
      {
        userIcon: randomAvatar(),
        user: "用户2",
        motto: "狂暴同人男",
        type: "pure",
      },
    ],
  },
  {
    group: "分组2",
    users: [
      {
        userIcon: randomAvatar(),
        user: "用户1",
        motto: "社畜",
        type: "compatible",
      },
      {
        userIcon: randomAvatar(),
        user: "用户2",
        motto: "高级社畜",
        type: "pure",
      },
    ],
  },
  {
    group: "分组3",
    users: [
      {
        userIcon: randomAvatar(),
        user: "用户1",
        motto: "阳光开朗大学生",
        type: "compatible",
      },
    ],
  },
];
//订阅用户
export const subscribeUser = [
  {
    //发布人id
    user: "用户昵称",
    //发布人头像
    userIcon: avatar[6],
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
    //正文
    context:
      "<p>主题IP：XXX漫画<br />主办方：X0社团/个人<br />企划形式：线上24h展览/线下会展/讨论某话会<br />企划介绍：求求你&hellip;</p>",
    date: randomDates(false),
    class: "project",
  },
  {
    user: "用户昵称",
    userIcon: avatar[6],
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
    date: randomDates(false),
    class: "project",
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
    user: "用户昵称",
    userIcon: avatar[6],
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
    date: randomDates(false),
    class: "project",
  },
].sort((a, b) => b.date.diff(a.date));
//订阅ip
export const subscribeIp = [
  {
    //发布人id
    user: "用户昵称",
    //发布人头像
    userIcon: avatar[6],
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
    //正文
    context:
      "<p>主题IP：XXX漫画<br />主办方：X0社团/个人<br />企划形式：线上24h展览/线下会展/讨论某话会<br />企划介绍：求求你&hellip;</p>",
    date: randomDates(false),
    class: "project",
  },
  {
    user: "用户昵称",
    userIcon: avatar[6],
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
    date: randomDates(false),
    class: "project",
  },
  {
    user: "用户昵称",
    userIcon: avatar[6],
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
    date: randomDates(false),
    class: "project",
  },
].sort((a, b) => b.date.diff(a.date));
export const sponsor = [
  {
    //发布人id
    user: "用户昵称",
    //发布人头像
    userIcon: avatar[6],
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
    date: randomDates(false),
  },
  {
    user: "用户昵称",
    userIcon: avatar[6],
    type: "pure",
    title: "企划2",
    cover:
      "https://imglf5.lf127.net/img/2eec59d6dc55fdfb/UmtjYTNiMEFNUlhuNjBoeVdUZDBHY2t6UWRFSUFEdk4rakZnaldab0NlYz0.png?imageView&thumbnail=1000x0&type=png",
    ip: "tag1",
    tags: ["tag1", "tag2", "tag3"],
    date: randomDates(false),
  },
  {
    user: "用户昵称",
    userIcon: avatar[6],
    type: "pure",
    title: "企划3",
    cover: "",
    ip: "tag1",
    tags: ["tag1", "tag2", "tag3"],
    date: randomDates(false),
  },
];
