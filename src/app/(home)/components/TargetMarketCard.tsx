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
        className="w-[104px] h-[104px] rounded-2xl"
      />
      <header className="flex flex-col gap-1">
        <h3 className="text-lg md:text-2xl">{heading}</h3>
        <p className="text-base text-secondary">{message}</p>
      </header>
    </article>
  );
};
