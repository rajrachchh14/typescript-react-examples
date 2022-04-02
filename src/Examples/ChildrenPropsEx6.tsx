// Children Props ...
// Here Passing Address as a children props example

type ProfileInterface = {
  salarey: number;
  user: string;
  children?: string;
};

const ChildrenPropsEx6 = ({ user, salarey, children }: ProfileInterface) => {
  return (
    <div>
      <h3>ChildrenProps Example</h3>
      <div>{user}</div>
      <div>{salarey}</div>
      <div>{children} </div>
      <hr />
    </div>
  );
};

export default ChildrenPropsEx6;
