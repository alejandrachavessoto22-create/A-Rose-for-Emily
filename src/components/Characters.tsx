import React, { useState } from "react";
import { charactersData } from "../data";
import { User, Shield, Key, History, Quote, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Characters: React.FC = () => {
  const [selectedId, setSelectedId] = useState(charactersData[0].id);

  const selectedCharacter = charactersData.find((char) => char.id === selectedId) || charactersData[0];

  // Helper to map character IDs to relevant icons for visual appeal
  const getCharacterIcon = (id: string) => {
    switch (id) {
      case "emily":
        return <User className="w-5 h-5 text-gilt-600" />;
      case "homer":
        return <Compass className="w-5 h-5 text-gilt-600" />;
      case "father":
        return <Shield className="w-5 h-5 text-gilt-600" />;
      case "tobe":
        return <Key className="w-5 h-5 text-gilt-600" />;
      case "sartoris":
        return <History className="w-5 h-5 text-gilt-600" />;
      default:
        return <User className="w-5 h-5 text-gilt-600" />;
    }
  };

  return (
    <section id="character-analysis" className="scroll-mt-20 space-y-6">
      <div className="bg-white border border-sepia-300 rounded p-6 md:p-8 editorial-shadow">
        {/* Section Header */}
        <div className="mb-6 pb-4 border-b border-sepia-200">
          <span className="font-mono text-xs text-gilt-600 font-semibold uppercase tracking-widest block">
            Analysis Section 03
          </span>
          <h3 className="font-serif italic text-2xl md:text-3xl font-bold text-sepia-900 mt-1">
            Character Dramatis Personae & Analysis
          </h3>
          <p className="font-sans text-sm text-sepia-700 mt-1 font-light">
            Analyze the key figures in Jefferson, Mississippi. Select a character below to explore their structural role, symbolic resonance, and historical significance within Faulkner's modernist work.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Navigation: Character List (5 Columns on Desktop) */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="font-mono text-[10px] text-sepia-500 uppercase tracking-widest font-bold block mb-2">
              Dramatis Personae
            </span>
            <div className="space-y-2">
              {charactersData.map((char) => {
                const isSelected = char.id === selectedId;
                return (
                  <button
                    key={char.id}
                    onClick={() => setSelectedId(char.id)}
                    className={`w-full flex items-start gap-4 p-4 rounded border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-sepia-900 text-sepia-50 border-sepia-950 editorial-shadow-sm transform translate-x-1"
                        : "bg-white text-sepia-950 border-sepia-200 hover:border-sepia-350 hover:bg-sepia-100/10 hover:editorial-shadow-sm"
                    }`}
                  >
                    <div className={`p-2 rounded border shrink-0 ${
                      isSelected ? "bg-sepia-800 border-sepia-700" : "bg-sepia-50 border-sepia-150 shadow-2xs"
                    }`}>
                      {getCharacterIcon(char.id)}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif italic font-bold text-sm md:text-base leading-none">
                        {char.name}
                      </h4>
                      <p className={`font-mono text-[10px] ${isSelected ? "text-gilt-300" : "text-sepia-500"}`}>
                        {char.role}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {char.traits.map((trait) => (
                          <span
                            key={trait}
                            className={`font-mono text-[8px] px-1.5 py-0.5 rounded ${
                              isSelected
                                ? "bg-sepia-850 text-gilt-400 border border-sepia-750"
                                : "bg-sepia-100 text-sepia-700 border border-sepia-150"
                            }`}
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Detailed Analysis Display (7 Columns on Desktop) */}
          <div className="lg:col-span-7 bg-sepia-50/20 border border-sepia-300 rounded p-5 md:p-6 flex flex-col justify-between editorial-shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCharacter.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.18 }}
                className="space-y-5"
              >
                {/* Character Name Banner */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-3 border-b border-sepia-150 gap-2">
                  <div>
                    <h4 className="font-serif italic font-bold text-xl text-sepia-950 leading-tight">
                      {selectedCharacter.name}
                    </h4>
                    <span className="font-mono text-xs text-gilt-700 font-semibold uppercase tracking-wider block">
                      {selectedCharacter.role}
                    </span>
                  </div>
                  <div className="flex gap-1.5 flex-wrap">
                    {selectedCharacter.traits.map((trait) => (
                      <span
                        key={trait}
                        className="font-mono text-[9px] bg-gilt-100/80 text-gilt-850 px-2 py-0.5 rounded border border-gilt-200/50 uppercase"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Literary Description */}
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-gilt-700 uppercase tracking-widest font-semibold block">
                    Literary Portrait
                  </span>
                  <p className="font-sans text-sm text-sepia-850 leading-relaxed font-light pl-1">
                    {selectedCharacter.description}
                  </p>
                </div>

                {/* Direct Textual Quotation Block */}
                <div className="space-y-2 bg-white p-4 rounded border border-sepia-200 relative overflow-hidden shadow-2xs">
                  <span className="font-mono text-[9px] text-gilt-700 uppercase tracking-widest font-semibold flex items-center gap-1.5 border-b border-sepia-100 pb-1.5">
                    <Quote className="w-3.5 h-3.5 text-gilt-500" />
                    <span>Faulkner's Original Textual Description</span>
                  </span>
                  <p className="font-serif text-sm italic text-sepia-900 leading-relaxed pl-1">
                    {selectedCharacter.keyQuote.startsWith('"') || selectedCharacter.keyQuote.startsWith(' "') ? selectedCharacter.keyQuote : `"${selectedCharacter.keyQuote}"`}
                  </p>
                </div>

                {/* Symbolic Significance */}
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-gilt-700 uppercase tracking-widest font-semibold block">
                    Symbolic Resonance
                  </span>
                  <p className="font-sans text-sm text-sepia-850 leading-relaxed font-light pl-1">
                    {selectedCharacter.symbolism}
                  </p>
                </div>

                {/* Historical Context */}
                <div className="space-y-1.5 bg-sepia-100/40 p-4 rounded border border-sepia-200">
                  <span className="font-mono text-[9px] text-sepia-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <History className="w-3.5 h-3.5 text-sepia-600" />
                    <span>Sociological & Historical Context</span>
                  </span>
                  <p className="font-sans text-xs text-sepia-800 leading-relaxed font-light">
                    {selectedCharacter.historicalContext}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
