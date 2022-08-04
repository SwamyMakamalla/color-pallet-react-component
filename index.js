const Box = (props) => {
  //  Write your code here.
  const { name, className } = props;
  return <p className={className}>{name}</p>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box name="small" className="yellow" />
      <Box name="medium" className="blue" />
      <Box name="large" className="pink" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
