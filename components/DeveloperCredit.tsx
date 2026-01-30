// components/DeveloperCredit.tsx
"use client";

import { Code } from "lucide-react";

export default function DeveloperCredit() {
  return (
    <p className="mt-4 flex justify-center items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group">
      <Code
        className="text-primary group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500"
        size={18}
      />
      <span>
        Crafted with care by{" "}
        <a
          href="https://amruthlp.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-foreground hover:underline transition-colors duration-300 font-medium"
          title="Visit my portfolio"
        >
          Amruth L P <span className="inline-block ml-1 animate-wave">👋</span>
        </a>
      </span>
    </p>
  );
}