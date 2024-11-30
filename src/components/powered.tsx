import React, { useCallback, useState } from "react";

import Head from "next/head";

import drawnDownAbyss1 from "@/assets/drawn-down-abyss-1.png";
import froggo1 from "@/assets/froggo-swing-n-grapple-1.png";
import resync1 from "@/assets/resync-1.png";
import tuxemon1 from "@/assets/tuxemon-1.png";

import PoweredCard from "./powered-card";

const games = [
  {
    name: "Drawn Down Abyss",
    author: "DaFluffyPotato",
    image: drawnDownAbyss1.src,
    mainlink: "https://store.steampowered.com/app/1146560/Drawn_Down_Abyss/",
    itchio: "https://dafluffypotato.itch.io/drawn-down-abyss",
    steam: "https://store.steampowered.com/app/1146560/Drawn_Down_Abyss/",
    youtube: "https://www.youtube.com/watch?v=lmaEy_2LMdo",
  },
  {
    name: "Froggo Swing 'n Grapple",
    author: "smellyfrog",
    image: froggo1.src,
    mainlink:
      "https://store.steampowered.com/app/1743930/Froggo_Swing_n_Grapple/",
    itchio: "https://smellyfrog.itch.io/froggo-swing-n-grapple",
    steam: "https://store.steampowered.com/app/1743930/Froggo_Swing_n_Grapple/",
    youtube: "https://www.youtube.com/watch?v=GufkQcT-H2k",
  },
  {
    name: "RESYNC",
    author: "Ghast",
    image: resync1.src,
    mainlink: "https://ghastly.itch.io/resync",
    itchio: "https://ghastly.itch.io/resync",
  },
  {
    name: "Tuxemon",
    author: "The Tuxemon Community",
    image: tuxemon1.src,
    mainlink: "https://github.com/Tuxemon/Tuxemon",
  },
];

export default function Powered() {
  const [currentGameId, setCurrentGameId] = useState(0);

  const changeBackground = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setCurrentGameId((id) => (id + 1) % games.length);
    },
    [],
  );

  return (
    <>
      <Head>
        {games.map((data, key) => (
          <link key={key} rel="preload" href={data.image} as="image" />
        ))}
      </Head>
      <div
        className="flex justify-center items-center min-h-[80vh] bg-gray-500 bg-multiply bg-no-repeat bg-center bg-cover [image-rendering:crisp-edges] md:py-[50px]"
        style={{
          backgroundImage: `url(${games[currentGameId]!.image})`,
        }}
      >
        <div className="w-[1200px] max-w-[90vw]">
          <div className="font-bold text-[2.1rem]">Pygame Powered</div>
          <p className="mb-4">
            Over the many years pygame has been around, there have been amazing
            projects created by the community.
          </p>
          <div className="flex justify-center md:block">
            {games.map((data, key) => (
              <div key={key} onMouseEnter={changeBackground} data-info={key}>
                <PoweredCard
                  name={data.name}
                  author={data.author}
                  link={data.mainlink}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
