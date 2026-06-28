import React from "react";
import { backgroundData, dustCards } from "../data";
import { DustFilterCard } from "./DustFilter";
import { Landmark, Scroll, Layers } from "lucide-react";

export const Background: React.FC = () => {
  return (
    <section id="historical-background" className="space-y-10 scroll-mt-20">
      {/* Dual Pane Module */}
      <div className="bg-white border border-sepia-300 rounded p-6 md:p-8 editorial-shadow">
        <div className="mb-6">
          <span className="font-mono text-xs text-gilt-600 font-semibold uppercase tracking-widest block">
            Analysis Section 02
          </span>
          <h3 className="font-serif italic text-2xl md:text-3xl font-bold text-sepia-900 mt-1">
            Historical & Literary Background
          </h3>
          <p className="font-sans text-sm text-sepia-700 mt-1 font-light">
            Analyze the dual forces of physical modernization and psychological gothic romance shaping post-bellum Mississippi.
          </p>
        </div>

        {/* Dual Pane Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Historical Pane */}
          <div className="bg-sepia-50 border border-sepia-200 rounded p-6 flex flex-col justify-between hover:border-sepia-300 hover:editorial-shadow-sm transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded border border-sepia-200 text-sepia-800 shadow-2xs">
                  <Landmark className="w-5 h-5 text-gilt-600" />
                </div>
                <div>
                  <h4 className="font-serif italic text-lg font-bold text-sepia-950">
                    {backgroundData.historical.title}
                  </h4>
                  <span className="font-mono text-[10px] text-gilt-600 bg-gilt-100 px-2 py-0.5 rounded font-semibold uppercase border border-gilt-200/50">
                    {backgroundData.historical.period}
                  </span>
                </div>
              </div>
              <p className="font-sans text-sm md:text-base text-sepia-800 leading-relaxed pt-2 font-light">
                {backgroundData.historical.content}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-sepia-150">
              <span className="font-mono text-[11px] text-sepia-500 italic">
                Focus: The generational shift from 19th-century chivalry to 20th-century bureaucracy.
              </span>
            </div>
          </div>

          {/* Literary Pane */}
          <div className="bg-sepia-50 border border-sepia-200 rounded p-6 flex flex-col justify-between hover:border-sepia-300 hover:editorial-shadow-sm transition-all duration-300">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded border border-sepia-200 text-sepia-800 shadow-2xs">
                  <Scroll className="w-5 h-5 text-gilt-600" />
                </div>
                <div>
                  <h4 className="font-serif italic text-lg font-bold text-sepia-950">
                    {backgroundData.literary.title}
                  </h4>
                  <span className="font-mono text-[10px] text-sepia-500 bg-sepia-100 px-2 py-0.5 rounded font-semibold uppercase border border-sepia-250">
                    {backgroundData.literary.genre}
                  </span>
                </div>
              </div>
              <p className="font-sans text-sm md:text-base text-sepia-800 leading-relaxed pt-2 font-light">
                {backgroundData.literary.content}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-sepia-150">
              <span className="font-mono text-[11px] text-sepia-500 italic">
                Focus: Unpacking the "nasty underbelly" of race, class privilege, and historical decay.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Dust Filter Feature */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-sepia-900 text-sepia-50 rounded border border-sepia-800">
            <Layers className="w-4 h-4 text-gilt-300 animate-pulse" />
          </div>
          <div>
            <h4 className="font-serif italic text-xl font-bold text-sepia-950">
              The "Dust" Filter: Uncovering Social Realities
            </h4>
            <p className="font-sans text-sm text-sepia-700 font-light">
              Faulkner's description of Emily's house places heavy emphasis on the pervasive <strong>dust</strong> that coats her rooms, symbolizing stagnancy and the passage of time. <strong>Drag your mouse/finger across the dusty cards below</strong> to brush it away and uncover the deeper historical facts.
            </p>
          </div>
        </div>

        {/* 2x2 Grid of Dust Filter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dustCards.map((card) => (
            <DustFilterCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};
