const Job = (props) => {
  console.log(props);
  return (
    <div className={props.className}>
      <h2>{props.title}</h2>
      <div className="footerbox">
        <p>{props.contractType}</p>
        <p>{props.country}</p>
        <p>{props.city}</p>
      </div>
    </div>
  );
};

export default Job;
