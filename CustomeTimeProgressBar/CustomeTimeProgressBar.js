import React from "react";
import "./style.scss";

const CustomeTimeProgressBar = () => {
  const timeSlot = ["12am", "6am", "12pm", "6pm", "12am"];
  const timeData = [
    {
      startTime: "03:25:00",
      endTime: "03:40:00",
    },
    {
      startTime: "03:40:00",
      endTime: "03:55:00",
    },
    {
      startTime: "03:55:00",
      endTime: "04:10:00",
    },
    {
      startTime: "04:10:00",
      endTime: "04:25:00",
    },
    {
      startTime: "04:45:00",
      endTime: "05:10:00",
    },
    {
      startTime: "05:10:00",
      endTime: "05:33:00",
    },
    {
      startTime: "05:33:00",
      endTime: "05:52:00",
    },
    {
      startTime: "06:00:00",
      endTime: "07:14:00",
    },
    {
      startTime: "08:23:00",
      endTime: "08:59:00",
    }
  ];
  

  function convertToSecs(time) {
    const timeD = typeof (time) === "string" && time.split(":");
    let convertTime = (+timeD[0] * 60 * 60 + +timeD[1] * 60 + +timeD[2]) / 864;
    return convertTime;
  };

  const pertgTime = timeData.map((times, id) => {
    return (
      { startTime: convertToSecs(times?.startTime), endTime: convertToSecs(times?.endTime) }
    )
  })


  const tempTimeData = []
  for (let index = 0; index < pertgTime.length; index++) {
    if (tempTimeData.slice(-1)[0]?.endTime === pertgTime[index].startTime) {
      tempTimeData.slice(-1)[0].endTime = tempTimeData.slice(-1)[0].endTime + (pertgTime[index].endTime - pertgTime[index].startTime)
    } else {
      tempTimeData.push({ startTime: pertgTime[index - 1]?.endTime, endTime: pertgTime[index]?.startTime })
      tempTimeData.push(pertgTime[index])
    }
  }
  console.log("tempTimeData => ", tempTimeData);

  return (
    <div className="customeTimeProgressBar">
      <div className="timeProgressBar">
        {tempTimeData.map((timeSlot, id) => {
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