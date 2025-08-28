const Example = () => {
  // 練習用
  function sum1(x: number, y?: number) {
    console.log(x);
  }

  sum1(1);

  const sum2 = (x: number, y: number) => x + y;
};

export default Example;
