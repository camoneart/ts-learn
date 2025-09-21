const Example = () => {
  // 練習用

  const arry1: number[] = [1, 2, 3];
  const arryStr: string[] = ["hello", "bye"];
  const arry4: (string | number)[] = [1, "bye"];

  type Person = { name: string; age?: number };
  const obj1: Person = { name: "Taro" };

  const users: Person[] = [
    {
      name: "Taro",
    },
    {
      name: "Hanako",
      age: 30,
    },
    {
      name: "Jiro",
      age: 30,
    },
  ];
};

export default Example;
