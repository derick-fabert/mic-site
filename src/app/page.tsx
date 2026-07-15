import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Schools from "@/components/Schools";
import Footer from "@/components/Footer";
import StatementImageBG from "@/components/Statement-ImageBG";
import VideoWrapper from "@/components/VideoWrapper";
import ThreePoints from "@/components/ThreePoints";
import Quote from "@/components/Quote";
import Calendar from "@/components/Calendar";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Statement />
      <Schools />
      <StatementImageBG />
      <VideoWrapper />
      <ThreePoints />
      <Quote />
      <Calendar />
      <div>Contact</div>
      <Footer />
    </div>
  );
}
