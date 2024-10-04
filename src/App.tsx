import { useState, useEffect } from "react";
import { stopCounting } from "./Utils/countLoad";
import ProgressBar from "./Components/ProgressBar/ProgressBar";

import "./App.scss";

function App() {
  const [numbersList, setNumbersList] = useState<string[]>([]);
  const [showProgressiveBar, setShowProgressiveBar] = useState<boolean>(false);
  const [startGenerating, setStartGenerating] = useState<boolean>(false);
  const [countLoadTime, setCountLoadTime] = useState<boolean>(false);

  const arrOfNums: number[] = [];

  const generateOneRnadom = () => {
    for (let i = 0; i < 10; i++) {
      arrOfNums.push(Math.floor(Math.random() * 10));
    }
  };

  useEffect(() => {
    if (startGenerating) {
      const generateWholeNumber = setTimeout(() => {
        generateOneRnadom();
        const number = `(${arrOfNums[0]}${arrOfNums[1]}${arrOfNums[2]}) ${arrOfNums[3]}${arrOfNums[4]}${arrOfNums[5]}-${arrOfNums[6]}${arrOfNums[7]}${arrOfNums[8]}`;
        setNumbersList((prev) => [...prev, number]);
      }, 1);

      if (numbersList.length === 1200) {
        clearTimeout(generateWholeNumber);
      }
    }
  }, [startGenerating, numbersList]);

  const handleGenerateButton = () => {
    setShowProgressiveBar(true);
    setStartGenerating(true);
  };

  console.log(numbersList);

  return (
    <main className="main-container">
      <button onClick={handleGenerateButton} className="generate">
        Generate
      </button>
      <h1>It took {stopCounting()}s to generate numbers</h1>
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
