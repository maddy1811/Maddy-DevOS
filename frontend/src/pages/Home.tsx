import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import TerminalPreview from "../components/TerminalPreview";
import DashboardPreview from "../components/DashboardPreview";
import Navbar from "../components/Navbar";
import MouseSpotlight from "../components/ui/MouseSpotlight";
import MarqueeSection from "../components/MarqueeSection";
import AIChatSection from "../components/AIChatSection";
import CodeTypingSection from "../components/CodeTypingSection";
import ScrollProgress from "../components/ui/ScrollProgress";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <ScrollProgress />
      <Hero />
      <MarqueeSection />
      <FeatureSection />
      <TerminalPreview />
      <DashboardPreview />
      <AIChatSection />
      <CodeTypingSection />
      <Navbar />
      <MouseSpotlight />
    </main>
  );
}