import Hello from "./Hello";
import { Btn } from "./Hello";

const Example = () => {
  // 練習用
  return (
    <>
      <Hello text="TypeScript">
        <p>children1</p>
        <p>children2</p>
        <p>children3</p>
      </Hello>

      <Btn fn={(text) => console.log(`hello ${text}`)} />
    </>
  );
};

export default Example;
