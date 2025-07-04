import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import { type Color } from "./components/CounterButton";
import { Button } from "@mui/material";
import CounterBarChart from "./components/CounterBarChart";
import CounterList from "./components/CounterButtonList";

interface Counter {
  label: string;
  emoji: string;
  color: Color;
}

const COUNTER_CONFIG: Counter[] = [
  { label: "Surf", emoji: "🏄🏻‍♂️", color: "primary" },
  { label: "Chess", emoji: "♟️", color: "error" },
  { label: "Ninja", emoji: "🥷", color: "warning" },
  { label: "Hand", emoji: "🤙", color: "secondary" },
  { label: "Game", emoji: "👾", color: "success" },
];

function App() {
  const getCounters = () => {
    const stored = localStorage.getItem("counters");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return parsed;
      } catch (e) {
        console.error("Failed to get counts from localStorage:", e);
      }
    }
    return Array(COUNTER_CONFIG.length).fill(0);
  };

  const [counts, setCounts] = useState<number[]>(() => getCounters());

  // useCallback because this function does not change between renders,
  // does not need to be recalculated between renders
  const incrementCount = useCallback((index: number) => {
    setCounts((counts) =>
      counts.map((count, i) => (i === index ? count + 1 : count))
    );
  }, []);

  const resetCounters = () => setCounts(Array(COUNTER_CONFIG.length).fill(0));

  // useMemo so that combined and sorted are only calculated when counts change
  const combined = useMemo(
    () =>
      COUNTER_CONFIG.map((item, index) => ({
        ...item,
        count: counts[index],
        index,
      })),
    [counts]
  );

  useEffect(() => {
    localStorage.setItem("counters", JSON.stringify(counts));
  }, [counts]);

  return (
    <>
      <CounterBarChart data={combined} />
      <CounterList
        items={combined.map((item) => ({
          ...item,
          onClick: () => incrementCount(item.index),
        }))}
      />
      <Button
        className="!mt-6 !normal-case focus:!outline-2 focus:!outline-offset-2 focus:!outline-violet-500"
        size="small"
        variant="contained"
        color="error"
        onClick={resetCounters}
      >
        Reset
      </Button>
    </>
  );
}

export default App;
