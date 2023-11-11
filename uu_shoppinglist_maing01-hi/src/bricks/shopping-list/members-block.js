//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState, useEffect, PropTypes } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import CreateModal from "./create-modal.js";
import MembersList from "./members-list.js";
import MembersForm from "./members-form.js";
//@@viewOff:imports

//@@viewOn:constants
const currentUser = {
  id: '5626-3282-9969-0000',
  name: 'Petr',
  surname: 'Levytskyi',
  login: 'o.test@gmail.com',
  password: '12345678'
}
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const MembersBlock = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "MembersBlock",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    modal: PropTypes.bool.isRequired,
    setModal: PropTypes.func.isRequired,
    owner: PropTypes.object.isRequired,
    addMember: PropTypes.func.isRequired,
    shopUsers: PropTypes.array.isRequired,
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired,
    searchedMembers: PropTypes.array.isRequired,
    handleDeleteUser: PropTypes.func.isRequired,
    handleLeaveCurrentUser: PropTypes.func.isRequired
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    modal: false,
    setModal: () => { },
    owner: {},
    addMember: () => { },
    shopUsers: [],
    query: '',
    setQuery: () => { },
    searchedMembers: [],
    handleDeleteUser: () => { },
    handleLeaveCurrentUser: () => { }
  },
  //@@viewOff:defaultProps

  render({
    modal,
    setModal,
    shoppingList,
    setShoppingList,
    addMember,
    handleDeleteUser,
    handleLeaveMemberUser
  }) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <Uu5Elements.Block
        card="full"
        headerSeparator
        header='List of members'
        headerType="heading"
        level={5}
        actionList={[
          {
            icon: "uugds-plus",
            children: "Add users",
            primary: true,
            onClick: () => setModal(true)
          },
          currentUser.id &&
          shoppingList.memberId.includes(currentUser.id) && {
            icon: 'uugds-delete',
            children: 'Leave',
            onClick: () => handleLeaveMemberUser(currentUser.id)
          }
        ].filter(Boolean)}
      >
        <CreateModal
          visible={modal}
          setVisible={setModal}>
          <MembersForm  shoppingList={shoppingList} setShoppingList={setShoppingList} addMember={addMember}/>
        </CreateModal>
        <MembersList shoppingList={shoppingList} handleDeleteUser={handleDeleteUser}/>
      </Uu5Elements.Block>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MembersBlock };
export default MembersBlock;
//@@viewOff:exports
