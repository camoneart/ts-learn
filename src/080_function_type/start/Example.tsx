const Example = () => {
  // 関数の型定義
  function sum1(x: number, y: number) {
    return x + y;
  }

  const result1 = sum1(1, 2);
  console.log(result1);

  const sum2 = (x: number, y: number): number => x + y;
  const result2 = sum2(10, 20);
  console.log(result2);

  type Sum = (x: number, y: number) => number;
  const sum3: Sum = (x, y) => x + y;
  sum3(1, 2);

  type Str = (x: string, y: string) => string;
  const str1: Str = (x, y) => x + y;
  const strResult1 = str1("hello", "world");
  console.log(strResult1);
};

export default Example;
