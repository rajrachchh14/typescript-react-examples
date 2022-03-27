// Passing Props And Deleacre Type As string
// Here We Can Also Use Like This ...
// user: string | number
const PropsExampleOne = (props: { user: string }) => {
  return (
    <div>
      <div>Hi {props.user}</div>
      <div>abc</div>
    </div>
  );
};

export default PropsExampleOne;
