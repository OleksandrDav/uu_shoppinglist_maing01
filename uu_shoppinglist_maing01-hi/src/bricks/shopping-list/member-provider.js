//@@viewOn:imports
import { createComponent, useEffect, useMemo, useState, PropTypes, useDataList } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const MemberProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "MemberProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ children }) {
    //@@viewOn:private
    const memberDataList = useDataList({
      handlerMap: {
        memberAdd: handleCreate,
      },
      itemHandlerMap: {
        memberDelete: handleDelete,
      },
      pageSize: 100,
    });

    function handleCreate(dtoIn) {
      return Calls.ShoppingList.memberAdd(dtoIn);
    }

    function handleDelete(dtoIn) {
      return Calls.ShoppingList.memberDelete(dtoIn);
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
  
    return typeof children === "function" ? children({memberDataList}) : children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MemberProvider };
export default MemberProvider;
//@@viewOff:exports
