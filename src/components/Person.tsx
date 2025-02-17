import React from "react";
import { Individual, Relationship } from "../types/types";

export const Person: React.FC<Individual> = ({ relationship, name }) => {
  const DARK_GREEN = "#5b918f";
  const LIGHT_GREEN = "#91cfcc";
  const fillColor =
    relationship === Relationship.Child ? DARK_GREEN : LIGHT_GREEN;
  return (
    <div className="person">
      <svg
        fill="none"
        height="60"
        viewBox="0 0 20 20"
        width="60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m10 18c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm-2-11c0-1.10457.89543-2 2-2 1.1046 0 2 .89543 2 2s-.8954 2-2 2c-1.10457 0-2-.89543-2-2zm-.50002 3h5.00002c.8284 0 1.5.6716 1.5 1.5 0 1.1161-.459 2.0103-1.2121 2.6148-.7413.595-1.7348.8852-2.7879.8852-1.05308 0-2.04658-.2902-2.78785-.8852-.75318-.6045-1.21215-1.4987-1.21215-2.6148 0-.8284.67156-1.5 1.49998-1.5z"
          fill={fillColor}
          strokeWidth={0.5}
          stroke="black"
        />
      </svg>
      <div>{relationship}</div>
      <div>
        <strong>{name}</strong>
      </div>
    </div>
  );
};
