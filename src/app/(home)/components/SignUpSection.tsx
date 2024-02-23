import Image from "next/image";

import { Button } from "@kawanbantu/components";

import { LaunchInformation } from "./LaunchInformation";
import { SectionHeader } from "./SectionHeader";
import signUpFigure from "../assets/sign-up-figure.svg";

export const SignUpSection = () => {
  return (
    <section className="relative w-full h-screen flex flex-col lg:flex-row items-center gap-16 py-8 md:py-16 px-6 md:px-20 lg:px-[100px] overflow-hidden">
      <article className="flex flex-col items-center lg:items-start justify-center">
        <LaunchInformation />
        <SectionHeader
          className="mt-2 text-center lg:text-left"
          heading="Bergabunglah dalam waitlist kami!"
          message="Masuk ke waitlist kami sehingga Anda selalu mendapatkan informasi
          terbaru tentang aplikasi KawanBantu."
          styles={{ heading: "max-w-[400px]", message: "max-w-[400px]" }}
        />
        <Button asChild className="w-full mt-8 lg:mt-12 text-center rounded-xl">
          <a
            href="https://forms.gle/wi3G3RKHWVUPKRXn6"
            rel="external"
            target="_blank"
          >
            Gabung Waitlist
          </a>
        </Button>
      </article>
      <figure className="lg:-mr-[100px] self-start">
        <Image alt="An overview of KawanBantu" src={signUpFigure} />
      </figure>
    </section>
  );
};
