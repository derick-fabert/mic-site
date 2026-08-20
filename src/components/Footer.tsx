import Image from "next/image";

export default function Header() {
  return (
    <footer className="relative z-20 w-full border-b border-white/30 bg-navy text-white">
      <div className="mx-auto flex w-full max-w-360 items-center justify-between px-3 lg:px-6">
        <div className="relative h-24 w-24 shrink-0 md:h-32 md:w-32">
          <Image
            src="/mic-logo.png"
            alt="MIC logo"
            width={256}
            height={256}
            className="h-full w-full object-contain"
            quality={100}
            sizes="(min-width: 768px) 128px, 96px"
          />
        </div>
        <div className="text-white text-right md:text-lg lg:text-xl">
          <div className="font-bold">METROPOLITAN INTERSCHOLASTIC CONFERENCE  |  1996 - 2026</div>
          <div>Copyright 2026  | themicconference@gmail.com</div>
        </div>
      </div>
    </footer>
  );
}
