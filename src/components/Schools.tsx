import Image from "next/image";

const schools = [
  { src: "/school-bendavis.png", alt: "Ben Davis High School" },
  { src: "/school-carmel.png", alt: "Carmel High School" },
  { src: "/school-centergrove.png", alt: "Center Grove High School" },
  { src: "/school-lawrencecentral.png", alt: "Lawrence Central High School" },
  { src: "/school-lawrencenorth.png", alt: "Lawrence North High School" },
  { src: "/school-northcentral.png", alt: "North Central High School" },
  { src: "/school-pike.png", alt: "Pike High School" },
  { src: "/school-warrencentral.png", alt: "Warren Central High School" },
];

export default function Schools() {
  return (
    <div className='bg-white p-16'>
      <div className='text-black w-full text-center justify-center text-2xl lg:text-4xl font-bold pb-8 flex flex-col md:flex-row md:gap-2'>
        <div>8 Public Schools,</div>
        <div>1 Elite Conference</div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:gap-8 md:grid-cols-4 max-w-[1200px] mx-auto">
        {schools.map((school) => (
          <div key={school.src}>
            <div className="flex h-40 w-full pb-4 items-center justify-center">
              <Image
                src={school.src}
                alt={school.alt}
                width={300}
                height={300}
                className="h-auto max-h-full w-full object-contain"
              />
            </div>
            <div className="text-black text-center text-xs md:text-base lg:text-lg font-bold">{school.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
