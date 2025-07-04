import CounterButton, { type Color } from "./CounterButton";

interface CounterItem {
  emoji: string;
  color: Color;
  count: number;
  onClick: () => void;
  label: string;
}

const CounterList = ({ items }: { items: CounterItem[] }) => {
  return (
    <div className="flex gap-2">
      {items.map((item) => (
        <CounterButton
          key={item.label}
          emoji={item.emoji}
          color={item.color}
          count={item.count}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};

export default CounterList;
