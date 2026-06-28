import React, { useState } from "react";
import { evidenceData } from "../data";
import { Search, Quote, FileText, ChevronRight } from "lucide-react";

export const Evidence: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("macabre");

  const activeRow = evidenceData.find((row) => row.id === activeId) || evidenceData[0];

  return (
    <section id="literary-evidence" className="scroll-mt-20 space-y-6">
      <div className="bg-white border border-sepia-300 rounded p-6 md:p-8 editorial-shadow">
        <div className="mb-6 pb-4 border-b border-sepia-200">
          <span className="font-mono text-xs text-gilt-600 font-semibold uppercase tracking-widest block">
            Analysis Section 04
          </span>
          <h3 className="font-serif italic text-2xl md:text-3xl font-bold text-sepia-900 mt-1">
            Analytical Evidence & Connections
          </h3>
          <p className="font-sans text-sm text-sepia-700 mt-1 font-light">
            Explore how the narrative characteristics translate directly into textual evidence and critical analysis. Select a characteristic below to inspect its detailed textual connection.
          </p>
        </div>

        {/* Clickable Background-to-Text Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Characteristics Menu (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="font-mono text-[10px] text-sepia-500 uppercase tracking-widest font-bold block mb-1">
              Select Narrative Characteristic
            </span>
            {evidenceData.map((row) => {
              const isActive = activeId === row.id;
              return (
                <button
                  key={row.id}
                  onClick={() => setActiveId(row.id)}
                  className={`w-full flex items-center justify-between p-4 rounded border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-sepia-900 text-sepia-50 border-sepia-950 editorial-shadow-sm transform translate-x-1"
                      : "bg-white text-sepia-950 border-sepia-200 hover:border-sepia-350 hover:editorial-shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded ${isActive ? "bg-gilt-500 text-sepia-950" : "bg-sepia-100 text-sepia-600"}`}>
                      <FileText className="w-4.5 h-4.5" />
                    </div>
                    <span className="font-serif italic font-bold text-sm md:text-base">
                      {row.characteristic}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-250 ${isActive ? "text-gilt-400 rotate-90" : "text-sepia-400"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Comparison Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-sepia-50/20 border border-sepia-300 rounded p-5 md:p-6 flex flex-col justify-between editorial-shadow-sm">
            <div className="space-y-5">
              {/* Characteristic Identifier */}
              <div className="flex justify-between items-center pb-3 border-b border-sepia-150">
                <span className="font-mono text-xs text-gilt-700 font-semibold tracking-wider uppercase">
                  Textual Evidence & Commentary
                </span>
                <span className="font-serif italic font-bold text-sm text-sepia-500">
                  {activeRow.characteristic}
                </span>
              </div>

              {/* Textual Proof Block */}
              <div className="space-y-2 bg-white p-4 rounded border border-sepia-200 relative overflow-hidden shadow-2xs">
                <span className="font-mono text-[9px] text-gilt-700 uppercase tracking-widest font-semibold flex items-center gap-1">
                  <Quote className="w-3.5 h-3.5 text-gilt-500" />
                  <span>Evidence from "A Rose for Emily"</span>
                </span>
                <blockquote className="font-serif text-sm md:text-base text-sepia-950 italic leading-relaxed pl-3 border-l-2 border-gilt-500">
                  {activeRow.evidence}
                </blockquote>
              </div>

              {/* Detailed Connection/Explanation Block */}
              <div className="space-y-2">
                <span className="font-mono text-[9px] text-sepia-500 uppercase tracking-widest font-bold flex items-center gap-1">
                  <Search className="w-3.5 h-3.5 text-sepia-600" />
                  <span>Detailed Connection & Explanation</span>
                </span>
                <p className="font-sans text-sm text-sepia-850 leading-relaxed pl-1 font-light">
                  {activeRow.explanation}
                </p>
              </div>
            </div>

            {/* Academic stamp of verification */}
            <div className="mt-6 pt-4 border-t border-sepia-150 flex justify-between items-center text-[10px] font-mono text-sepia-400 uppercase">
              <span>Verified Course Material</span>
              <span>LM-1221 Modernism Seminar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
