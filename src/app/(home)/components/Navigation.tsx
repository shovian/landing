import Image from "next/image";
import Link from "next/link";

import { Button } from "@kawanbantu/ui";

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-20 lg:px-[100px]">
      <Link
        aria-label="Go to home page"
        href={{ pathname: "/" }}
        className="outline-none focus-visible:scale-105 transition-transform ease-out duration-200"
      >
        <Image alt="Logo" src="/logo.svg" width={70} height={53} priority />
      </Link>
      <Button asChild variant="outline">
        <a
          href="https://forms.gle/wi3G3RKHWVUPKRXn6"
          rel="external"
          target="_blank"
        >
          Gabung Waitlist
        </a>
      </Button>
    </nav>
  );
};
