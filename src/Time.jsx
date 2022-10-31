import React, { useEffect, useState } from "react";
import Clock from "react-clock";

function Time() {
  const [timeState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return <div className="border my-8 mx-8 ">{timeState}</div>;
}
export default Time;
