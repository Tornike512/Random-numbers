import { useState, useEffect } from "react";

import "./App.scss";

function App() {
  const [numbersList, setNumbersList] = useState<string[]>([]);

  const arrOfNums: number[] = [];

  const generateOneRnadom = () => {
    for (let i = 0; i < 10; i++) {
      arrOfNums.push(Math.floor(Math.random() * 10));
    }
  };

  const generateWholeNumber = setTimeout(() => {
    generateOneRnadom();
    const number = `(${arrOfNums[0]}${arrOfNums[1]}${arrOfNums[2]}) ${arrOfNums[3]}${arrOfNums[4]}${arrOfNums[5]}-${arrOfNums[6]}${arrOfNums[7]}${arrOfNums[8]}`;
    console.log(number);
    setNumbersList((prev) => [...prev, number]);
  }, 1);

  useEffect(() => {
    if (numbersList.length === 1200) {
      clearTimeout(generateWholeNumber);
    }
  }, [numbersList]);

  console.log(numbersList);

  return (
    <main className="main-container">
      <button className="generate">Generate</button>
      <table>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
        </tr>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
        </tr>
      </table>
    </main>
  );
}

export default App;
