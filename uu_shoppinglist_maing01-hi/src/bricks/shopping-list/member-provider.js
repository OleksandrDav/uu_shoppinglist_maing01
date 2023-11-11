//@@viewOn:imports
import { createComponent, useEffect, useMemo, useState, PropTypes } from "uu5g05";
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
  propTypes: {
    shoppingList: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      ownerId: PropTypes.string.isRequired,
      memberId: PropTypes.arrayOf(PropTypes.string).isRequired,
      products: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          completed: PropTypes.bool.isRequired
        })
      ).isRequired,
      archived: PropTypes.bool.isRequired
    }).isRequired,
    children: PropTypes.node 
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    shoppingList: {
      id: '',
      name: '',
      ownerId: '',
      memberId: [],
      products: [],
      archived: false
    }
  },
  //@@viewOff:defaultProps

  render({shoppingList, setShoppingList, children }) {
    //@@viewOn:private
    const [modal, setModal] = useState(false)

    function addMember(uuIdentity) {
      const updatedShoppingList = { ...shoppingList };
      updatedShoppingList.memberId.push(uuIdentity)
      setShoppingList(updatedShoppingList)
    }
    function handleDeleteUser(userId) {
      const updatedShoppingList = { ...shoppingList }
      updatedShoppingList.memberId = updatedShoppingList.memberId.filter(user => user !== userId )
      setShoppingList(updatedShoppingList)
    }
    function handleLeaveMemberUser(userId) {
      const updatedShoppingList = { ...shoppingList }
      updatedShoppingList.memberId = updatedShoppingList.memberId.filter(user => user !== userId )
      setShoppingList(updatedShoppingList)
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const value = {
      modal,
      setModal,
      shoppingList,
      setShoppingList,
      addMember,
      handleDeleteUser,
      handleLeaveMemberUser
    }
    return typeof children === "function" ? children(value) : children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MemberProvider };
export default MemberProvider;
//@@viewOff:exports
