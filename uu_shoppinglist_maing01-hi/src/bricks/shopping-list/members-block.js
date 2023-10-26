//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState, useEffect } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import CreateModal from "./create-modal.js";
import MembersList from "./members-list.js";
import MembersForm from "./members-form.js";
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

const MembersBlock = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "MembersBlock",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({
    modal,
    setModal,
    owner,
    addMember,
    shopUsers,
    setShopUsers,
    query,
    setQuery,
    searchedMembers,
    handleDeleteUser
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
          }
        ]}
      >
        <CreateModal
          visible={modal}
          setVisible={setModal}>
          <MembersForm addMember={addMember} query={query} setQuery={setQuery} searchedMembers={searchedMembers}/>
        </CreateModal>
        <MembersList owner={owner} shopUsers={shopUsers} handleDeleteUser={handleDeleteUser} />
      </Uu5Elements.Block>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MembersBlock };
export default MembersBlock;
//@@viewOff:exports
