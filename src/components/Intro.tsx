import React from "react";
import { Landmark, ArrowDown, BookOpen } from "lucide-react";

export const Intro: React.FC = () => {
  return (
    <section id="intro" className="relative scroll-mt-20">
      {/* Ornamental top frame evoking the Grierson Gilded style */}
      <div className="bg-white border border-sepia-300 rounded overflow-hidden editorial-shadow">
        {/* Visual Header / Banner */}
        <div className="relative bg-sepia-900 text-sepia-50 p-8 md:p-12 text-center border-b border-gilt-500 overflow-hidden">
          {/* Faint elegant visual texture background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#856E3E_1.2px,transparent_1.2px)] [background-size:16px_16px]" />

          <div className="relative max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs text-gilt-400 font-bold uppercase tracking-widest block animate-pulse">
              U.S. LITERATURE SURVEY • ALEJANDRA CHAVES SOTO
            </span>
            <h2 className="font-serif italic text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Mapping the Macabre in Faulkner’s South
            </h2>
            <p className="font-sans text-sm md:text-base text-sepia-200 font-light max-w-xl mx-auto leading-relaxed">
              An interactive critical exploration of William Faulkner's <em>"A Rose for Emily"</em> (1930) and the Southern Gothic movement.
            </p>
          </div>
        </div>

        {/* Introduction Body: The Fallen Monument */}
        <div className="p-6 md:p-10 space-y-8 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Text Panel (8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gilt-600">
                  <Landmark className="w-5 h-5" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest">
                    The Fallen Monument
                  </span>
                </div>
                <h3 className="font-serif italic text-2xl md:text-3xl font-bold text-sepia-950 leading-tight">
                  "Dear, inescapable, impervious, tranquil, and perverse"
                </h3>
              </div>

              {/* The exact Overview text from the prompt */}
              <p className="font-sans text-base md:text-lg text-sepia-800 leading-relaxed font-light">
                <strong>"A Rose for Emily" (1930)</strong> explores the life and death of Emily Grierson, a woman who becomes a <strong>"fallen monument"</strong> in the fictional town of Jefferson. The story utilizes a non-linear narrative to examine the decay of the Old South and the psychological consequences of isolation.
              </p>

              <p className="font-sans text-sm text-sepia-750 leading-relaxed font-light">
                As a pillar of American modernism, William Faulkner challenges traditional Southern chivalry. By constructing Emily as an impervious, grotesque idol, Faulkner exposes the pathological weight of historical inheritance in the post-bellum era.
              </p>
            </div>

            {/* Sidebar Callout Panel (4 Cols) */}
            <div className="lg:col-span-4 bg-sepia-50 border border-sepia-300 rounded p-5 space-y-4 editorial-shadow-sm">
              <span className="font-mono text-[10px] text-sepia-500 uppercase tracking-widest font-bold block border-b border-sepia-200 pb-1">
                Educational Objectives
              </span>
              <ul className="space-y-3 font-sans text-xs text-sepia-850 font-light">
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 bg-gilt-500 rounded-full shrink-0 mt-1.5" />
                  <p>
                    <strong>Contextualize</strong> the shift from Colonel Sartoris's edict of 1894 to modern gasoline pumps.
                  </p>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 bg-gilt-500 rounded-full shrink-0 mt-1.5" />
                  <p>
                    <strong>Deconstruct</strong> Southern Gothic hallmarks: the macabre, resistance to modernity, and aristocrat decay.
                  </p>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-1.5 h-1.5 bg-gilt-500 rounded-full shrink-0 mt-1.5" />
                  <p>
                    <strong>Reconstruct</strong> the actual chronological order of Faulkner's deliberately scrambled non-linear plot.
                  </p>
                </li>
              </ul>
              <div className="pt-3 border-t border-sepia-200 flex justify-between items-center">
                <span className="font-mono text-[9px] text-sepia-400">STATUS: INTERACTIVE COURSEWARE</span>
                <BookOpen className="w-3.5 h-3.5 text-sepia-400" />
              </div>
            </div>
          </div>

          {/* Prompt Quote Illustration block */}
          <div className="bg-sepia-50 border-l-2 border-gilt-500 p-5 rounded-r space-y-2 shadow-2xs">
            <p className="font-serif text-sm italic text-sepia-900 leading-relaxed">
              "Alive, Miss Emily had been a tradition, a duty, and a care; a sort of hereditary obligation upon the town, dating from that day in 1894 when Colonel Sartoris, the mayor--he who fathered the edict that no Negro woman should appear on the streets without an apron-remitted her taxes, the dispensation dating from the death of her father on into perpetuity."
            </p>
            <span className="block font-mono text-[10px] text-sepia-500 text-right">
              (Faulkner 1)
            </span>
          </div>

          {/* Hint to proceed */}
          <div className="flex justify-center pt-2">
            <button
              onClick={() => {
                document.getElementById("historical-background")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-1.5 text-xs font-mono font-bold text-gilt-700 hover:text-gilt-800 transition-colors uppercase tracking-wider cursor-pointer"
            >
              <span>BEGIN ANALYSIS</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
