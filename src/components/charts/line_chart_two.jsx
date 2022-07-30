import React from 'react';
import ChartistGraph from "react-chartist";
import ChartistTooltip from 'chartist-plugin-tooltips-updated';
import "chartist/dist/scss/chartist.scss";
export default function LineChartTwo() {

 const simpleLineChartData = {
  labels: false,
  series: [
   [1, 9, 7, 8, 5, 12, 15],
  ]
 }
 const lineChartOptions = {
  showArea: false,
  fullWidth: true,
  chartPadding: {
   left: -20
  },
  axisX: {
   showLabel: true,
   showGrid: true,
   position: 'end'
  },
  plugins: [
   ChartistTooltip()
  ]
 }

  return (
    <>
      <ChartistGraph data={simpleLineChartData} type={'Line'} options={lineChartOptions} />
    </>
  );
}
