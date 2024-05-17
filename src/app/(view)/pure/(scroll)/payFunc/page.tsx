"use client";
import PayFunc from "@/assets/icons/pay-outline.svg";
import Electric from "@/assets/icons/electric.svg";
import Bone from "@/assets/icons/bone.svg";
const func = [
  {
    title: "开通赞赏功能",
    icon: <PayFunc className="w-16 h-16 stroke-[0.65] text-black" />,
    context: [
      {
        title: "什么是赞赏功能？",
        context:
          "<p>　　赞赏功能是同创为创作者提供流量变现的一种方式，高级会员可以使用赞赏来激励创作者，同创会根据赞赏数的增幅在每周期为创作者提供相应的流量变现。<br />　　赞赏功能的目的不仅仅是激励创作者开通功能进行更多的创作，也有促进读者反馈创作者之意。<br />　　高级会员用户每月有500次赞赏份额，可以通过赞赏次数补助包以1元/50次的比例进行赞赏次数的补充。</p>",
      },
    ],
  },
  {
    title: "开通同创高级会员",
    icon: <Electric className="w-16 h-16 text-black" />,
    context: [
      {
        title: "高级会员的功能",
        context:
          "<p>普通会员：</p>    <ul>    <li>在同创平台发布自己的作品与同好交流</li>    <li>对创作者进行点赞分享评论等创作反馈</li>    <li>享受同创专有的屏蔽和个性化推流机制</li>    </ul><p>&nbsp;</p>    <p>高级会员：</p>    <ul>    <li>可以开通付费点图服务</li>    <li>对创作者进行额外的赞赏激励</li>    <li>去除内置的所有广告</li>    <li>享受同创专有的屏蔽和个性化推流机制</li>    <li>个性化的界面主题使用</li>    </ul>",
      },
    ],
  },
  {
    title: "开通付费密码锁作品",
    icon: <Bone className="w-16 h-16 text-black" />,
    context: [
      {
        title: "付费密码锁是什么？",
        context:
          "<p>　　付费密码作品是需要通过作者设置付费标准，其余用户通过付费后才能获得解锁密码的一种作品展示方式。</p>",
      },
      {
        title: "付费密码锁有什么用？",
        context:
          "<p>　　通过付费密码锁发布的作品是需要输入相应的密玛才能进行阅读，且无论是作者还是读者，使用该功能前都幕要通过实名认证。发布的作品不能通过直接保存或戴图留存，且所有收入均直接转至创作者账户，平台仅提供发布方式和隐私安全保障。</p>",
      },
    ],
  },
];
const Pay = () => {
  return (
    <div className="p-4 text-black flex flex-col items-stretch gap-y-4">
      {func.map((item, index) => {
        return (
          <div
            key={index}
            className="gap-y-2 bg-neutral-300 rounded-lg pl-6 pr-2 py-4 flex flex-col items-center "
          >
            <div className="font-title text-[18px]">{item.title}</div>
            <div className="grid grid-cols-[1fr_90px] items-center gap-x-2 w-full justify-between">
              <div className="flex flex-col items-start gap-y-2">
                {item.context.map((context, i) => (
                  <div key={index + i}>
                    <div className="font-title text-[16px]">
                      {context.title}
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: context.context }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-y-2">
                {item.icon}
                <button className="bg-pure font-title text-[14px] px-2 py-1 rounded-xl">
                  开通功能
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Pay;
