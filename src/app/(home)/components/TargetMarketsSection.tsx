"use client";

import Marquee from "react-fast-marquee";

import { SectionHeader } from "./SectionHeader";
import { TargetMarketCard } from "./TargetMarketCard";
import kampanyeSosial from "../assets/kampanye-sosial.png";
import komunitas from "../assets/komunitas.png";
import lembagaAmal from "../assets/lembaga-amal.jpeg";
import nonProfit from "../assets/non-profit.jpeg";
import organisasi from "../assets/organisasi.png";
import pendidikan from "../assets/pendidikan.jpeg";
import perusahaan from "../assets/perusahaan.png";
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
            heading="Organisasi"
            imageUrl={organisasi}
            message="Program sosial, bantuan sosial, donasi internal"
          />
          <TargetMarketCard
            heading="Komunitas"
            imageUrl={komunitas}
            message="Komunitas, lembaga masyarakat."
          />
          <TargetMarketCard
            heading="Kampanye Sosial"
            imageUrl={kampanyeSosial}
            message="Donasi untuk aksi-aksi sosial."
          />
          <TargetMarketCard
            heading="Perusahaan"
            imageUrl={perusahaan}
            message="Program sosial perusahaan, CSR, Donasi internal"
          />
        </Marquee>
      </section>
    </section>
  );
};
