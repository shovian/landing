import Image from "next/image";
import Link from "next/link";

import { Icons } from "@kawanbantu/components";

export const Footer = () => {
  return (
    <footer className="relative w-full h-auto flex flex-col lg:flex-row items-start justify-between gap-16 py-8 md:py-16 px-6 md:px-20 lg:px-[100px]">
      <Link
        aria-label="Go to home page"
        href={{ pathname: "/" }}
        className="outline-none focus-visible:scale-105 transition-transform ease-out duration-200"
      >
        <Image
          alt="Logo"
          src="/logo-dark.svg"
          width={96}
          height={44}
          priority
        />
      </Link>
      <section className="flex items-start md:flex-row flex-col gap-8 md:gap-16">
        <nav className="flex flex-col gap-6">
          <p className="font-semibold text-base">Hubungi Kami</p>
          <ul>
            <li>
              <a
                className="inline-flex items-center gap-3"
                href="https://wa.me/6282310939778"
              >
                <Icons.Whatsapp />
                <p className="text-base text-secondary">082310939778 (Hakim)</p>
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-3"
                href="mailto:kawanbantu.com@gmail.com"
              >
                <Icons.Mail />
                <p className="text-base text-secondary">
                  kawanbantu.com@gmail.com
                </p>
              </a>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col gap-6">
          <p className="font-semibold text-base">Kunjungi Kami di</p>
          <ul>
            <li>
              <a
                className="inline-flex items-center gap-3"
                href="https://www.kawanbantu.com"
                rel="external"
              >
                <Icons.Firefox />
                <p className="text-base text-secondary">www.kawanbantu.com</p>
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-3"
                href="https://www.instagram.com/kawanbantu/"
                rel="external"
              >
                <Icons.Instagram />
                <p className="text-base text-secondary">@kawanbantu</p>
              </a>
            </li>
            <li>
              <p className="max-w-[347px] inline-flex items-start gap-3">
                <Icons.Location className="flex-shrink-0" />
                <span className="text-base text-secondary">
                  QP Office , Tanjung Mas Raya Blok B1 No. 44, Jagakarsa,
                  Jakarta Selatan, 12530
                </span>
              </p>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
};
