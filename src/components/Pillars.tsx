import React, { useState } from "react";
import { pillarsData } from "../data";
import { Sparkles, Quote, BookOpen } from "lucide-react";

export const Pillars: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>("macabre");

  return (
    <section id="genre-pillars" className="scroll-mt-20 space-y-6">
      <div className="bg-white border border-sepia-300 rounded p-6 md:p-8 editorial-shadow">
        <div className="mb-6">
          <span className="font-mono text-xs text-gilt-600 font-semibold uppercase tracking-widest block">
            Analysis Section 03
          </span>
          <h3 className="font-serif italic text-2xl md:text-3xl font-bold text-sepia-900 mt-1">
            Main Characteristics of Southern Gothic
          </h3>
          <p className="font-sans text-sm text-sepia-700 mt-1 font-light">
            Southern Gothic utilizes distinctive conventions to challenge romanticized Southern myths. Click on each pillar below to isolate and analyze its narrative manifestation.
          </p>
        </div>

        {/* Pillars Cards Deck */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillarsData.map((pillar) => {
            const isActive = activePillar === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`relative rounded border p-5 transition-all duration-300 cursor-pointer select-none flex flex-col justify-between space-y-4 ${
                  isActive
                    ? "bg-sepia-100/90 border-gilt-500 editorial-shadow-sm"
                    : "bg-white border-sepia-200 hover:border-sepia-350 hover:editorial-shadow-sm"
                }`}
              >
                {/* Visual marker */}
                {isActive && (
                  <span className="absolute top-3 right-3 text-gilt-600">
                    <Sparkles className="w-4.5 h-4.5 animate-pulse" />
                  </span>
                )}

                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-sepia-500 uppercase tracking-widest block font-bold">
                    Pillar Identity
                  </span>
                  <h4 className="font-serif italic text-lg font-bold text-sepia-950 leading-tight">
                    {pillar.title}
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-sepia-700 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-sepia-150 space-y-2">
                  <span className="font-mono text-[9px] text-gilt-700 uppercase tracking-wider flex items-center gap-1 font-semibold">
                    <Quote className="w-3 h-3 text-gilt-500" />
                    <span>Story Evidence excerpt</span>
                  </span>
                  <blockquote className="font-serif text-xs italic text-sepia-800 leading-relaxed">
                    "{pillar.quote}"
                  </blockquote>
                  <span className="block font-mono text-[9px] text-sepia-400 text-right font-medium">
                    {pillar.citation.startsWith("(") ? "" : "— "}{pillar.citation}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Synthesis Commentary box */}
        <div className="mt-8 p-5 bg-sepia-50/50 border border-sepia-300 rounded flex gap-4 items-start editorial-shadow-sm">
          <div className="p-2.5 bg-sepia-100 rounded text-sepia-900 shrink-0 border border-sepia-200">
            <BookOpen className="w-5 h-5 text-gilt-600" />
          </div>
          <div className="space-y-1.5">
            <h5 className="font-serif italic font-bold text-base text-sepia-900">
              {activePillar === "macabre" && "Socio-Psychological Truths through the Macabre"}
              {activePillar === "modernity" && "Aggravated Friction against 20th-Century Progress"}
              {activePillar === "decay" && "Metaphorical Erosion of the Antebellum Aristocracy"}
            </h5>
            <p className="font-sans text-xs md:text-sm text-sepia-700 leading-relaxed font-light">
              {activePillar === "macabre" && (
                "Faulkner uses the grotesque discovery of Homer's corpse not merely as shock value, but to represent the ultimate, toxic extreme of holding onto the past. By locking her lover in dust, Emily literalizes the stagnation of the Old South's decaying social system."
              )}
              {activePillar === "modernity" && (
                "The story contrasts Emily's 'august' name against concrete changes: sidewalk paving crews, gasoline pumps, and mail numbers. Emily's stubborn defiance represents the Griersons' absolute refusal to submit to the post-war industrial era."
              )}
              {activePillar === "decay" && (
                "The physical decay of the Grierson mansion—standing stubborn and coquettish among cotton wagons and gasoline pumps—mirrors the moral and financial collapse of the plantation class. It is a visual representation of historical transition."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
