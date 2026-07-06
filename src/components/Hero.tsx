import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mt-10 w-full h-40 md:h-120 lg:h-200">
      <div className="absolute inset-x-0 top-0 z-10 overflow-x-clip">
        <div className="absolute left-1/2 -top-8 md:-top-40 lg:-top-36 h-40 w-[110%] md:w-[120%] lg:w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-[80%] bg-white md:h-160 lg:h-200">
          <div className="absolute inset-x-0 bottom-2 text-center text-navy uppercase md:mb-4 lg:mb-12">
            <div className="italic text-sm md:text-base lg:text-2xl md:mb-2">
              Celebrating 30 Years of 
            </div>
            <div className="text-lg md:text-3xl lg:text-5xl font-extrabold md:mb-2">
              Excellence & Opportunity
            </div>
            <div className="text-sm md:text-base lg:text-2xl">
              In Central Indiana
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-end h-full">
        <div className="relative h-[120%] w-1/4">
          <Image
            src="/hero-football.png"
            alt="Football players in action"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-3/4 md:h-7/8 w-1/4">
          <Image
            src="/hero-showchoir.png"
            alt="Show choir performers"
            fill 
            className="object-cover"
          />
        </div>
        <div className="relative h-3/4 w-1/4">
          <Image
            src="/hero-soccer.png"
            alt="Soccer match moment"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[110%] w-1/4">
          <Image
            src="/hero-swimming.png"
            alt="Swimmer in competition"
            fill  
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
