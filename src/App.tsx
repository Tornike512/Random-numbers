import { useState, useEffect } from "react";
import { stopCounting, milliseconds } from "./Utils/countLoad";
import ProgressBar from "./Components/ProgressBar/ProgressBar";

import "./App.scss";

function App() {
  const [numbersList, setNumbersList] = useState<string[]>([]);
  const [showProgressiveBar, setShowProgressiveBar] = useState<boolean>(false);
  const [countLoadTime, setCountLoadTime] = useState<number>(0);

  console.log(stopCounting());

  const arrOfNums: number[] = [];

  const generateOneRnadom = () => {
    for (let i = 0; i < 10; i++) {
      arrOfNums.push(Math.floor(Math.random() * 10));
    }
  };

  const generateWholeNumber = setTimeout(() => {
    generateOneRnadom();
    const number = `(${arrOfNums[0]}${arrOfNums[1]}${arrOfNums[2]}) ${arrOfNums[3]}${arrOfNums[4]}${arrOfNums[5]}-${arrOfNums[6]}${arrOfNums[7]}${arrOfNums[8]}`;
    setNumbersList((prev) => [...prev, number]);
  }, 1);

  useEffect(() => {
    if (numbersList.length === 1200) {
      clearTimeout(generateWholeNumber);
    }
  }, [numbersList]);

  const handleGenerateButton = () => {
    setShowProgressiveBar(true);
  };

  return (
    <main className="main-container">
      <button onClick={handleGenerateButton} className="generate">
        Generate
      </button>
      {showProgressiveBar && <ProgressBar width={0} />}
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
