const config = [
  {
    title: "Timochan",
    link: "https://timochan.cn",
    desc: "Let's start learning",
    avatar:
      "./avatar/timochan.png",
  },
  {
    title: "Expliyh",
    link: "https://www.mt6735.top/",
    avatar:
      "./avatar/expliyh.ico",
  },
  {
    title: "IbeXlwy",
    link: "https://ibexlwy.com/",
    avatar: "./avatar/lmj.png",
    desc: "人活着，不能为了贡品",
  },
  {
    title: "JiHua",
    link: "https://jihau.com/",
    avatar:
      "./avatar/jihua.png",
  },
  {
    title: "江村暮",
    link: "https://rene.wang",
    avatar:
      "./avatar/jcm.png",
    desc: "写在kindle里的博客",
  },
  {
    title: "Signaliks",
    link: "https://iks.moe/",
    avatar: "./avatar/iks.jpeg",
    desc: "Operator",
  },
  {
    title: "喵二の小博客",
    link: "https://www.miaoer.xyz",
    avatar: "./avatar/miaoer.jpeg",
    desc: "缘，妙不可言",
  },
  {
    title: "可愛い松",
    link: "https://blog.iucky.cn/",
    avatar: "./avatar/wibus.jpeg",
    desc: "有秉性且正直的松",
  },
  {
    title: "静かな森",
    link: "https://innei.ren",
    avatar: "./avatar/innei.jpeg",
    desc: "致虚极，守静笃。"
  },
  {
    title: "保罗的小宇宙",
    link: "https://paugram.com",
    avatar: "./avatar/paul.jpeg",
    desc: "Still single, still waiting..."
  },
  {
    title: "Justin Sun",
    link: "https://jsun.lol",
    avatar: "./avatar/jsun969.png",
    desc: "LOL! Welcome to Justin Sun's personal website!"
  }
] as data[];

export default config;

export type data = {
  avatar: string;
  title: string;
  desc?: string;
  link: string;
};
