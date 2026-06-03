import AccelerationSection from "./sections/AccelerationSection";
import CapabilitiesSection from "./sections/CapabilitiesSection";
import EcosystemCardsSection from "./sections/EcosystemCardsSection";
import IndustryHero from "./sections/IndustryHero";
import LiveInsightsSection from "./sections/LiveInsightsSection";
import {
  accelerationParagraphs,
  capabilities,
  ecosystemCards,
  hero,
  liveInsights,
} from "./data";

function MetalsAndMining() {
  return (
    <>
      <IndustryHero {...hero} />
      <AccelerationSection paragraphs={accelerationParagraphs} />
      <CapabilitiesSection services={capabilities} />
      <LiveInsightsSection {...liveInsights} />
      <EcosystemCardsSection cards={ecosystemCards} />
    </>
  );
}

export default MetalsAndMining;
