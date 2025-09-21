const Example = () => {
  // 練習用

  // 型エイリアス：type文を用いて型に別名を付けることができる
  type UserName = string;
  type UserAge = number;
  type UserGender = "man" | "woman" | "others";

  type UserProfile = {
    name: UserName;
    age: UserAge;
    gender: UserGender;
  };

  const userProfile: UserProfile = {
    name: "Taro",
    age: 21,
    gender: "man",
  };
  console.log(userProfile);
};

export default Example;
