import React from 'react';
import ChartistGraph from "react-chartist";
import ChartistTooltip from 'chartist-plugin-tooltips-updated';
import "chartist/dist/scss/chartist.scss";
export default function LineChartOne() {

const simpleLineChartData = {
 labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
 series: [
  [1, 9, 7, 8, 5, 12, 5],
  [2, 12, 9, 11, 7, 10, 3]
 ]
 }
 const lineChartOptions = {
  low: 2,
  showArea: false,
  fullWidth: true,
  axisY: {
   labelInterpolationFnc: function (value) {
    return (value * 100);
   }
  },
  chartPadding: {
   right: 40
  },
  plugins: [
   ChartistTooltip()
  ]
 }
  return (
    <>
     <ChartistGraph data={simpleLineChartData} type={'Line'} options={lineChartOptions}  />
    </>
  );

}
