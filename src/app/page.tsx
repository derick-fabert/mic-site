import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Schools from "@/components/Schools";
import Footer from "@/components/Footer";
import StatementImageBG from "@/components/Statement-ImageBG";
import VideoWrapper from "@/components/VideoWrapper";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Statement />
      <Schools />
      <StatementImageBG />
      <VideoWrapper />
      <div>Mission</div>
      <div>Quote</div>
      <div>Calendar</div>
      <div>Contact</div>
      <Footer />
    </div>
  );
}
