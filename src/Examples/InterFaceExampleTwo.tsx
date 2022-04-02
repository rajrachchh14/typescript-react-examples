// Example Of Interface
// Inter Face Declare Two types...

// Type one Interface
/*
interface MyInterface {
  user: string;
  age: number;
}
*/

// Type two Interface
type MyInterface = {
  user: string;
  age: number;
};

const InterFaceExampleTwo = (props: MyInterface) => {
  return (
    <div>
      <h3>Interface Example</h3>
      <div>Name {props.user}</div>
      <div> Age {props.age} </div>
      <hr />
    </div>
  );
};

export default InterFaceExampleTwo;
