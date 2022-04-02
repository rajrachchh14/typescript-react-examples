// ChildrenPropsEx 3
// React.FC ...
// This Way Writing Of It Will Default Access Children Props
// (Not Need To Delacre Children as a type)

type MyInterface = {
  user: string;
  salarey: number;
};

// const ChildrenPropsEx8: React.FC<MyInterface> = (props) => {

const ChildrenPropsEx8: React.FC<MyInterface> = ({
  user,
  salarey,
  children
}) => {
  return (
    <div>
      <h3>ChildrenProps Example 3</h3>

      <div>Name {user}</div>
      <div> salarey {salarey} </div>
      <div> {children}</div>
      <hr />
    </div>
  );
};

export default ChildrenPropsEx8;
