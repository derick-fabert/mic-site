import Image from "next/image";

export default function Header() {
  return (
    <footer className="relative z-20 w-full border-b border-white/30 bg-navy text-white">
      <div className="mx-auto flex h-24 w-full max-w-[1440px] items-center justify-between px-3 lg:px-6">
        <div className="flex h-16 w-16 min-h-[60px] min-w-[60px] shrink-0 items-center justify-center">
          <Image
            src="/mic-logo.svg"
            alt="MIC logo"
            width={60}
            height={60}
            className="h-full w-full"
            priority
          />
        </div>
        <div className="text-white text-sm text-right md:text-base lg:text-lg">
          <div className="font-bold">METROPOLITAN INTERSCHOLASTIC CONFERENCE  |  1996 - 2026</div>
          <div>Copyright 2026  | [MIC email to be created]</div>
        </div>
      </div>
    </footer>
  );
}
