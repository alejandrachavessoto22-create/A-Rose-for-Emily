import React, { useState, useEffect } from "react";
import { BookOpen, GraduationCap, Menu, X, Landmark, Compass, Sparkles } from "lucide-react";

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "intro", label: "Introduction" },
    { id: "historical-background", label: "Historical & Genre Context" },
    { id: "genre-pillars", label: "Characteristics" },
    { id: "character-analysis", label: "Character Analysis" },
    { id: "literary-evidence", label: "Evidence Comparison" },
    { id: "chronological-timeline", label: "Timeline Shuffle" },
    { id: "interactive-quiz", label: "Knowledge Check" },
    { id: "course-sources", label: "Sources" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-sepia-50/95 border-b border-sepia-300 backdrop-blur-md transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand/Academic Logo */}
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-sepia-900 text-sepia-50 rounded-md">
              <GraduationCap className="w-5 h-5 text-gilt-400" />
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-gilt-700 block font-bold leading-none">
                U.S. LITERATURE SURVEY • ALEJANDRA CHAVES SOTO
              </span>
              <h1 className="font-serif text-base md:text-lg font-black text-sepia-950 tracking-tight leading-tight">
                Mapping the Macabre
              </h1>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-md font-mono text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? "bg-sepia-900 text-sepia-50 shadow-xs"
                      : "text-sepia-700 hover:text-sepia-950 hover:bg-sepia-150"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Action */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-sepia-800 hover:text-sepia-950 hover:bg-sepia-150 rounded-md transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Swipeable Scroll Rail (always visible on small screens for easy touch navigation) */}
      <div className="lg:hidden border-t border-sepia-200 bg-sepia-100/60 overflow-x-auto flex items-center px-4 py-2 scrollbar-none gap-2 select-none">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`whitespace-nowrap px-3 py-1 rounded-full font-mono text-[10px] font-bold transition-all cursor-pointer shrink-0 ${
                isActive
                  ? "bg-sepia-900 text-sepia-50 shadow-xs"
                  : "bg-white/70 text-sepia-700 border border-sepia-200 hover:text-sepia-950"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Expandable Mobile Navigation Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-sepia-50 border-b border-sepia-350 shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 border-t border-sepia-200">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-left font-serif text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-sepia-900 text-sepia-50"
                      : "text-sepia-800 hover:bg-sepia-150 hover:text-sepia-950"
                  }`}
                >
                  <span className="w-1.5 h-1.5 bg-gilt-400 rounded-full shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
