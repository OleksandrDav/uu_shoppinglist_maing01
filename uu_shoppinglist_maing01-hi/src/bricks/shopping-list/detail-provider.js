//@@viewOn:imports
import { createComponent, useState } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
const initialShoppingList = {
  id: '5fb2458d4b9e56',
  name: 'Shoppping List Name',
  ownerId: '7389-360-836-0000',
  memberId: ['5626-3282-9969-0000', '1132-8212-4841-0000'],
  products: [
    {
      id: 'un123',
      name: 'Tomato',
      completed: true
    },
    {
      id: 'un124',
      name: 'Milk',
      completed: false
    },
    {
      id: 'un125',
      name: 'Carrot',
      completed: false
    }
  ],
  archived: false
}
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const DetailProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "DetailProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({children}) {
    //@@viewOn:private
    const [shoppingList, setShoppingList] = useState(initialShoppingList)
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const value = {shoppingList, setShoppingList}
    return typeof children === "function" ? children(value) : children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { DetailProvider };
export default DetailProvider;
//@@viewOff:exports
