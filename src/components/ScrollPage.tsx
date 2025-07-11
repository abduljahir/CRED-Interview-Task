import ScrollComp from "./ScrollComp";
import TrackScrollComp from "./TrackScrollComp";

export default function ScrollPage() {
  return (
    <main className="bg-black text-white">
      {/* Section 1: Track Scroll */}
      <section className="relative h-[3000px]">
        <div className="sticky top-0 h-screen w-full">
          <TrackScrollComp />
        </div>
      </section>

      {/* Section 2: Big Features Scroll */}
      <section className="relative h-[4000px]">
        <div className="sticky top-0 h-screen w-full">
          <ScrollComp/>
        </div>
      </section>
    </main>
  );
}
