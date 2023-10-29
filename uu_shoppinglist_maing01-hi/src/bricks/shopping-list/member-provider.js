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
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
      })
    ).isRequired,
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
    users: [],
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
