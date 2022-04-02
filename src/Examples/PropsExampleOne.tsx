// Passing Props And Deleacre Type As string
// Here We Can Also Use Like This ...
// user: string | number
const PropsExampleOne = (props: { user: string }) => {
  return (
    <div>
      <h3>Props Example</h3>
      <div>Hi {props.user}</div>
      <div>abc</div>
      <hr />
    </div>
  );
};

export default PropsExampleOne;
