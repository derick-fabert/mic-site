import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-20 w-full border-b border-white/30 bg-navy text-white">
      <div className="mx-auto flex h-36 w-full max-w-360 items-center justify-between px-3 lg:px-6">
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 shrink-0 md:h-30 md:w-30">
            <Image
              src="/mic-logo.png"
              alt="MIC logo"
              width={240}
              height={240}
              className="h-full w-full object-contain"
              quality={100}
              sizes="(min-width: 768px) 120px, 80px"
              priority
            />
          </div>
          <span className="text-base font-semibold uppercase tracking-[0.15em] md:text-2xl">
            Metropolitan Interscholastic Conference
          </span>
        </div>

        <nav aria-label="Main navigation" className="hidden h-full py-4 lg:flex lg:flex-row lg:items-center lg:justify-around">
          <a
            href="#calendar"
            className="px-6 text-center text-sm font-semibold uppercase hover:opacity-80 md:text-lg"
          >
            Upcoming Events
          </a>
          <span className="h-full lg:h-8 w-px bg-white/40 rotate-90 lg:rotate-0" aria-hidden="true" />
          <a
            href="#contact"
            className="px-6 text-sm font-semibold uppercase hover:opacity-80 md:text-base"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
