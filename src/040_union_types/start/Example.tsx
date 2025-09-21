// ユニオン型（union type）っていうのは、TypeScriptで「この変数は複数の型のどれかになるよ」って表現したいときに使うやつだよ。
// 例えば、string型かnumber型のどっちかを許容したい場合は、`string | number` みたいに書く。
// こうすると、その変数には文字列も数値も代入できるようになる。型の間は「|」（パイプ）でつなぐだけ。
// 具体例を見てみよう。

// ユニオン型
const Example = () => {
  let strOrNum: string | number = "Hello";
  strOrNum = 123;
  console.log(strOrNum);

  let strOrNumOrBool: string | number | boolean = "Hello";
  strOrNumOrBool = true;
  console.log(strOrNumOrBool);

  let helloOrNumOrBool: "Hello" | number | boolean = "Hello";
  console.log(helloOrNumOrBool);

  type HelloOrNum = "Hello" | number;
  const hello: HelloOrNum = "Hello";
  console.log(hello);

  type WayOfWeek =
    | "Monday" //先頭のパイプは無視される。可読性のためのUI
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  const day: WayOfWeek = "Monday";
  console.log(day);
};

export default Example;
