//@@viewOn:imports
import { createComponent, useDataList, useMemo, useSession, useState } from "uu5g05";
import Config from "./config/config.js";
import Calls from "calls"
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const HomeListProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "HomeListProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ children }) {
    //@@viewOn:private
    const shoppingListDataList = useDataList({
      handlerMap: {
        load: handleLoad,
        loadNext: handleLoadNext,
        create: handleCreate,
      },
      itemHandlerMap: {
        update: handleUpdate,
        delete: handleDelete,
      },
      pageSize: 3,
    });

    function handleLoad(dtoIn) {
      return Calls.ShoppingList.list(dtoIn);
    }

    function handleLoadNext(dtoIn) {
      return Calls.ShoppingList.list(dtoIn);
    }

    function handleCreate(dtoIn) {
      return Calls.ShoppingList.create(dtoIn);
    }

    async function handleUpdate(dtoIn) {
      return Calls.ShoppingList.update(dtoIn)
    }

    function handleDelete(dtoIn) {
      return Calls.ShoppingList.delete(dtoIn);
    }

    function filterShoppingList(shoppingListList, filter) {
      return shoppingListList?.filter((list) => {
        if (filter === 'all') {
          return true;
        } else if (filter === 'archived') {
          return list.data.archived;
        } else if (filter === 'nonArchived') {
          return !list.data.archived;
        }
      }) || [];
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return typeof children === "function" ? children({ shoppingListDataList, filterShoppingList }) : children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { HomeListProvider };
export default HomeListProvider;
//@@viewOff:exports
