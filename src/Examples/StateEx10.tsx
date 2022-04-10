// StateEx10.tsx

import React, { useState } from "react";

const StateEx10 = () => {
  const [foodname, setFoodName] = useState("");
  const [foodprice, setFoodPrice] = useState("");
  // const [foodList, setFoodList] = useState<string[]>([]);

  function DataAdd() {
    //  setFoodList([...foodList, { fname: foodname, fprice: foodprice }]);
    setFoodName("");
    setFoodPrice("");
  }

  function handelChange(name: any, e: React.ChangeEvent<HTMLInputElement>) {
    // console.log(name);
    // console.log(e);
    if (name === "foodname") {
      setFoodName(e.target.value);
    }
    if (name === "foodprice") {
      setFoodPrice(e.target.value);
    }
  }

  return (
    <div>
      <h3>Usestate Example 2</h3>
      <input
        name="foodname"
        value={foodname}
        onChange={(e) => handelChange("foodname", e)}
        placeholder="food name"
      />
      <br />
      <input
        name="foodprice"
        value={foodprice}
        onChange={(e) => handelChange("foodprice", e)}
        // onChange={(e) => setFoodPrice(e.target.value)}
        placeholder="price"
      />
      <br />
      <input type="submit" onClick={DataAdd} /> <br /> <br />
      FoodName | FoodPrice
      {/* <ul>
        {foodList &&
          foodList.map((item, i) => {
            return (
              <li key={i}>
                {item.fname} | {item.fprice}
              </li>
            );
          })}
      </ul> */}
      <hr />
    </div>
  );
};

export default StateEx10;
