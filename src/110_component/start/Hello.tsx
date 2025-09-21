type Props = {
  text: string;
};

const Hello = ({ text }: Props) => {
  return <h1>Hello {text}</h1>;
};

export default Hello;
