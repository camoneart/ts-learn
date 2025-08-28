type Props = {
  name: string;
};

const Hello = ({ name }: Props) => {
  return <h1>{name}</h1>;
};

export default Hello;
