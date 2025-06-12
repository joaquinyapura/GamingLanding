import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutimg",
        start: "center center",
        end: "+=400 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to("#aboutimg", {
      clipPath: "circle(70.7% at 50% 50%)",
      ease: "power1.inOut",
      duration: 1,
    });
  });

  return (
    <section id="about" className="min-h-screen w-dvw">
      <div className="relative mt-36 flex flex-col items-center">
        <h2 className="font-general text-sm md:text-lg">Welcome players</h2>
        <div className="mt-5 text-center text-4xl uppercase leading-0.4 md:text-[6rem] px-2 font-zentry font-black">
          Discover The W<b>O</b>rld largest shared aventure in Argentina
        </div>

        <div id="aboutimg" className="h-dvh w-dvw mask-clip-path">
          <img src="../img/about.webp " className="size-full" />
        </div>
      </div>
    </section>
  );
};
