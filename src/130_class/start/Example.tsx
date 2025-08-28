class User {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const Example = () => {
  // 練習用
  const user = { name: "Hanako", age: 20 };
  const user1 = new User("taro", 30);
  console.log(user1);

  return (
    <div>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
      <p>name: {user1.name}</p>
      <p>age: {user1.age}</p>
    </div>
  );
};

export default Example;
