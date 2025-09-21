const Example = () => {
  // 練習用

  // 冗長1
  const repeatStr = (val: string, times: number): string[] => {
    return new Array(times).fill(val); //times分の配列を作成し、valを入れる
  };

  // 冗長2
  const repeatNum = (val: number, times: number): number[] => {
    return new Array(times).fill(val);
  };

  // ジェネリクス
  const repeat = <T>(val: T, times: number): T[] => {
    return new Array(times).fill(val);
  };

  const numArray1 = repeat<number>(10, 3);
  const numArray2 = repeat(10, 3);
  console.log(numArray1);
  console.log(numArray2);

  const strArray = repeat<string>("hello", 3);
  console.log(strArray);

  const boolArray = repeat<boolean>(true, 3);
  console.log(boolArray);

  const helloArray = repeat<"hello">("hello", 3);
  console.log(helloArray);

  // const strArray = repeatStr("hello", 3);
  // console.log(strArray);

  // const numArray = repeatNum(10, 3);
  // console.log(numArray);
};

export default Example;
