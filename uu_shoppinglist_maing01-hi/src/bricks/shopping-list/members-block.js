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

  render({ users, shoppingList }) {
    //@@viewOn:private
    const [allUsers, setAllUsers] = useState(users)
    const [shopUsers, setShopUsers] = useState([])
    const [modal, setModal] = useState(false)

    useEffect(() => {
      const filteredUsers = allUsers.filter(user => (
       shoppingList.memberId.includes(user.id)
      ));
      setShopUsers(filteredUsers);
    }, [allUsers, shoppingList]);

    const owner = allUsers.find(user => (
      user.id === shoppingList.ownerId
    ));

    const addMember = (userId) => {
      const newUser = allUsers.find(user => user.id === userId)
      setShopUsers([...shopUsers, newUser])
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return(
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
            <MembersForm owner={owner} addMember={addMember} allUsers={allUsers} shopUsers={shopUsers}/> 
        </CreateModal>
        <MembersList owner={owner} shopUsers={shopUsers} setShopUsers={setShopUsers}/>
      </Uu5Elements.Block>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MembersBlock };
export default MembersBlock;
//@@viewOff:exports
