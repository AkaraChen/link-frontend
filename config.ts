const config = [
    {
        title: "TimochanのBlog",
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
        avatar: "https://pic.rmb.bdstatic.com/bjh/aa2e26a532fed409885b6506eeeebcee.png"
    },
] as data[]

export default config

export type data = {
    avatar: string;
    title: string;
    desc?: string;
    link: string;
};