const Title = (props) => {
  console.log(props);
  return (
    <div className="headerContainer">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Title;
