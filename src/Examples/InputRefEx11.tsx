// Array Merge Panding
// in set List

import React, { useRef } from "react";
// useState
const InputRefEx11 = () => {
  let fname = useRef<HTMLInputElement | null>(null);
  let fprice = useRef<HTMLInputElement | null>(null);
  // let [list, setList] = useState<string[]>([]);

  function DataAdd() {
    if (fname.current?.name) {
      let a = fname.current.value;
    }
    if (fprice.current?.name) {
      let b = fprice.current.value;
    }
    // setList([...list, a, b]);
  }

  return (
    <div>
      <h3> UseRef Examples & object | array merge panding </h3>
      <input name="fname" ref={fname} placeholder="food name" />
      <br />
      <input name="fprice" ref={fprice} placeholder="price" />
      <br />
      <input type="submit" onClick={DataAdd} />
      <hr />
    </div>
  );
};

export default InputRefEx11;
