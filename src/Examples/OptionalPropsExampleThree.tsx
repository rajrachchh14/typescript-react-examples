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
      <div>Name ::: {props.user}</div>
      <div> Age :: {props.age || "data is not available"} </div>
    </div>
  );
};

export default OptionalPropsExampleThree;
