"use client";

import Marquee from "react-fast-marquee";

import { SectionHeader } from "./SectionHeader";
import { TargetMarketCard } from "./TargetMarketCard";
import lembagaAmal from "../assets/lembaga-amal.jpeg";
import nonProfit from "../assets/non-profit.jpeg";
import pendidikan from "../assets/pendidikan.jpeg";
import tempatIbadah from "../assets/tempat-ibadah.jpeg";

export const TargetMarketsSection = () => {
  return (
    <section className="relative w-full h-auto flex flex-col items-center gap-8 py-8 md:py-16">
      <div className="hidden md:block w-[350px] pointer-events-none aspect-square absolute top-[-168px] right-[0] bg-[#15A670]/20 rounded-full blur-3xl" />
      <article className="px-6 md:px-20 lg:px-[100px]">
        <SectionHeader
          className="text-center lg:text-left"
          heading="Galang Dana Untuk Tujuan Apapun !"
        />
      </article>

      <section className="flex flex-col gap-10 w-full">
        <Marquee className="py-4 -my-4">
          <TargetMarketCard
            heading="Pendidikan"
            imageUrl={pendidikan}
            message="Bantuan untuk keperluan sekolah, kuliah."
          />
          <TargetMarketCard
            heading="Non-profit"
            imageUrl={nonProfit}
            message="Organisasi nirlaba, Yayasan"
          />
          <TargetMarketCard
            heading="Tempat Ibadah"
            imageUrl={tempatIbadah}
            message="Donasi untuk pembangunan/perbaikan tempat ibadah."
          />
          <TargetMarketCard
            heading="Lembaga Amal"
            imageUrl={lembagaAmal}
            message="Lembaga Zakat, Infaq dan Shodaqoh."
          />
        </Marquee>
        <Marquee className="py-4 -my-4" direction="right">
          <TargetMarketCard
            heading="Pendidikan"
            imageUrl={pendidikan}
            message="Bantuan untuk keperluan sekolah, kuliah."
          />
          <TargetMarketCard
            heading="Non-profit"
            imageUrl={nonProfit}
            message="Organisasi nirlaba, Yayasan"
          />
          <TargetMarketCard
            heading="Tempat Ibadah"
            imageUrl={tempatIbadah}
            message="Donasi untuk pembangunan/perbaikan tempat ibadah."
          />
          <TargetMarketCard
            heading="Lembaga Amal"
            imageUrl={lembagaAmal}
            message="Lembaga Zakat, Infaq dan Shodaqoh."
          />
        </Marquee>
      </section>
    </section>
  );
};
