//@@viewOn:imports
import { createComponent, useEffect, useMemo, useState } from "uu5g05";
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

  render({ users, shoppingList, children }) {
    //@@viewOn:private
    const [allUsers, setAllUsers] = useState(users)
    const [shopUsers, setShopUsers] = useState([])
    const [modal, setModal] = useState(false)

    useEffect(() => {
      const filteredUsers = allUsers.filter(user => (
        shoppingList.memberId.includes(user.id)
      ));
      setShopUsers(filteredUsers);
    }, [allUsers, shoppingList.memberId, shoppingList.ownerId]);

    const owner = allUsers.find(user => (
      user.id === shoppingList.ownerId
    ));

    const addMember = (userId) => {
      const newUser = allUsers.find(user => user.id === userId)
      setShopUsers([...shopUsers, newUser])
    }

    const [query, setQuery] = useState('')
    const searchedMembers = useMemo(() => {
      return allUsers.filter(user =>
        !shopUsers.includes(user) && user !== owner &&
        (user.name.toLowerCase().includes(query.toLowerCase()) || user.surname.toLowerCase().includes(query.toLowerCase()))
      );
    }, [allUsers, shopUsers, owner, query]);

    function handleDeleteUser(id) {
      setShopUsers(shopUsers.filter(user => user.id !== id))
    }

    const handleLeaveCurrentUser = (currentUser) => {
      const updatedUsers = shopUsers.filter(user => user.id !== currentUser);
      setShopUsers(updatedUsers);
    };
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const value = {
      modal,
      setModal,
      owner,
      addMember,
      shopUsers,
      setShopUsers,
      query,
      setQuery,
      searchedMembers,
      handleDeleteUser,
      handleLeaveCurrentUser
    }
    return typeof children === "function" ? children(value) : children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MemberProvider };
export default MemberProvider;
//@@viewOff:exports
