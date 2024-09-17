import { PiArrowCounterClockwise } from "react-icons/pi";
import s from "./Counter.module.css";
import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(11);
  const [step, setStep] = useState(1);

  const handleIncreaseCounter = () => {
    setCounter((prev) => prev + step);
  };

  const handleDecreaseCounter = () => {
    setCounter((prev) => prev - step);
  };

  const handleResetCounter = () => {
    setCounter(0);
    setStep(1);
  };
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input
          type="text"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <div className={s.flex}>
          <button onClick={handleDecreaseCounter} className="btn">
            minus
          </button>
          <button onClick={handleResetCounter} className="btn">
            reset
          </button>
          <button onClick={handleIncreaseCounter} className="btn">
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
