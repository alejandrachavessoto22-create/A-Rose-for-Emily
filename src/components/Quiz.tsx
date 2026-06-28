import React, { useState } from "react";
import { quizQuestions } from "../data";
import { Check, X, Award, RotateCcw, ArrowRight, ArrowLeft, MessageSquareDot } from "lucide-react";

export const Quiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, boolean>>({});
  const [showFeedbackPopup, setShowFeedbackPopup] = useState<boolean>(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = quizQuestions[currentIdx];

  const handleSelectOption = (option: string) => {
    if (submittedAnswers[currentQuestion.id]) return; // locked after choice
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: option
    });
  };

  const handleSubmitAnswer = () => {
    const selected = selectedAnswers[currentQuestion.id];
    if (!selected) return;

    const isCorrect = selected === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setSubmittedAnswers({
      ...submittedAnswers,
      [currentQuestion.id]: true
    });

    // Show the Feedback Pop-up
    setShowFeedbackPopup(true);
  };

  const handleNext = () => {
    setShowFeedbackPopup(false);
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const handlePrev = () => {
    setShowFeedbackPopup(false);
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  const handleResetQuiz = () => {
    setCurrentIdx(0);
    setSelectedAnswers({});
    setSubmittedAnswers({});
    setShowFeedbackPopup(false);
    setScore(0);
    setQuizComplete(false);
  };

  return (
    <div id="interactive-quiz" className="bg-white border border-sepia-300 rounded p-6 editorial-shadow relative overflow-hidden">
      {/* Decorative top ribbon */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gilt-500" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-sepia-200">
        <div>
          <span className="font-mono text-xs text-gilt-600 font-semibold uppercase tracking-widest block">
            Interactive Analysis Exercise 2
          </span>
          <h3 className="font-serif italic text-2xl font-bold text-sepia-900 mt-1">
            Analysis Knowledge Check
          </h3>
          <p className="font-sans text-sm text-sepia-700 mt-0.5 font-light">
            Test your understanding of the historical background and key characteristics of Southern Gothic.
          </p>
        </div>

        {/* Progress Tracker */}
        {!quizComplete && (
          <div className="font-mono text-xs text-sepia-600 bg-sepia-100 px-3 py-1.5 rounded border border-sepia-200 shrink-0">
            Question <strong className="text-sepia-950">{currentIdx + 1}</strong> of {quizQuestions.length}
          </div>
        )}
      </div>

      {!quizComplete ? (
        <div className="space-y-6">
          {/* Progress bar */}
          <div className="w-full h-1 bg-sepia-200 rounded overflow-hidden">
            <div
              className="h-full bg-gilt-500 transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="space-y-2">
            <span className="font-mono text-xs text-sepia-500 font-bold tracking-widest uppercase">
              Question {currentIdx + 1}
            </span>
            <h4 className="font-serif text-lg md:text-xl font-semibold text-sepia-950 leading-relaxed">
              {currentQuestion.question}
            </h4>
          </div>

          {/* Options List */}
          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((option, idx) => {
              const letter = ["A", "B", "C", "D"][idx];
              const isSelected = selectedAnswers[currentQuestion.id] === option;
              const isSubmitted = submittedAnswers[currentQuestion.id];
              const isCorrectOpt = option === currentQuestion.correctAnswer;

              let optionStyle = "border-sepia-200 bg-sepia-50/50 hover:border-gilt-500 hover:bg-gilt-50/20 rounded";
              let letterStyle = "bg-sepia-100 text-sepia-600 border-sepia-200 rounded";

              if (isSelected) {
                optionStyle = "border-gilt-500 bg-gilt-50/40 ring-1 ring-gilt-300/30 rounded";
                letterStyle = "bg-gilt-500 text-white border-gilt-650 rounded";
              }

              if (isSubmitted) {
                if (isCorrectOpt) {
                  optionStyle = "border-emerald-500 bg-emerald-50/20 rounded";
                  letterStyle = "bg-emerald-600 text-white border-emerald-700 rounded";
                } else if (isSelected) {
                  optionStyle = "border-rose-500 bg-rose-50/20 rounded";
                  letterStyle = "bg-rose-600 text-white border-rose-700 rounded";
                } else {
                  optionStyle = "border-sepia-200 bg-white/30 opacity-50 rounded";
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isSubmitted}
                  onClick={() => handleSelectOption(option)}
                  className={`flex items-center gap-4 text-left p-4 border transition-all duration-200 cursor-pointer ${optionStyle}`}
                >
                  <span className={`w-8 h-8 border flex items-center justify-center font-mono text-sm font-semibold shrink-0 transition-colors ${letterStyle}`}>
                    {isSubmitted && isCorrectOpt ? (
                      <Check className="w-4 h-4" />
                    ) : isSubmitted && isSelected && !isCorrectOpt ? (
                      <X className="w-4 h-4" />
                    ) : (
                      letter
                    )}
                  </span>
                  <span className="font-sans text-sm md:text-base text-sepia-900 leading-normal">
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center pt-4 border-t border-sepia-200">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="flex items-center gap-1.5 text-xs text-sepia-700 hover:text-sepia-950 font-mono disabled:opacity-30 disabled:hover:text-sepia-500 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Question</span>
            </button>

            {!submittedAnswers[currentQuestion.id] ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswers[currentQuestion.id]}
                className="bg-sepia-900 hover:bg-sepia-950 text-sepia-50 disabled:opacity-45 disabled:hover:bg-sepia-900 font-mono text-xs font-semibold px-6 py-2.5 rounded tracking-wider uppercase transition-colors cursor-pointer"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-gilt-600 hover:bg-gilt-700 text-white font-mono text-xs font-semibold px-6 py-2.5 rounded tracking-wider uppercase transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>{currentIdx === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Complete Screen */
        <div className="py-8 text-center max-w-lg mx-auto space-y-6 animate-fade-in">
          <div className="w-16 h-16 bg-gilt-100 text-gilt-600 rounded flex items-center justify-center mx-auto border border-gilt-300">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-sepia-500 uppercase tracking-widest font-semibold block">
              Quiz Completed
            </span>
            <h4 className="font-serif italic text-3xl font-bold text-sepia-950">
              Your Performance Score
            </h4>
            <div className="text-5xl font-mono font-black text-gilt-700 my-4">
              {score} <span className="text-sepia-400 text-2xl">/ {quizQuestions.length}</span>
            </div>
            <p className="font-sans text-sm text-sepia-800 leading-relaxed max-w-md mx-auto font-light">
              {score === 5 && "Flawless Score! You have fully mastered the modern context and thematic structures of William Faulkner's Jefferson."}
              {score >= 3 && score < 5 && "Great work! You have a solid academic grasp of Southern Gothic and Faulkner's modernist tensions."}
              {score < 3 && "Keep reviewing. Dive back into the Historical Background and analytical comparison tables to deepen your context."}
            </p>
          </div>

          <button
            onClick={handleResetQuiz}
            className="inline-flex items-center gap-2 bg-sepia-900 hover:bg-sepia-950 text-sepia-50 px-6 py-2.5 rounded text-sm font-mono transition-all cursor-pointer shadow-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Restart Analysis Quiz</span>
          </button>
        </div>
      )}

      {/* Immediate Feedback Pop-up Modal */}
      {showFeedbackPopup && (
        <div className="absolute inset-0 bg-sepia-950/45 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white border border-sepia-300 rounded p-6 max-w-md w-full relative animate-scale-up editorial-shadow-lg">
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded flex items-center justify-center shrink-0 ${
                selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer
                  ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
                  : "bg-rose-100 text-rose-700 border border-rose-300"
              }`}>
                {selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer ? (
                  <Check className="w-6 h-6 font-bold" />
                ) : (
                  <X className="w-6 h-6 font-bold" />
                )}
              </div>

              <div className="space-y-3 flex-1">
                <h5 className={`font-serif italic font-bold text-lg leading-tight ${
                  selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer
                    ? "text-emerald-800"
                    : "text-rose-800"
                }`}>
                  {selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer
                    ? "Correct Response!"
                    : "Incorrect Selection"}
                </h5>

                <div className="bg-sepia-50 p-3 rounded border border-sepia-200 text-xs space-y-1 text-sepia-800">
                  <div>
                    <span className="font-semibold block text-sepia-500 uppercase tracking-widest font-mono text-[9px]">Your Selection:</span>
                    <p className="italic">"{selectedAnswers[currentQuestion.id]}"</p>
                  </div>
                  {selectedAnswers[currentQuestion.id] !== currentQuestion.correctAnswer && (
                    <div className="mt-2 pt-2 border-t border-sepia-200/50">
                      <span className="font-semibold block text-emerald-600 uppercase tracking-widest font-mono text-[9px]">Correct Answer:</span>
                      <p className="font-medium text-emerald-800">"{currentQuestion.correctAnswer}"</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 items-start text-xs text-sepia-950 bg-gilt-500/10 border border-gilt-300/35 p-3 rounded">
                  <MessageSquareDot className="w-4 h-4 text-gilt-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed italic">
                    {currentQuestion.feedback}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleNext}
                className="bg-sepia-900 hover:bg-sepia-950 text-sepia-50 px-5 py-2 rounded text-xs font-mono tracking-wider uppercase transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>{currentIdx === quizQuestions.length - 1 ? "Finish Check" : "Proceed"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
