import Image from "next/image";

import achmadZakyFoundation from "../assets/achmad-zaky-foundation.png";
import founderPlus from "../assets/founder+.png";
import ocbcNispVentura from "../assets/ocbc-nisp-ventura.png";
import pertamudaSeedAndScale from "../assets/pertamuda-seed-and-scale.png";

export const SocialProofSection = () => {
  return (
    <section className="relative w-full h-auto flex flex-col gap-16 py-8 md:py-16 px-6 md:px-20 lg:px-[100px]">
      <div className="pointer-events-none w-[200px] lg:w-[240px] aspect-square absolute top-[-120px] left-[-120px] bg-[#A359C3]/20 rounded-full blur-3xl" />
      <article className="flex flex-col gap-8">
        <h2 className="uppercase font-semibold text-lg leading-8 text-center text-black-secondary">
          Our Recognitions
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 items-start gap-8">
          <li className="flex flex-col items-center gap-6">
            <Image
              alt="Founder+"
              className="h-14 object-contain"
              src={founderPlus}
            />
            <p className="w-full text-base leading-6 text-center text-[#737373]">
              Backed by Founder+ Incubation. <br /> Top 20 Startup.
            </p>
          </li>
          <li className="flex flex-col items-center gap-6">
            <Image
              alt="Achmad Zaky Foundation"
              className="h-14 object-contain"
              src={achmadZakyFoundation}
            />
            <p className="w-full text-base leading-6 text-center text-[#737373]">
              Backed by Achmad Zaky <br /> Foundation StartUp Incubator.
            </p>
          </li>
          <li className="flex flex-col items-center gap-6">
            <Image
              alt="OCBC NISP Ventura"
              className="h-14 object-contain"
              src={ocbcNispVentura}
            />
            <p className="w-full text-base leading-6 text-center text-[#737373]">
              Top 20 OCBC Nisp Ventura <br /> StartUp Challenge
            </p>
          </li>
          <li className="flex flex-col items-center gap-6">
            <Image
              alt="Pertamuda Seed And Scale"
              className="h-14 object-contain"
              src={pertamudaSeedAndScale}
            />
            <p className="w-full text-base leading-6 text-center text-[#737373]">
              Top 10 Pertamuda Seed & Scale
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
};
