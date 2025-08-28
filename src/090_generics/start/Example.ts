const Example = () => {
  // 練習用
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  }
  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  }
  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  }

  const numArry = repeat<number>(10, 5);

  // const strArry = repeatStr('hello', 5);
  // console.log(strArry);
  // const numArry = repeatNum(10, 5);
  console.log(numArry);
};

export default Example;
