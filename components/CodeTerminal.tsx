"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const codeLines = [
  "const developer = {",
  "  name: 'Tu Nombre',",
  "  role: 'Full Stack Developer',",
  "  skills: ['React', 'Next.js', 'Node.js'],",
  "  passions: ['Clean Code', 'Performance'],",
  "};",
  "",
  "if (developer.passions.includes('Clean Code')) {",
  "  console.log('Build amazing things!');",
  "}",
];

export function CodeTerminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < codeLines.length) {
      const currentLine = codeLines[currentLineIndex];
      
      if (currentCharIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setDisplayedLines(prev => {
            const newLines = [...prev];
            if (currentCharIndex === 0) {
              newLines.push(currentLine[0]);
            } else {
              newLines[newLines.length - 1] += currentLine[currentCharIndex];
            }
            return newLines;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 500);
        return () => clearTimeout(timeout);
      }
    } else {
      // Reset after some time to loop the animation
      const timeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="w-full max-w-lg mx-auto bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl border border-white/10 font-mono text-sm text-left"
    >
      <div className="bg-[#2a2a2a] px-4 py-2 flex items-center gap-2 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="ml-2 text-white/40 text-xs">developer.ts</span>
      </div>
      <div className="p-4 h-64 overflow-hidden">
        {displayedLines.map((line, i) => (
          <div key={i} className="flex gap-4">
            <span className="text-white/20 select-none w-4">{i + 1}</span>
            <span className={cn(
              "text-white/80",
              line.includes("const") || line.includes("if") ? "text-purple-400" : "",
              line.includes("'") ? "text-green-400" : "",
              line.includes("console.log") ? "text-blue-400" : ""
            )}>
              {line}
              {i === displayedLines.length - 1 && currentCharIndex < codeLines[currentLineIndex]?.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-primary ml-1 translate-y-1"
                />
              )}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Utility to merge classes since I can't import cn from @/lib/utils directly in Write without it being defined
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
