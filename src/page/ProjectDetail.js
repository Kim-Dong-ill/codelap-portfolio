import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Youtube from "../layout/Youtube";
import LogoLink from "../layout/LogoLink";
import PhotoEx from "../layout/PhotoEx";

function ProjectDetail() {
  const list = [
    {
      title: "애경산업",
      src: "https://www.youtube.com/embed/t5aaIsIY1jw?autoplay=1&mute=1&rel=0&modestbranding=1",
      youtube: true,
      figma: false,
      github: true,
      netrifiy: true,
      youLink: "https://www.youtube.com/watch?v=t5aaIsIY1jw",
      figLink: null,
      gitLink: "https://github.com/Kim-Dong-ill/teamProject01",
      gitLink2: null,
      netLink: "https://ez-akindustry-pro.netlify.app/",
    },
    {
      title: "Kimae 쇼핑몰",
      src: "https://www.youtube.com/embed/n6yC3yjeTw8?autoplay=1&mute=1&rel=0&modestbranding=1",
      youtube: true,
      figma: false,
      github: true,
      netrifiy: false,
      youLink: "https://www.youtube.com/watch?v=n6yC3yjeTw8",
      figLink: null,
      gitLink: "https://github.com/Kim-Dong-ill/ezDong",
      gitLink2: null,
      netLink: null,
    },
    {
      title: "댕댕일주",
      src: "https://www.youtube.com/embed/xcKSNvP6u5E?autoplay=1&mute=1&rel=0&modestbranding=1",
      youtube: true,
      figma: true,
      github: true,
      netrifiy: false,
      youLink: "https://youtu.be/xcKSNvP6u5E",
      figLink:
        "https://www.figma.com/design/TcIPqruoxKdV0I80EK3tqq/%EB%8C%95%EB%8C%95-(Copy)?t=ke49hvz5yaR7g2na-0",
      gitLink: "https://github.com/Kim-Dong-ill/DDIJ-back",
      gitLink2: "https://github.com/Kim-Dong-ill/DDIJ-front",
      netLink: null,
    },
    {
      title: "별숲",
      src: "https://www.youtube.com/embed/zi9VBh7yJ6o?autoplay=1&mute=1&rel=0&modestbranding=1",
      youtube: true,
      figma: true,
      github: true,
      netrifiy: false,
      youLink: "https://www.youtube.com/watch?v=zi9VBh7yJ6o",
      figLink:
        "https://www.figma.com/design/HcpCr11vYCScNYvEoseG68/%EC%BA%A0%ED%95%91%EA%B0%80%EC%9E%90-(Copy)?node-id=76-12&t=DfNpK9GARgt238Zg-0",
      gitLink: "https://github.com/DongBosco/starforest_back",
      gitLink2: "https://github.com/blueheeya/starforest_front",
      netLink: null,
    },
    {
      title: "강서도서관",
      src: "https://www.youtube.com/embed/4gEyjsXVTOo?autoplay=1&mute=0&rel=0&modestbranding=1",
      youtube: true,
      figma: true,
      github: true,
      netrifiy: false,
      youLink: "https://www.youtube.com/watch?v=4gEyjsXVTOo",
      figLink:
        "https://www.figma.com/design/Vk4C2qeD0vppeWZ0rKD0T3/%EA%B0%95%EC%84%9C%EB%8F%84%EC%84%9C%EA%B4%80-(Copy)?node-id=2259-15221&node-type=frame&t=gEB0p6wQoKTkLucb-0",
      gitLink: "https://github.com/Kim-Dong-ill/gangseoLib",
      gitLink2: null,
      netLink: "https://gangseolibrary.netlify.app/",
    },
  ];
  return (
    <div className="website">
      <Header />
      <Youtube list={list} />
      <PhotoEx />
      <LogoLink list={list} />
      <Footer />
    </div>
  );
}

export default ProjectDetail;
