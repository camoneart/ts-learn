const Example = () => {
  // 練習用
  type UserProfile = {
    name: string,
    age: number,
    gender?: 'man' | 'woman' | 'other'
  }

  const userProfile: UserProfile = {
    name: 'Taro',
    age: 21,
  }
};

export default Example;
