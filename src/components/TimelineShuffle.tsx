import React, { useState } from "react";
import { TimelineEvent } from "../types";
import { timelineEvents } from "../data";
import { ArrowUp, ArrowDown, HelpCircle, RefreshCw, CheckCircle, AlertTriangle, Eye } from "lucide-react";

export const TimelineShuffle: React.FC = () => {
  // Initialize in narrative order as a starting point, which is scrambled chronologically
  const [items, setItems] = useState<TimelineEvent[]>(() => {
    return [...timelineEvents].sort((a, b) => a.narrativeOrder - b.narrativeOrder);
  });
  const [hasChecked, setHasChecked] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const moveItem = (index: number, direction: "up" | "down") => {
    setHasChecked(false);
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= items.length) return;

    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[newIndex];
    newItems[newIndex] = temp;
    setItems(newItems);
    setSelectedIndex(null);
  };

  const selectToSwap = (index: number) => {
    setHasChecked(false);
    if (selectedIndex === null) {
      setSelectedIndex(index);
    } else if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      // Swap the two indices
      const newItems = [...items];
      const temp = newItems[selectedIndex];
      newItems[selectedIndex] = newItems[index];
      newItems[index] = temp;
      setItems(newItems);
      setSelectedIndex(null);
    }
  };

  const handleReset = () => {
    // Reset to Narrative Order
    setItems([...timelineEvents].sort((a, b) => a.narrativeOrder - b.narrativeOrder));
    setHasChecked(false);
    setSelectedIndex(null);
    setShowExplanation(false);
  };

  const handleCheck = () => {
    setHasChecked(true);
  };

  const handleAutoSolve = () => {
    // Set strictly to chronological order
    setItems([...timelineEvents].sort((a, b) => a.chronologicalOrder - b.chronologicalOrder));
    setHasChecked(true);
    setSelectedIndex(null);
  };

  // Compute metrics
  const correctCount = items.reduce((acc, item, idx) => {
    return item.chronologicalOrder === idx + 1 ? acc + 1 : acc;
  }, 0);

  const isFullyCorrect = correctCount === items.length;

  return (
    <div id="chronological-timeline" className="bg-white border border-sepia-300 rounded p-6 editorial-shadow">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-sepia-200">
        <div>
          <span className="font-mono text-xs text-gilt-600 font-semibold uppercase tracking-widest block">
            Interactive Analysis Exercise 1
          </span>
          <h3 className="font-serif italic text-2xl font-bold text-sepia-900 mt-1">
            Chronological Timeline Shuffle
          </h3>
          <p className="font-sans text-sm text-sepia-700 mt-1 max-w-xl font-light">
            Faulkner shuffles the narrative timeline of <em>A Rose for Emily</em>. Arrange the events below into their <strong>actual chronological sequence of occurrence</strong> (1 to 7).
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs bg-sepia-100 hover:bg-sepia-200 text-sepia-800 px-3 py-2 rounded font-mono transition-colors border border-sepia-250 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
          <button
            onClick={handleAutoSolve}
            className="flex items-center gap-1.5 text-xs bg-sepia-700 hover:bg-sepia-800 text-sepia-50 px-3 py-2 rounded font-mono transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Show Solution</span>
          </button>
        </div>
      </div>

      {/* Guide Note */}
      <div className="bg-sepia-50 border border-sepia-200 rounded p-3 text-xs text-sepia-850 flex gap-2.5 items-start mb-6 shadow-2xs">
        <HelpCircle className="w-4.5 h-4.5 text-gilt-600 shrink-0 mt-0.5" />
        <div className="font-light">
          <span className="font-bold">How to Reorder:</span> Click a card to select it, then click another to swap their positions. Or use the 
          <span className="inline-flex items-center mx-1 bg-sepia-100 px-1 py-0.5 rounded text-sepia-900 border border-sepia-200"><ArrowUp className="w-2.5 h-2.5" /></span> and 
          <span className="inline-flex items-center mx-1 bg-sepia-100 px-1 py-0.5 rounded text-sepia-900 border border-sepia-200"><ArrowDown className="w-2.5 h-2.5" /></span> buttons to nudge them up or down.
        </div>
      </div>

      {/* Reordering List */}
      <div className="space-y-3">
        {items.map((item, index) => {
          const slotNumber = index + 1;
          const isCorrect = item.chronologicalOrder === slotNumber;
          const isSelected = selectedIndex === index;

          let cardBorderClass = "border-sepia-200 bg-white";
          if (isSelected) {
            cardBorderClass = "border-gilt-500 bg-gilt-50/55 ring-1 ring-gilt-300/35";
          } else if (hasChecked) {
            cardBorderClass = isCorrect 
              ? "border-emerald-500 bg-emerald-50/20" 
              : "border-amber-500 bg-amber-50/20";
          }

          return (
            <div
              key={item.id}
              className={`flex items-stretch border rounded overflow-hidden transition-all duration-300 shadow-2xs ${cardBorderClass}`}
            >
              {/* Chronological Slot Number Badge */}
              <div className={`w-14 shrink-0 flex flex-col justify-center items-center font-mono font-bold text-lg select-none border-r ${
                hasChecked 
                  ? (isCorrect ? "bg-emerald-600 text-white border-emerald-600" : "bg-amber-600 text-white border-amber-600")
                  : "bg-sepia-100 text-sepia-600 border-sepia-200"
              }`}>
                <span className="text-[10px] uppercase font-medium tracking-wider opacity-75 leading-none">Slot</span>
                <span className="leading-tight">{slotNumber}</span>
              </div>

              {/* Event Body */}
              <div 
                onClick={() => selectToSwap(index)}
                className="flex-1 p-3.5 cursor-pointer hover:bg-sepia-50/50 select-none flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif italic font-bold text-sepia-950 text-sm md:text-base leading-snug">
                    {item.text}
                  </h4>
                  <p className="font-sans text-xs text-sepia-700 mt-1 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-2.5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="font-mono text-[9px] bg-sepia-100 text-sepia-600 px-2 py-0.5 rounded uppercase border border-sepia-200">
                      Faulkner's Narrative Order: Chapter {item.narrativeOrder}
                    </span>
                    {hasChecked && (
                      <span className={`font-mono text-[9px] px-2 py-0.5 rounded uppercase font-semibold border ${
                        isCorrect ? "bg-emerald-50 text-emerald-800 border-emerald-200" : "bg-amber-50 text-amber-800 border-amber-200"
                      }`}>
                        {isCorrect ? "Correct Position" : `Should be slot ${item.chronologicalOrder}`}
                      </span>
                    )}
                  </div>
                  {isSelected && (
                    <span className="font-mono text-[9px] bg-gilt-400 text-gilt-900 px-2 py-0.5 rounded uppercase font-bold animate-pulse">
                      Selected - click another to swap
                    </span>
                  )}
                </div>
              </div>

              {/* Arrow Up/Down Controls */}
              <div className="w-11 shrink-0 flex flex-col border-l border-sepia-200 bg-sepia-50/40 select-none">
                <button
                  disabled={index === 0}
                  onClick={(e) => {
                    e.stopPropagation();
                    moveItem(index, "up");
                  }}
                  className={`flex-1 flex justify-center items-center hover:bg-sepia-200 text-sepia-600 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer`}
                  title="Move Up"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
                <button
                  disabled={index === items.length - 1}
                  onClick={(e) => {
                    e.stopPropagation();
                    moveItem(index, "down");
                  }}
                  className={`flex-1 flex justify-center items-center border-t border-sepia-150 hover:bg-sepia-200 text-sepia-600 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer`}
                  title="Move Down"
                >
                  <ArrowDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Control Actions & Real-Time Feedback */}
      <div className="mt-6 pt-5 border-t border-sepia-200 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={handleCheck}
            className="bg-sepia-900 hover:bg-sepia-950 text-sepia-50 px-6 py-2.5 rounded text-sm font-mono font-medium tracking-wide transition-colors shadow-sm cursor-pointer"
          >
            Check Arrangement
          </button>

          {hasChecked && (
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-semibold border ${
              isFullyCorrect ? "bg-emerald-50 text-emerald-800 border-emerald-200" : "bg-amber-50 text-amber-800 border-amber-200"
            }`}>
              {isFullyCorrect ? (
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              )}
              <span>
                {correctCount} / {items.length} Correct Positions
              </span>
            </div>
          )}
        </div>

        {hasChecked && (
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="text-gilt-700 hover:text-gilt-800 font-serif italic text-sm font-semibold underline decoration-gilt-500 decoration-1 underline-offset-4 cursor-pointer"
          >
            {showExplanation ? "Hide Literary Analysis" : "Read Timeline Analysis"}
          </button>
        )}
      </div>

      {/* Chronology Literary Commentary */}
      {showExplanation && (
        <div className="mt-5 p-5 bg-sepia-50 border-l-2 border-gilt-500 rounded-r font-sans text-sm text-sepia-900 space-y-3 animate-fade-in shadow-2xs">
          <h5 className="font-serif italic font-bold text-base text-sepia-950">
            Why Faulkner Shuffles the Chronology: A Narrative Device
          </h5>
          <p className="leading-relaxed font-light">
            By avoiding a straightforward chronological framework, Faulkner mimics the natural progression of <strong>communal memory and town gossip</strong>. The narrator speaks on behalf of "our whole town," letting stories rise, loop back, and collide.
          </p>
          <p className="leading-relaxed font-light">
            This non-linear Southern Gothic technique serves three main academic purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 leading-relaxed text-sepia-800 font-light">
            <li>
              <strong>Mythologizing Emily</strong>: She appears as an unchanging monument rather than a real person moving through time, reinforcing her absolute isolation.
            </li>
            <li>
              <strong>Delaying the Horrific</strong>: Shuffling the smell (narrated early, but chronological #5) and the poison purchase keeps the final, macabre discovery in the locked bedroom as a shocking climax.
            </li>
            <li>
              <strong>Emphasizing Historical Decay</strong>: The collision of historical eras (the 1894 edict vs modern gas pumps) is experienced subjectively rather than orderly, highlighting the trauma of the post-bellum transition.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
