// Example Of Interface

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
      <div>Name {props.user}</div>
      <div> Age {props.age} </div>
    </div>
  );
};

export default InterFaceExampleTwo;
