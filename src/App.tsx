import { useState, useEffect } from "react";
import { formatTime } from "./Utils/formatTime";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import useCounter from "./Hooks/useCounter";

import "./App.scss";
import { Tables } from "./Components/Tables";

function App() {
  const [numbersList, setNumbersList] = useState<string[]>([]);
  const [showProgressiveBar, setShowProgressiveBar] = useState<boolean>(false);
  const [startGenerating, setStartGenerating] = useState<boolean>(false);
  const [showLoadTime, setShowLoadTime] = useState<boolean>(false);
  const [progressiveWidth, setProgressiveWidth] = useState<number>(90);

  const arrOfNums: number[] = [];

  const generateOneRandom = () => {
    for (let i = 0; i < 10; i++) {
      arrOfNums.push(Math.floor(Math.random() * 10));
    }
  };

  useEffect(() => {
    if (startGenerating) {
      const generateWholeNumber = setTimeout(() => {
        generateOneRandom();
        const number = `(${arrOfNums[0]}${arrOfNums[1]}${arrOfNums[2]}) ${arrOfNums[3]}${arrOfNums[4]}${arrOfNums[5]}-${arrOfNums[6]}${arrOfNums[7]}${arrOfNums[8]}`;
        setNumbersList((prev) => [...prev, number]);
      }, 1);

      if (numbersList.length === 1200) {
        clearTimeout(generateWholeNumber);
        setStartGenerating(false);
        setShowLoadTime(true);
        setProgressiveWidth(100);
      }
    }
  }, [startGenerating, numbersList]);

  const handleGenerateButton = () => {
    setShowProgressiveBar(true);
    setStartGenerating(true);
  };

  const counterValue = useCounter(startGenerating);

  return (
    <main className="main-container">
      <button onClick={handleGenerateButton} className="generate">
        Generate
      </button>

      <h1>
        {showLoadTime &&
          `It took ${formatTime(
            counterValue
          )} seconds to generate phone numbers`}
      </h1>

      {showProgressiveBar && <ProgressBar width={progressiveWidth} />}
      {showLoadTime && (
        <div className="table-wrapper">
          <Tables numbersList={numbersList} column1={0} column2={100} />
          <Tables numbersList={numbersList} column1={200} column2={300} />
          <Tables numbersList={numbersList} column1={400} column2={500} />
          <Tables numbersList={numbersList} column1={600} column2={700} />
          <Tables numbersList={numbersList} column1={800} column2={900} />
          <Tables numbersList={numbersList} column1={1000} column2={1100} />
          <Tables numbersList={numbersList} column1={1200} column2={1300} />
        </div>
      )}
    </main>
  );
}

export default App;
