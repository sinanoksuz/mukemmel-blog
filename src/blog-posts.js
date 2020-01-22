export const getPosts = () => {
  return [
    {
      title: "1500TL ödül! Sen de yarışmaya katıl!",
      subject:"konu konu konu",
      slug: "yarisma",
      details: require("./posts/yarisma.md").default,
      date: "5 Oct 2019",
      img:"/logo.png"
    },
    {
      title: "Örnek yazı",
      subject:"konu konu konu",
      slug: "ornek-yazi",
      details: require("./posts/ornek-yazi.md").default,
      date: "5 Oct 2019",
      img:"/topnav.png"
    },
    {
      title: "Merhaba dünya!",
      subject:"konu konu konu",
      slug: "merhaba",
      details: require("./posts/merhaba.md").default,
      date: "5 Oct 2019",
      img:"/bgimg.png"
      
    }
  ];
};
