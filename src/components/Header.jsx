import Title from "./Title";

const Header = (props) => {
  console.log(props);
  return <Title title={props.title} />;
};

export default Header;
