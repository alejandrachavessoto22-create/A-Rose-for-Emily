/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from "./components/Navigation";
import { Intro } from "./components/Intro";
import { Background } from "./components/Background";
import { Pillars } from "./components/Pillars";
import { Characters } from "./components/Characters";
import { Evidence } from "./components/Evidence";
import { TimelineShuffle } from "./components/TimelineShuffle";
import { Quiz } from "./components/Quiz";
import { Conclusion } from "./components/Conclusion";
import { Sources } from "./components/Sources";
import { BookOpen, GraduationCap, ArrowUpCircle } from "lucide-react";

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-sepia-50 min-h-screen text-sepia-900 font-sans selection:bg-gilt-200 selection:text-sepia-950 pb-16 antialiased">
      {/* Dynamic Academic Navigation Header */}
      <Navigation />

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-12 md:space-y-16">
        {/* 1. Introduction Panel */}
        <Intro />

        {/* 2. Historical & Genre Context (Includes Dust filter cards) */}
        <Background />

        {/* 3. Main Characteristics / Pillars */}
        <Pillars />

        {/* Character Description & Analysis Section */}
        <Characters />

        {/* 4. Clickable Textual Evidence Comparison */}
        <Evidence />

        {/* Draggable/Clickable Chronological Timeline Shuffle */}
        <TimelineShuffle />

        {/* 5. Course Conclusion: Synthesis */}
        <Conclusion />

        {/* 6. Seminar Multiple Choice Quiz */}
        <Quiz />

        {/* 7. Bibliography Sources */}
        <Sources />
      </main>

      {/* Quick Academic Footer */}
      <footer className="mt-12 border-t border-sepia-200 pt-8 text-center max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-2 text-sepia-600">
            <GraduationCap className="w-5 h-5 text-gilt-600" />
            <span className="font-serif font-bold text-sm">U.S. Literature Survey 1221</span>
          </div>
          <p className="font-mono text-[10px] text-sepia-400 uppercase tracking-widest leading-relaxed">
            Alejandra Chaves Soto • Mapping the Macabre in Faulkner’s South • © 2026 Academic Study Guide
          </p>
          <button
            onClick={scrollToTop}
            className="mt-2 flex items-center gap-1.5 text-xs text-gilt-700 hover:text-gilt-800 font-mono font-bold uppercase transition-colors cursor-pointer"
          >
            <ArrowUpCircle className="w-4 h-4" />
            <span>Back to top</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
