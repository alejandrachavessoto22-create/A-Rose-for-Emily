import React from "react";
import { BookOpenText, Landmark, Milestone } from "lucide-react";
import { synthesisText } from "../data";

export const Conclusion: React.FC = () => {
  return (
    <section id="course-conclusion" className="scroll-mt-20">
      <div className="bg-sepia-900 border border-sepia-800 rounded p-6 md:p-8 text-sepia-100 editorial-shadow-lg relative overflow-hidden">
        {/* Decorative background visual elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gilt-500/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-sepia-500/10 rounded-full blur-xl pointer-events-none" />

        <div className="relative space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sepia-800 text-gilt-400 rounded border border-sepia-700">
              <BookOpenText className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-gilt-400 font-bold uppercase tracking-widest block leading-none">
                Analysis Synthesis Section 05
              </span>
              <h3 className="font-serif italic text-2xl font-bold text-white mt-1">
                {synthesisText.title}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
            {/* Main Synthesis Text (8 Cols) */}
            <div className="lg:col-span-8 space-y-4">
              <h4 className="font-serif text-lg text-gilt-300 italic font-medium">
                {synthesisText.subtitle}
              </h4>
              
              {/* Exact Synthesis text from user request */}
              <p className="font-sans text-sm md:text-base text-sepia-200 leading-relaxed font-light">
                {synthesisText.content}
              </p>
            </div>

            {/* Quick Summary list (4 Cols) */}
            <div className="lg:col-span-4 bg-sepia-950/50 border border-sepia-800 rounded p-5 space-y-3">
              <span className="font-mono text-[9px] text-gilt-500 uppercase tracking-widest font-bold block">
                Key Interpretative Takeaway
              </span>
              <div className="space-y-3 text-xs text-sepia-300 font-light">
                <div className="flex gap-2.5 items-start">
                  <Landmark className="w-4 h-4 text-gilt-400 shrink-0 mt-0.5" />
                  <p>
                    Emily acts as a <strong>communal repository</strong> of memory, embodying the pride, guilt, and stubborn denial of the defeated Confederacy.
                  </p>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Milestone className="w-4 h-4 text-gilt-400 shrink-0 mt-0.5" />
                  <p>
                    The modern generation represents <strong>bureaucratic progress</strong>, forcing accountability upon the ghosts of historical privilege.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Footer Seal */}
          <div className="pt-4 border-t border-sepia-850 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-sepia-400 gap-2">
            <span>U.S. LITERATURE SURVEY</span>
            <span>FAULKNER'S A ROSE FOR EMILY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
