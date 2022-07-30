import React from 'react';
import {
 CircularProgressbar,
 buildStyles
} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
export default function CircleChartOne(props) {

 const percentage = 90;
  return (
    <>
     <CircularProgressbar 
     value={props.value} 
     text={`${props.value}%`} 
     strokeWidth={10}
     height={140}
     styles={buildStyles({
      pathColor: "#f00",
      trailColor: "#e1e1e1",
      textColor: "#000",
      strokeLinecap: "round"
     })}
     />
    </>
  );
}

CircleChartOne.defaultProps = {
 value: 100
}
