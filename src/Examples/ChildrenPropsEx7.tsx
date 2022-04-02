// ChildrenProps
// ChildrenProps  Passing As a span Tag and access Also Like this ...
// children?: React.ReactNode;

// import React from "react";

type MyInterface = {
  user: string;
  salarey: number;
  children?: React.ReactNode;
};

const ChildrenPropsEx7 = (props: MyInterface) => {
  return (
    <div>
      <h3>ChildrenProps New Example</h3>
      <div>Name {props.user}</div>
      <div> salarey {props.salarey} </div>
      <div> {props.children}</div>
      <hr />
    </div>
  );
};

export default ChildrenPropsEx7;
