import { useState } from "react";

// Captures mode and sets history
export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    if (replace) {
      setHistory(prev => [...prev.slice(0, -1), mode])
    } else {
      setHistory(prev => [...prev, mode]);
    }
  }

  function back() {
    if (history.length <= 1) {
      return;
    }
    setHistory((prev) => [...prev.slice(0, -1)]);
  }

  const mode = history[history.length - 1];

  return { mode, transition, back };
}