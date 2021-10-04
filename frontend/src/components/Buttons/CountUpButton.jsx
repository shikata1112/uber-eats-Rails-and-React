import { RoundButton } from "../shared_style";

export const CountUpButton = ({ onClick, isDisabled }) => {
  return (
    <RoundButton onClick={onClick} disabled={isDisabled}>
      ＋
    </RoundButton>
  );
};
