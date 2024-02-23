import Image from "next/image";
import { Fragment } from "react";

import { FeatureSection } from "./FeatureSection";
import bagikanInfoFeature from "../assets/bagikan-info-feature.svg";
import selfSpaceFeature from "../assets/self-space-feature.svg";
import tidakMenungguFeature from "../assets/tidak-menunggu-feature.svg";
import tidakRibetFeature from "../assets/tidak-ribet-feature.svg";
import tingkatkanDonasiFeature from "../assets/tingkatkan-donasi-feature.svg";

export const FeaturesSection = () => {
  return (
    <Fragment>
      <FeatureSection
        heading="Tingkatkan donasimu dengan alur donasi yang lebih mudah dan cepat"
        message="Seluruh proses donasi langsung diproses di halaman campaign-mu dan dikonfirmasi otomatis oleh sistem KawanBantu, tidak ada lagi ruang untuk penipuan"
      >
        <Image
          alt="Illustration describing how easy it is to improve your donation with KawanBantu"
          className="absolute right-16 top-1/2 -translate-y-1/2"
          src={tingkatkanDonasiFeature}
        />
      </FeatureSection>
      <FeatureSection
        contentPlacement="right"
        heading="Tidak lagi ribet mengatur penggalangan danamu"
        message="Semua proses  dipermudah dengan sistem kami. Kamu bisa pantau penggalangan danamu dari satu dashboard saja"
      >
        <Image
          alt="Illustration describing convenient of donating with KawanBantu"
          className="absolute left-16 top-1/2 -translate-y-1/2"
          src={tidakRibetFeature}
        />
      </FeatureSection>
      <FeatureSection
        heading="Tidak perlu menunggu untuk membuat campaign "
        message="karena ini adalah platform donasimu sendiri, kamu bebas membuat dan membagikan campaign sesuai kebutuhanmu tanpa di-review atau membayar terlebih dahulu"
      >
        <Image
          alt="Illustration describing no waiting donating with KawanBantu"
          className="absolute right-16 top-1/2 -translate-y-1/2"
          src={tidakMenungguFeature}
        />
      </FeatureSection>
      <FeatureSection
        contentPlacement="right"
        heading="Bagikan info penggalangan dana dengan mudah untuk publik maupun internal"
        message="Kamu bisa lampirkan QR code dan sebar link laman donasi kamu dan kamu juga bebas mengatur pembagian campaign apabila hanya ingin menggalang dana di internal organisasimu"
      >
        <Image
          alt="Illustration describing where you can share you donation information with KawanBantu"
          className="absolute left-16 top-1/2 -translate-y-1/2"
          src={bagikanInfoFeature}
        />
      </FeatureSection>
      <FeatureSection
        heading="Hanya ada kamu di platform-mu sendiri"
        message="Tidak perlu khawatir ada penggalang dana lain di platform-mu karena di KawanBantu, 1 platform untuk 1 penggalang dana"
      >
        <Image
          alt="Illustration describing where you have your own donation space in KawanBantu"
          className="absolute right-16 top-1/2 -translate-y-1/2"
          src={selfSpaceFeature}
        />
      </FeatureSection>
    </Fragment>
  );
};
