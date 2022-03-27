// import PropsExampleOne from "./Examples/PropsExampleOne";

import InterFaceExampleTwo from "./Examples/InterFaceExampleTwo";

function App() {
  return (
    <div className="App">
      <h1>Ts- React Examples</h1>
      {/* <PropsExampleOne user="raj" /> */}
      <InterFaceExampleTwo user="raj" age={22} />
    </div>
  );
}

export default App;
