type Props = {
  text?: string;
  children: React.ReactNode;
};

const Hello = ({ text = "Hello", children }: Props) => {
  return (
    <>
      <p>{text}</p>
      {children}
    </>
  );
};

type FnProps = {
  fn: (text: string) => void;
};
export const Btn = ({ fn }: FnProps) => {
  return (
    <button onClick={() => fn("TypeScript")}>
      <p>ボタン</p>
    </button>
  );
};

export default Hello;
