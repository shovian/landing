import { Button } from "@kawanbantu/components";

import Image from "next/image";

import { SectionHeader } from "./SectionHeader";
import heroFigure from "../assets/hero-figure.svg";

export const HeroSection = () => {
  return (
    <section className="flex flex-col px-6 md:px-20 lg:px-[100px]">
      <article className="flex items-center justify-center pt-12">
        <div className="flex flex-col items-center gap-8">
          <SectionHeader
            as="h1"
            heading="Miliki Platform Donasimu Sendiri dalam Hitungan Menit!"
            message="Mulai galang dana untuk tujuan apapun dan kepada siapapun dengan
            cepat, mudah, dan aman"
            styles={{
              heading: "max-w-[640px] text-center",
              message: "max-w-[520px] text-center",
            }}
          />
          <Button asChild>
            <a
              href="https://forms.gle/wi3G3RKHWVUPKRXn6"
              rel="external"
              target="_blank"
            >
              Gabung Waitlist
            </a>
          </Button>
        </div>
      </article>
      <figure>
        <Image
          alt="An overview of KawanBantu"
          className="relative left-1/2 translate-x-[-46%]"
          src={heroFigure}
        />
      </figure>
    </section>
  );
};
