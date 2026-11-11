import PiMark from "@/components/pi-mark";

export default function PortfolioBackground() {
  return (
    <>
      <div className="sky-scene" aria-hidden="true">
        <div className="evening-planet" />
        <div className="cosmic-dust" />
        <div className="meteor-streak" />
        <div className="morning-sun" />
        <div className="morning-cloud-sea" />
        <div className="morning-cloud cloud-one" />
        <div className="morning-cloud cloud-two" />
        <div className="morning-cloud cloud-three" />
        <div className="morning-cloud cloud-four" />
        <div className="morning-cloud cloud-five" />
      </div>
      <div className="stars" />
      <div className="portfolio-grid-background" aria-hidden="true" />
      <div className="corner-brand" aria-label="Indra Anggara Putra portfolio">
        <PiMark variant="corner" className="pi-mark" />
      </div>
    </>
  );
}
