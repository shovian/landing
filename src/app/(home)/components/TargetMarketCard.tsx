import Image, { type StaticImageData } from "next/image";
import { type FC } from "react";

export type TargetMarketCardProps = {
  heading: string;
  imageUrl: StaticImageData;
  message: string;
};

export const TargetMarketCard: FC<TargetMarketCardProps> = ({
  heading,
  imageUrl,
  message,
}) => {
  return (
    <article className="flex items-center gap-4 p-4 rounded-[24px] shadow-default shadow-[#2627281A] mx-4">
      <Image
        alt={heading}
        src={imageUrl}
        className="w-16 h-16 md:w-[104px] md:h-[104px] rounded-lg md:rounded-2xl"
      />
      <header className="flex flex-col md:gap-1">
        <h3 className="text-base md:text-lg lg:text-2xl">{heading}</h3>
        <p className="text-sm md:text-base text-secondary">{message}</p>
      </header>
    </article>
  );
};
