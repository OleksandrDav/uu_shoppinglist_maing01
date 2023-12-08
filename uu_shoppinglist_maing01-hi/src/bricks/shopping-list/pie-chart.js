//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import { Doughnut } from 'react-chartjs-2';
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const PieChart = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "PieChart",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ products }) {
    //@@viewOn:private
    const notUndefined = products ? products : []

    const completedCount = notUndefined.filter(product => product.completed).length;
    const notCompletedCount = notUndefined.length - completedCount;
    const state = ['Completed', 'Not Completed']

    const data = {
      labels: state,
      datasets: [
        {
          data: [completedCount, notCompletedCount],
          backgroundColor: ['#36A2EB', '#FF6384'],
          hoverBackgroundColor: ['#36A2EB', '#FF6384'],
        },
      ],
    };
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Doughnut data={data} />
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { PieChart };
export default PieChart;
//@@viewOff:exports
