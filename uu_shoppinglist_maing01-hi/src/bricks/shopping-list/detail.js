//@@viewOn:imports
import { createVisualComponent, useState } from "uu5g05";
import Config from "./config/config.js";
import MembersBlock from "./members-block.js";
import ProductBlock from "./product-block.js";
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

const Detail = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Detail",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  // propTypes: {
  //   data: PropTypes.shape({
  //     id: PropTypes.string,
  //     name: PropTypes.string,
  //     products: PropTypes.arrayof(
  //       PropTypes.shape({
  //         id: PropTypes.string.isRequired,
  //         name: PropTypes.string,
  //         completed: PropTypes.bool,
  //       })
  //     ),
  //     archived: PropTypes.bool
  //   }),
  // },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ data, users }) {
    //@@viewOn:private
    const [shoppingList, setShoppingList] = useState(data)
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <>
        <MembersBlock users={users} shoppingList={shoppingList} /> 
        <ProductBlock shoppingList={shoppingList} setShoppingList={setShoppingList}/>
      </>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Detail };
export default Detail;
//@@viewOff:exports