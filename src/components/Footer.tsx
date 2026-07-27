import Image from "next/image";

export default function Header() {
  return (
    <footer className="relative z-20 w-full border-b border-white/30 bg-navy text-white">
      <div className="mx-auto flex w-full max-w-360 items-center justify-between px-3 lg:px-6">
        <div className="flex h-16 w-16 md:h-32 md:w-32 min-h-15 min-w-15 items-center justify-center">
          <Image
            src="/mic-logo.svg"
            alt="MIC logo"
            width={120}
            height={120}
            className="h-full w-full md:h-64 md:w-64"
            priority
          />
        </div>
        <div className="text-white text-right md:text-lg lg:text-xl">
          <div className="font-bold">METROPOLITAN INTERSCHOLASTIC CONFERENCE  |  1996 - 2026</div>
          <div>Copyright 2026  | [MIC email to be created]</div>
        </div>
      </div>
    </footer>
  );
}
