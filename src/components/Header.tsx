import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-20 w-full border-b border-white/30 bg-navy text-white">
      <div className="mx-auto flex h-24 w-full max-w-360 items-center justify-between px-3 lg:px-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 min-h-15 min-w-15 shrink-0 items-center justify-center">
            <Image
              src="/mic-logo.svg"
              alt="MIC logo"
              width={60}
              height={60}
              className="h-full w-full"
              priority
            />
          </div>
          <span className="text-base font-semibold uppercase tracking-[0.15em] md:text-lg">
            Metropolitan Interscholastic Conference
          </span>
        </div>

        <nav aria-label="Main navigation" className="h-full py-4 flex flex-col items-center lg:flex-row justify-around">
          <a
            href="#"
            className="px-6 text-center text-sm font-semibold uppercase hover:opacity-80 md:text-base"
          >
            Upcoming Events
          </a>
          <span className="h-full lg:h-8 w-px bg-white/40 rotate-90 lg:rotate-0" aria-hidden="true" />
          <a
            href="#"
            className="px-6 text-sm font-semibold uppercase hover:opacity-80 md:text-base"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
