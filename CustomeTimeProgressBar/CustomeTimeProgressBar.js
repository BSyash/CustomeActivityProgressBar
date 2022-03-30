import React from "react";
import "./style.scss";

const CustomeTimeProgressBar = () => {
  const timeSlot = ["12am", "6am", "12pm", "6pm", "12am"];
  const timeData = [
    {
      startTime: "03:25:53",
      endTime: "8:06:00",
    },
    {
      startTime: "09:25:53",
      endTime: "13:06:00",
    },
    {
      startTime: "14:25:53",
      endTime: "19:06:00",
    },
    {
        startTime: "19:25:53",
        endTime: "23:06:00",
      }
  ];
  const convertToSecs = (time) => {
    const timeD = time.split(":");
    let convertTime = (+timeD[0] * 60 * 60 + +timeD[1] * 60 + +timeD[2]) / 864;
    return convertTime;
  };
  return (
    <div className="customeTimeProgressBar">
      <div className="timeProgressBar">
        {timeData.map((timeSlot, id) => {
          const startTimeSec = convertToSecs(timeSlot.startTime);
          const endTimeSec = convertToSecs(timeSlot.endTime);
          const periodTimeSec = endTimeSec - startTimeSec;
          return (
            <div
              key={id}
              style={{
                width: `${startTimeSec + periodTimeSec}px`,
                left: `${startTimeSec}%`,
              }}
              className="progresItem"
            ></div>
          );
        })}
      </div>
      <div className="timeSlots">
        {timeSlot.map((slot, id) => (
          <div key={id} className="pipe">
            |
          </div>
        ))}
      </div>
      <div className="timeSlots">
        {timeSlot.map((slot, id) => (
          <div key={id} className="slot">
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomeTimeProgressBar;