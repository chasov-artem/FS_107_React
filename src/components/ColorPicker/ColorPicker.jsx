import s from "./ColorPicker.module.css";
import colors from "../../assets/colors";
import { useState } from "react";
export const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("white");
  const handleChangeColor = (color) => {
    setCurrentColor(color);
  };
  return (
    <section style={{ backgroundColor: currentColor }} className={s.bgWrapper}>
      <div className={s.pallette}>
        <ul className={s.list}>
          <h1>Current color: {currentColor}</h1>
          {colors.map((item) => (
            <li
              onClick={() => handleChangeColor(item.color)}
              className={s.item}
              key={item.id}
            >
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
