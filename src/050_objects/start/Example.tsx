const Example = () => {
  // 練習用

  const arry1: number[] = [1, 2, 3];
  const arry2: Array<number> = [1, 2, 3];

  type Person = { name: string, age?: number}
  const obj1: Person = { name: 'Taro' };
  console.log(obj1.name);
};

export default Example;
