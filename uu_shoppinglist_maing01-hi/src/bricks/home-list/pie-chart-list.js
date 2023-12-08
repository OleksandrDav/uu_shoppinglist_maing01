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

const PieChartList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "PieChartList",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({shoppingLists}) {
    //@@viewOn:private
    const shops = shoppingLists.map((shop) => shop.data)
    
    const data = {
    labels: shops.map((list) => list.name),
    datasets: [
      {
        data: shops.map((list) => list?.products?.length || 0),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
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
export { PieChartList };
export default PieChartList;
//@@viewOff:exports
