//@@viewOn:imports
import { createComponent, useMemo, useState, PropTypes, useDataList } from "uu5g05";
import Config from "./config/config.js";
import Calls from "calls"
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const ProductProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ProductProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    shoppingList: PropTypes.object.isRequired,
    setShoppingList: PropTypes.func.isRequired,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    shoppingList: {},
    setShoppingList: () => { },
  },
  //@@viewOff:defaultProps

  render({ children }) {

    //@@viewOn:private
    const productDataList = useDataList({
      handlerMap: {
        productAdd: handleCreate,
      },
      itemHandlerMap: {
        productUpdate: handleUpdate,
        productDelete: handleDelete,
      },
      pageSize: 100,
    });

    function handleCreate(dtoIn) {
      return Calls.ShoppingList.productAdd(dtoIn);
    }

    async function handleUpdate(dtoIn) {
      return Calls.ShoppingList.productUpdate(dtoIn)
    }

    function handleDelete(dtoIn) {
      return Calls.ShoppingList.productDelete(dtoIn);
    }


    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    
    return typeof children === "function" ? children({productDataList}) : children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ProductProvider };
export default ProductProvider;
//@@viewOff:exports
