//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
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

const ProductFilter = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ProductFilter",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({filter, setFilter}) {
    //@@viewOn:private

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    
    return (
      <div>
        <label>Filter by completed</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="notCompleted">Not Completed</option>
          </select>
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ProductFilter };
export default ProductFilter;
//@@viewOff:exports
