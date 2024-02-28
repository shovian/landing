import Image, { type StaticImageData } from "next/image";
import { type FC, Fragment } from "react";

import { Icons } from "@kawanbantu/components";

import { SectionHeader } from "./SectionHeader";
import firstBeforeAfter from "../assets/first-before-after.jpeg";
import secondBeforeAfter from "../assets/second-before-after.jpeg";
import thirdBeforeAfter from "../assets/third-before-after.jpeg";
import fourthBeforeAfter from "../assets/fourth-before-after.jpeg";

type BeforeAfterCardProps = {
  after: string;
  before: string;
  image: StaticImageData;
  Icon: typeof Icons.Chain;
};

const BeforeAfterCard: FC<BeforeAfterCardProps> = ({
  after,
  before,
  image,
  Icon,
}) => {
  return (
    <Fragment>
      <li className="w-full grid lg:grid-cols-[1fr_96px_1fr] items-center lg:gap-4 lg:px-[100px] rounded-[32px] shadow-default lg:shadow-none">
        <div>
          <p className="px-4 pt-4 lg:hidden text-black-tertiary">Sebelum</p>
          <div className="flex items-center gap-4 py-4 px-6 rounded-[32px] lg:shadow-default">
            <Image
              alt="Sharing info campaign dengan no. rekening dan kontak pain value"
              className="flex-shrink-0 w-[72px] h-[72px] object-cover rounded-full"
              src={image}
            />
            <p className="text-lg md:text-xl leading-7 text-secondary">
              {before}
            </p>
          </div>
        </div>
        <Icons.Arrow className="hidden lg:block w-full" />
        <div>
          <p className="px-4 lg:hidden text-black-tertiary">Sesudah</p>
          <div className="flex items-center gap-4 py-4 px-6 rounded-[32px] lg:shadow-default">
            <div className="flex-shrink-0 w-[72px] h-[72px] flex items-center justify-center rounded-full bg-brand-green-primary">
              <Icon className="text-white" />
            </div>
            <p className="text-lg md:text-xl leading-7 text-secondary">
              {after}
            </p>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export const BeforeAfterSection = () => {
  return (
    <section className="relative w-full h-auto flex flex-col items-center gap-16 py-8 md:py-16 px-6 md:px-20 lg:px-[100px] overflow-hidden">
      <SectionHeader
        className="text-center lg:text-left"
        heading={
          <Fragment>
            <span className="text-brand-green-primary">Revolusikan</span>{" "}
            Penggalangan Danamu!
          </Fragment>
        }
        message="Bersama KawanBantu, revolusikan penggalangan danamu dengan :"
      />

      <section className="flex flex-col gap-4">
        <div className="hidden w-full lg:grid grid-cols-[1fr_96px_1fr] gap-4 lg:px-[100px]">
          <h3 className="font-bold text-base text-center text-secondary uppercase">
            Before
          </h3>
          <div />
          <h3 className="font-bold text-base text-center text-secondary uppercase">
            After
          </h3>
        </div>
        <ul className="flex flex-col gap-6">
          <BeforeAfterCard
            Icon={Icons.Chain}
            after="Berbagi info campaign dengan 1 link saja"
            before="Sharing info campaign dengan no. rekening dan kontak."
            image={firstBeforeAfter}
          />
          <BeforeAfterCard
            Icon={Icons.QR}
            after="Tanpa perlu membawa kotak, cukup dengan scan QR."
            before="Anda perlu membawa kotak donasi ke mana-mana."
            image={secondBeforeAfter}
          />
          <BeforeAfterCard
            Icon={Icons.Schedule}
            after="Masa pembuatan campaign yang lebih cepat."
            before="Masa pembuatan campaign yang lama."
            image={thirdBeforeAfter}
          />
          <BeforeAfterCard
            Icon={Icons.VolunteerActivism}
            after="Tidak perlu membayar apapun (biaya admin 5%* otomatis)"
            before="Membayar mahal untuk membangun platform"
            image={fourthBeforeAfter}
          />
        </ul>
      </section>
    </section>
  );
};
