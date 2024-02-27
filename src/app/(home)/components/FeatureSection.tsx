import { type FC, type ReactNode, Fragment } from "react";

import { SectionHeader } from "./SectionHeader";

type FeatureSectionProps = {
  contentPlacement?: "left" | "right";
  children?: ReactNode;
  heading: string;
  message: string;
};

export const FeatureSection: FC<FeatureSectionProps> = ({
  contentPlacement = "left",
  children,
  heading,
  message,
}) => {
  return (
    <section className="relative w-full lg:h-screen flex flex-col lg:flex-row items-center gap-16 py-8 md:py-16 px-6 md:px-20 lg:px-[100px] overflow-hidden">
      <article className="w-full h-full flex flex-col lg:flex-row items-start bg-[#FBF3FF] rounded-[30px]">
        {contentPlacement === "left" ? (
          <Fragment>
            <div className="flex-1 order-2 lg:order-1 h-full flex flex-col justify-center bg-[#38AA90] rounded-[30px]">
              <SectionHeader
                className="p-10 md:p-14 lg:py-0 items-start"
                heading={heading}
                message={message}
                styles={{
                  heading: "max-w-[520px] text-white",
                  message: "max-w-[480px] text-[#F5F5F5]",
                }}
              />
            </div>
            <figure className="order-1 lg:order-2 flex-1 h-full">
              {children}
            </figure>
          </Fragment>
        ) : (
          <Fragment>
            <figure className="order-2 lg:order-1 flex-1 h-full">
              {children}
            </figure>
            <div className="order-1 lg:order-2 flex-1 h-full flex flex-col justify-center">
              <SectionHeader
                className="p-10 md:p-14 lg:py-0 items-start"
                heading={heading}
                message={message}
                styles={{
                  heading: "max-w-[520px] text-brand-green-primary",
                  message: "max-w-[480px] text-black-primary",
                }}
              />
            </div>
          </Fragment>
        )}
      </article>
    </section>
  );
};
