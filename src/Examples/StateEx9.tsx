import { useState } from "react";

const StateEx9 = () => {
  const [foodname, setFoodName] = useState("");
  const [foodprice, setFoodPrice] = useState("");
  const [foodList, setFoodList] = useState<string[]>([]);

  function DataAdd() {
    setFoodList([...foodList, { fname: foodname, fprice: foodprice }]);
    setFoodName("");
    setFoodPrice("");
  }

  return (
    <div>
      <h3>Usestate Example , Panding here type declare</h3>
      <input
        name="foodname"
        value={foodname}
        onChange={(e) => setFoodName(e.target.value)}
        placeholder="food name"
      />
      <br />
      <input
        name="foodprice"
        value={foodprice}
        onChange={(e) => setFoodPrice(e.target.value)}
        placeholder="price"
      />
      <br />
      <input type="submit" onClick={DataAdd} /> <br /> <br />
      FoodName | FoodPrice
      <ul>
        {foodList &&
          foodList.map((item: any, i) => {
            return (
              <li key={i}>
                {item.fname} | {item.fprice}
              </li>
            );
          })}
      </ul>
      <hr />
    </div>
  );
};

export default StateEx9;
