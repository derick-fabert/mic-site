import Image from "next/image";

const events = [
  { 
    date: "8.21", 
    title: "MIC Campaign Kickoff Tailgate at Team Stiles", 
    description: "Tailgate outside of Ray Skillman Stadium (Center Grove vs. Warren Central football game)"
  },
  { 
    date: "8.24", 
    title: " MIC Student Leadership Workshop in Carmel", 
    description: "The MIC Student Leadership Workshop is a day-long event for students to learn about leadership and teamwork."
  },
  { 
    date: "9.11", 
    title: "MIC 30th Anniversary podcast drops on Get IN. Podcast network", 
    description: "The MIC 30th Anniversary podcast drops on Get IN. Podcast network"}
]

export default function Calendar() {
  return (
    <div id="calendar" className="bg-white w-full pb-16 mx-auto text-black">
      <div className="flex flex-col items-center justify-center max-w-300 mx-auto px-4 md:px-8">
        <Image src="/calendar.svg" alt="Calendar" width={50} height={50} />
        <div className="text-4xl font-bold py-8">Upcoming Events</div>
        <div className="flex flex-col gap-4">
          {events.map((event) => (
            <div key={event.date} className="flex items-stretch gap-4 bg-gray-200 border-12 border-gray-200">
              <div className='flex w-1/6 items-center font-bold text-lg md:text-3xl justify-center text-center border-r-2 border-white'>{event.date}</div>
              <div className='flex w-1/3 items-center font-bold md:text-2xl border-r-2 border-white pl-2 md:pl-8 pr-1'>{event.title}</div>
              <div className='flex w-1/2 items-center text-base py-4 pr-1'>{event.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
