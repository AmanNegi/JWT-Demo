import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Switch({ toggleDarkMode }) {
  const [isSelected, setIsSelected] = useState(true);
  const height = 8;
  const width = 16;

  return (
    <div
      onClick={() => {
        setIsSelected(!isSelected);
        toggleDarkMode();
      }}
      className={
        `flex w-${width} h-${height}  rounded-full 
        ` + (isSelected ? "bg-green-600" : " bg-gray-600")
      }
    >
      <span
        className={
          `h-${height - 2} w-${
            height - 2
          } mt-1 bg-white rounded-full transition-all duration-500` +
          (isSelected ? " ml-9" : " ml-1")
        }
      ></span>
    </div>
  );

  // TODO: Add Scaling Option
}

export default Switch;
