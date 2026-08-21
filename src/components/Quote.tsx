"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const QUOTES = [
  {
    text: "As we celebrate the 30th year of the MIC conference and reflect on the success stories of our students and staff over the last three decades, we are excited for the school leadership to come together and look for new ways to bring excellence to our students and communities,” says Sandra Squire, Principal of Ben Davis High School. “In its 30th year, the MIC leadership, consisting of superintendents, high school principals and athletic directors from our eight schools, is making an intentional effort to bring leadership training experiences to students, as well as a revival of arts and academic competitions within the conference.",
    attribution: "Sandra Squire, Principal of Ben Davis High School",
  },
  {
    text: "The MIC 30th Anniversary Campaign is an opportunity to build a stronger student community, foster connections with other schools through shared events and performances, promote unity, and bring together students from across these communities,” says Dr. Tim Phares, Principal of Carmel High School. “This milestone provides a meaningful opportunity to reflect on the conference’s long-standing legacy of excellence, competition, and sportsmanship, as well as the lasting impact it has had on generations of student-athletes and school communities.",
    attribution: "Dr. Tim Phares, Principal of Carmel High School",
  },
  {
    text: "We are excited to celebrate 30 years of excellence in academics, arts and athletics for public school students across Central Indiana,” says Tracy McMahen, Principal of Center Grove High School. “Being part of a strong, unified conference like the MIC gives students consistent competition against schools of similar size and strength. Strong conferences build traditional rivalries, increase student participation, and strengthen school pride and community support.",
    attribution: "Tracy McMahen, Principal of Center Grove High School",
  },
  {
    text: "A strong conference raises the level of competitive excellence, while unified conferences promote standards beyond wins and losses,” says Franklyn Bush, Principal of Lawrence Central High School. “We are excited to celebrate the MIC conference and the level of excellence we provide for our students, staff and community in athletics, arts and academics.",
    attribution: "Franklyn Bush, Principal of Lawrence Central High School",
  },
  {
    text: "Shared expectations around academics, sportsmanship, and conduct help shape well-rounded students,” says Jason Floyd, Principal of Lawrence North High School. “Conference rivalries build tradition and school spirit. Students rally around meaningful matchups, communities engage more deeply, and school pride strengthens. These experiences create lasting memories for students.",
    attribution: "Jason Floyd, Principal of Lawrence North High School",
  },
  {
    text: "Our students deserve to compete at high levels no matter if they are interested in academics, arts or athletics. This 30th anniversary campaign provides meaningful dialogue and action amongst MIC schools to find ways we can collaborate in support of student achievements and opportunities,” says Jagga Rent, Principal of North Central High School. “Part of this collaborative discussion focuses on bringing leadership training experiences to our students, to gain skills that will serve them long after they graduate.",
    attribution: "Jagga Rent, Principal of North Central High School",
  },
  {
    text: "We look forward to honoring the legacy of the MIC conference, building a stronger student community, and setting the vision for the next 30 years,” says Jeremy Wolley, Principal of Pike High School. “We recognize the importance of having a strong, unified conference to enhance student leadership opportunities. This campaign provides a meaningful opportunity to reflect on the conference’s long-standing legacy of excellence, competition and community in Central Indiana.",
    attribution: "Jeremy Wolley, Principal of Pike High School",
  },
  {
    text: "Through this 30th anniversary campaign, we can honor the rich history and tradition that define the Metropolitan Interscholastic Conference while also highlighting the incredible students, coaches, and communities that continue to shape its future,” says Masimba Taylor, Principal of Warren Central High School. “This milestone provides a meaningful opportunity to reflect on the conference’s long-standing legacy of excellence, competition, and sportsmanship, as well as the lasting impact it has had on generations of student-athletes and school communities.",
    attribution: "Masimba Taylor, Principal of Warren Central High School",
  },
] as const;

const INTERVAL_MS = 15_000;

export default function Quote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIndex((current) => (current + 1) % QUOTES.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [index]);

  return (
    <div className="bg-white p-4 md:p-16">
      <div className="max-w-300 mx-auto bg-white p-6 md:p-24 shadow-[0_0_24px_rgba(0,0,0,0.33)] text-lg md:text-xl flex flex-col items-center justify-center gap-4">
        <div className="grid w-full" aria-live="polite" aria-atomic="true">
          {QUOTES.map((quote, i) => {
            const isActive = i === index;
            return (
              <div
                key={quote.attribution}
                className={`col-start-1 row-start-1 flex flex-col items-center justify-center gap-4 transition-opacity duration-300 ease-in-out ${
                  isActive
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
                aria-hidden={!isActive}
              >
                <Image
                  src="/MIC_Web_Quotes-Marks-02.svg"
                  alt=""
                  width={50}
                  height={38}
                />
                <div className="text-center text-black">{quote.text}</div>
                <Image
                  src="/MIC_Web_Quotes-Marks-01.svg"
                  alt=""
                  width={50}
                  height={38}
                />
                <div className="text-center mt-4 text-mic-blue font-bold">
                  {quote.attribution}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="mt-2 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Quote slides"
        >
          {QUOTES.map((item, i) => {
            const isActive = i === index;
            return (
              <button
                key={item.attribution}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show quote from ${item.attribution}`}
                className={`h-4 w-4 rounded-full border-0 p-0 transition-colors duration-300 ${
                  isActive ? "" : "bg-black/20 hover:bg-black/40"
                }`}
                style={
                  isActive
                    ? { backgroundColor: "var(--color-mic-blue)" }
                    : undefined
                }
                onClick={() => setIndex(i)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
