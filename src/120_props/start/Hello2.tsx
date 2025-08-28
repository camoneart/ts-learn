type Props = {
  text: string;
};

const Hello2: React.FC<Props> = (props) => {
  return <p>{props.text}</p>;
};

export default Hello2;
