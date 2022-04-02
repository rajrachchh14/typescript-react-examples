// OptionalPropsExample
// Example Of Optional Props   Like   ...
//  age?: number;

// If data Not Availablable Use || (or) sign

type MyInterface = {
  user: string;
  age?: number;
};

const OptionalPropsExampleThree = (props: MyInterface) => {
  return (
    <div>
      <h3>Optional Props Example</h3>
      <div>Name ::: {props.user}</div>
      <div> Age :: {props.age || "data is not available"} </div>
      <hr />
    </div>
  );
};

export default OptionalPropsExampleThree;
