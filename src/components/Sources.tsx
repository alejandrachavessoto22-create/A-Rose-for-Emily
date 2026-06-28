import React from "react";
import { sourcesList } from "../data";
import { Library, Link2 } from "lucide-react";

export const Sources: React.FC = () => {
  return (
    <section id="course-sources" className="scroll-mt-20">
      <div className="bg-white border border-sepia-300 rounded p-6 md:p-8 editorial-shadow">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-sepia-900 text-sepia-50 rounded border border-sepia-800">
            <Library className="w-5 h-5 text-gilt-400" />
          </div>
          <div>
            <span className="font-mono text-[10px] text-gilt-600 font-bold uppercase tracking-widest block leading-none">
              Module Bibliography
            </span>
            <h3 className="font-serif italic text-2xl font-bold text-sepia-950 mt-1">
              Course Sources & Materials
            </h3>
          </div>
        </div>

        {/* Bibliography List */}
        <div className="bg-white border border-sepia-250 rounded divide-y divide-sepia-150 shadow-2xs">
          {sourcesList.map((source, index) => (
            <div
              key={index}
              className="p-4 flex items-center justify-between hover:bg-sepia-50/50 transition-colors gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-sepia-100 text-sepia-600 flex items-center justify-center font-mono text-xs font-bold shrink-0 border border-sepia-200">
                  {index + 1}
                </div>
                <span className="font-serif text-sm md:text-base text-sepia-900 leading-tight">
                  {source.text}
                </span>
              </div>
              {source.ref && (
                <div className="shrink-0 flex items-center gap-1 bg-gilt-100 text-gilt-850 px-2.5 py-1 rounded font-mono text-[10px] font-bold uppercase border border-gilt-200">
                  <Link2 className="w-3 h-3 text-gilt-600" />
                  <span>{source.ref}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Course disclaimer */}
        <div className="mt-4 text-center">
          <span className="font-mono text-[9px] text-sepia-400 uppercase tracking-widest">
            Licensed for University Educational Instruction Only • All Rights Reserved
          </span>
        </div>
      </div>
    </section>
  );
};
