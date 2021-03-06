// union Example ...
//  "active" | "deactive";
// it is Not allowed another types

type ProfileInterface = {
  user: string;
  status: "active" | "deactive";
};

const UnionEx5 = ({ user, status }: ProfileInterface) => {
  return (
    <div>
      <h3>Union Example</h3>
      <div>{user}</div>
      <div>{status}</div>
      <hr />
    </div>
  );
};

export default UnionEx5;
