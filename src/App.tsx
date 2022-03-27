// import PropsExampleOne from "./Examples/PropsExampleOne";

import ExampleTwoInterFace from "./Examples/ExampleTwoInterFace";

function App() {
  return (
    <div className="App">
      <h1>Ts- React Examples</h1>
      {/* <PropsExampleOne user="raj" /> */}
      <ExampleTwoInterFace user="raj" age={10} />
    </div>
  );
}

export default App;
