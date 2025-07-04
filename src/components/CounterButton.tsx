import { Button as MuiButton } from "@mui/material";

export type Color =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "inherit"
  | "success"
  | "warning";

const CounterButton = ({
  emoji,
  color,
  count,
  onClick,
}: {
  emoji: string;
  color: Color;
  count: number;
  onClick: () => void;
}) => {
  return (
    <MuiButton
      className="flex flex-col !normal-case focus:!outline-2 focus:!outline-offset-2 focus:!outline-violet-500"
      size="small"
      variant="contained"
      color={color}
      onClick={onClick}
    >
      <span>{emoji}</span>
      <span>({count})</span>
    </MuiButton>
  );
};

export default CounterButton;
