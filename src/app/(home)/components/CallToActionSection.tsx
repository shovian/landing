import { Button } from "@kawanbantu/components";

import { LaunchInformation } from "./LaunchInformation";
import { SectionHeader } from "./SectionHeader";

export const CallToActionSection = () => {
  return (
    <section className="relative w-full h-auto flex flex-col items-center gap-8 py-8 md:py-16 px-6 md:px-20 lg:px-[100px]">
      <div className="absolute pointer-events-none left-[-176px] w-[351px] aspect-square rounded-full bg-[#A359C3]/20 blur-3xl" />
      <div className="flex flex-col items-center gap-4">
        <LaunchInformation />
        <SectionHeader
          styles={{
            heading: "max-w-[680px] text-center",
            message: "max-w-[560px] text-center",
          }}
          heading="Bergabunglah dalam waitlist kami!"
          message="Masuk ke waitlist kami sehingga Anda selalu mendapatkan informasi terbaru tentang aplikasi KawanBantu."
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
      <div className="absolute pointer-events-none top-[244px] left-[-49px] w-[351px] aspect-square rounded-full bg-[#15A670]/20 blur-3xl" />
    </section>
  );
};
