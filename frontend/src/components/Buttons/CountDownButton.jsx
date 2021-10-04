import { RoundButton } from "../shared_style";

export const CountDownButton = ({ onClick, isDisabled }) => {
  return (
    <RoundButton onClick={onClick} disabled={isDisabled}>
      ー
    </RoundButton>
  );
};
