interface buttonProps {
  handleClick: () => void;
}

export const Button = ({ handleClick = () => {} }: buttonProps) => {
  return (
    <div>
      <button onClick={handleClick}>CLICK MEEEE</button>
    </div>
  );
};
