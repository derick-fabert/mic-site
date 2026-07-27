import Image from "next/image";

export default function ThreePoints() {
  return (
    <div className="relative flex bg-white py-8 lg:px-16">
      <div className="relative flex w-full lg:mx-auto lg:my-10 lg:max-w-275 lg:justify-end">
        <div className="absolute -top-8 -bottom-8 left-0 hidden w-7/12 lg:block">
          <Image src="/threepoints-nc.png" alt="NC" fill sizes="50vw" className="object-contain object-left" />
        </div>
        <div className="z-10 w-full bg-[radial-gradient(circle,#008ed2_0%,#062647_78%)] p-8 lg:w-7/12 lg:p-20 text-center text-lg md:text-xl *:py-8">
          <div className="border-b-2 border-[#008ed2]">
            The competitive nature of the MIC conference is credited with building strong programs where students practice, prepare and compete at some of the highest levels in the state of Indiana. 
          </div>
          <div className="border-b-2 border-[#008ed2]">
            In the last 30 years, the MIC is home to more than 300 state championship wins, a long-standing history of nationally-ranked teams in various activities, and has trained numerous collegiate, professional and even Olympic athletes for the next level. 
          </div>
          <div>
            The MIC is a collaborative effort between participating schools to provide opportunities for students to compete at the highest level, in some of the best facilities in the state, where school leaders meet regularly to analyze and improve student experiences. 
          </div>
        </div>
      </div>
    </div>
  );
}
