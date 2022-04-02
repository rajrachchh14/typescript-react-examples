// Destrcture Example
// Destrcture props

type ProfileInterface = {
  user: string;
  age?: number;
};
const DestrctureExampleFour = ({ user, age }: ProfileInterface) => {
  return (
    <div>
      <h3> DestrctureExample </h3>
      <div>{user}</div>
      <div>{age || "300"}</div>
      <hr />
    </div>
  );
};
export default DestrctureExampleFour;
