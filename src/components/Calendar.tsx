import Image from "next/image";

const events = [
  { date: "8.24", title: "Center Grove Home Football Game", description: "CGCSC is celebrating the MIC's 30th anniversary with a tailgate cookout before the first football home game at 5:30 PM in parking lot B" },
  { date: "9.02", title: "Pike Stem Tournament", description: "The Senior STEM team at Pike High Shool is celebrating 30 years of excellence with cupcakes and coding at 11:30 AM.  All tournament attendees are welcome."},
  { date: "9-30", title: "Lawrence Central Sound Celebration", description: "The LC sound has produced a special 30th Anniversary Show Choir performance at the Bears Auditorium at 7:00 PM.  Tickets on sale now at lchs.com"}
]

export default function Calendar() {
  return (
    <div className="bg-white w-full pb-16 mx-auto text-black">
      <div className="flex flex-col items-center justify-center max-w-[1200px] mx-auto px-4 md:px-8">
        <Image src="/calendar.svg" alt="Calendar" width={50} height={50} />
        <div className="text-4xl font-bold py-8">Upcoming Events</div>
        <div className="flex flex-col gap-4">
          {events.map((event) => (
            <div key={event.date} className="flex items-stretch gap-4 bg-gray-200 border-12 border-gray-200">
              <div className='flex w-1/6 items-center font-bold md:text-2xl justify-center text-center border-r-2 border-white'>{event.date}</div>
              <div className='flex w-1/3 items-center font-bold border-r-2 border-white pl-2 md:pl-8 pr-1'>{event.title}</div>
              <div className='flex w-1/2 items-center text-sm py-4 pr-1'>{event.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
