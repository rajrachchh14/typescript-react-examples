import PropsExampleOne from "./Examples/PropsExampleOne";
import InterFaceExampleTwo from "./Examples/InterFaceExampleTwo";
import OptionalPropsExampleThree from "./Examples/OptionalPropsExampleThree";
import DestrctureExampleFour from "./Examples/DestrctureExampleFour";
import UnionEx5 from "./Examples/UnionEx5";
import ChildrenPropsEx6 from "./Examples/ChildrenPropsEx6";
import ChildrenPropsEx7 from "./Examples/ChildrenPropsEx7";
import ChildrenPropsEx8 from "./Examples/ChildrenPropsEx8";
import StateEx9 from "./Examples/StateEx9";
import StateEx10 from "./Examples/StateEx10";
import InputRefEx11 from "./Examples/InputRefEx11";

function App() {
  return (
    <div className="App">
      <h1>Typescript- React Ex...</h1>
      <hr />

      <InputRefEx11 />
      <StateEx10 />
      <StateEx9 />
      <ChildrenPropsEx8 salarey={10000} user="raj">
        <span style={{ color: "red" }}> Address : Usa </span>
      </ChildrenPropsEx8>

      <ChildrenPropsEx7 salarey={10000} user="raj">
        <span style={{ color: "red" }}> Address : Usa </span>
      </ChildrenPropsEx7>

      <ChildrenPropsEx6 salarey={10000} user="raj">
        Address : Usa
      </ChildrenPropsEx6>

      <UnionEx5 user="raj" status="active" />
      <UnionEx5 user="raj" status="deactive" />
      {/* <UnionEx5 user="raj" status="deactiveAbc" /> */}
      <DestrctureExampleFour user="raj" />
      <OptionalPropsExampleThree user="raj" />
      <InterFaceExampleTwo user="raj" age={22} />
      <PropsExampleOne user="raj" />
    </div>
  );
}

export default App;
