import Image from "next/image";

const schools = [
  { src: "/school-bendavis.png", alt: "Ben Davis High School", url: "https://bdhs.wayne.k12.in.us/" },
  { src: "/school-carmel.png", alt: "Carmel High School", url: "https://www.ccs.k12.in.us/chs" },
  { src: "/school-centergrove.png", alt: "Center Grove High School", url: "https://cghs.centergrove.k12.in.us/" },
  { src: "/school-lawrencecentral.png", alt: "Lawrence Central High School", url: "https://lawrencecentral.ltschools.org/" },
  { src: "/school-lawrencenorth.png", alt: "Lawrence North High School", url: "https://lawrencenorth.ltschools.org/" },
  { src: "/school-northcentral.png", alt: "North Central High School", url: "https://www.nchs.cc/" },
  { src: "/school-pike.png", alt: "Pike High School", url: "https://phs.pike.k12.in.us/" },
  { src: "/school-warrencentral.png", alt: "Warren Central High School", url: "https://www.warren.k12.in.us/o/warren-central-high-school" },
];

export default function Schools() {
  return (
    <div className='bg-white p-16'>
      <div className='text-black w-full text-center justify-center text-3xl lg:text-4xl font-bold pb-8 flex flex-col md:flex-row md:gap-2'>
        <div>8 Traditional Public Schools,</div>
        <div>1 Elite Conference</div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:gap-8 md:grid-cols-4 max-w-300 mx-auto">
        {schools.map((school) => (
          <a key={school.src} href={school.url} className="block" target="_blank" rel="noreferrer">
            <div className="flex h-40 w-full pb-4 items-center justify-center">
              <Image
                src={school.src}
                alt={school.alt}
                width={300}
                height={300}
                className="h-auto max-h-full w-full object-contain"
              />
            </div>
            <div className="text-black text-center text-sm md:text-lg lg:text-xl font-bold">{school.alt}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
