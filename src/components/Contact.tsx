import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-white w-full mx-auto text-black min-h-112.5 p-2 md:p-8 mb-8">
      <div className="relative flex justify-end max-w-300 mx-auto px-4 md:px-8">
        <Image 
          src="/contact-pitching.png" 
          alt="Contact" 
          width={300} 
          height={300} 
          className="hidden md:block md:absolute md:top-1/2 md:left-0 lg:left-2 md:-translate-y-1/2 max-w-1/3 lg:max-w-1/2"
        />
        <div className="flex w-full flex-col justify-start md:w-3/4 md:min-h-95 p-4 md:p-12 md:pl-24 shadow-[0_0_24px_rgba(0,0,0,0.33)]">
          <div className="text-4xl font-black mb-4">
            Have A Question?
          </div>
          <hr className="w-full border border-[#94bdf3] mb-8" />
          <input 
            type="text" 
            placeholder="Name" 
            className='w-full bg-[#94bdf340] px-4 py-2 rounded-full mb-4 uppercase'
          />
          <input 
            type="email" 
            placeholder="Email" 
            className='w-full bg-[#94bdf340] px-4 py-2 rounded-full mb-4 uppercase'
          />
          <textarea
            placeholder="Message"
            className="w-full bg-[#94bdf340] px-4 py-2 rounded-xl mb-4 min-h-40 text-left align-top resize-none uppercase"
          />
          <div>
            <button className="bg-[#94bdf3] text-white px-8 py-2 rounded-full uppercase">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
