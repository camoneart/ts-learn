const Example = () => {
  // 練習用
  let strOrNum: string | number = "hello";
  strOrNum = 100;
  strOrNum = 'bye';
  console.log(strOrNum);

  type DayOfWeek = 
  | 'monday'
  | "Tuesday"
  | "saturday"

  let dayOfWeek: DayOfWeek = 'saturday';
  console.log(dayOfWeek);
};

export default Example;
