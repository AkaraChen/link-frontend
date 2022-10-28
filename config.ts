const config = [
  {
    title: "Timochan",
    link: "https://timochan.cn",
    desc: "Let's start learning",
    avatar:
      "https://pic.rmb.bdstatic.com/bjh/4d22b9343b30540efed365a52262be87.png",
  },
  {
    title: "Expliyh",
    link: "https://www.mt6735.top/",
    avatar:
      "https://cdn.jsdelivr.net/gh/expliyh/static_expli_top@main/static/favicon/afavicon.ico",
  },
  {
    title: "IbeXlwy",
    link: "https://ibexlwy.com/",
    avatar: "https://ibexlwy.com/photo/head.png",
    desc: "人活着，不能为了贡品",
  },
  {
    title: "JiHua",
    link: "https://jihau.com/",
    avatar:
      "https://pic.rmb.bdstatic.com/bjh/aa2e26a532fed409885b6506eeeebcee.png",
  },
  {
    title: "江村暮",
    link: "https://rene.wang",
    avatar:
      "https://pic.rmb.bdstatic.com/bjh/0d1dda383594903e2ca3b42a38167550.png",
    desc: "写在kindle里的博客",
  },
  {
    title: "Signaliks",
    link: "https://iks.moe/",
    avatar: "https://static.gmx0.cn/myIndex/avatar.jpg",
    desc: "Operator",
  },
  {
    title: "喵二の小博客",
    link: "https://www.miaoer.xyz",
    avatar:
      "https://dd-static.jd.com/ddimg/jfs/t1/25080/8/19573/58432/63295dbcE35bcebb8/4296442afe71ac89.png",
    desc: "缘，妙不可言",
  },
  {
    title: "秉松博客",
    link: "https://blog.iucky.cn/",
    avatar: "https://q1.qlogo.cn/g?b=qq&nk=1596355173&s=640",
    desc: "有秉性且正直的松",
  },
] as data[];

export default config;

export type data = {
  avatar: string;
  title: string;
  desc?: string;
  link: string;
};
