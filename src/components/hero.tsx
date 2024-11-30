import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex items-center justify-around px-[75px] h-[90vh] font-bold">
      <div className="text-[3vw]">
        <p>
          <u>
            <em>The</em>
          </u>{" "}
          Python
        </p>
        <div className="flex items-center gap-2">
          <p className="bg-gradient-to-r from-[rgb(22,125,53)] to-[rgb(63,188,111)] bg-clip-text text-transparent">
            game library
          </p>
          <p>used</p>
        </div>
        <p>to build powerful games</p>
        <div className="w-max bg-[rgb(20,20,20)] rounded-[1vw] p-[1vw] mt-2 max-sm:hidden">
          <p className="text-[1.2vw] overflow-hidden whitespace-nowrap opacity-0 text-white pr-[0.5ch] border-r-2 border-white animate-[typing_1.5s_steps(35,end)_1s_forwards,blinking_600ms_step-end_8_forwards]">
            {`$ pip install pygame-ce`}
          </p>
        </div>
      </div>
      <div className="text-base font-normal max-md:hidden">
        <Link href="https://dafluffypotato.itch.io/hue-flowing">
          <Image
            src="https://i.imgur.com/7mOk5E7.gif"
            alt="Hue Flowing"
            width={450}
            height={380}
            className="rounded-lg bg-[aliceblue] object-cover"
            unoptimized
          />
        </Link>
        <p className="mt-2 text-center">
          &quot;Hue Flowing&quot; by DaFluffyPotato
        </p>
      </div>
    </div>
  );
}
