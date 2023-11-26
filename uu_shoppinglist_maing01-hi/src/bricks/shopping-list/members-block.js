//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState, useEffect, PropTypes, useSession, useRoute } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import CreateModal from "./create-modal.js";
import MembersList from "./members-list.js";
import MembersForm from "./members-form.js";
import Calls from "calls"
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
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({memberDataList}) {
    //@@viewOn:private
    const session = useSession()
    const currentUserId = session.identity.uuIdentity
    const [modal, setModal] = useState(false);
    const [route] = useRoute()
    const [shoppingList, setShoppingList] = useState(null);

    useEffect(() => {
      if (route.params?.id) {

        const shoppingListId = route.params.id;

        Calls.ShoppingList.get({ id: shoppingListId })
          .then((result) => {
            setShoppingList(result);
          })
          .catch((error) => {
            console.error("Error fetching shopping list:", error);
          });
      }
      
    }, [route.params?.id, shoppingList]);
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
          currentUserId &&
          shoppingList?.memberId.includes(currentUserId) && {
            icon: 'uugds-delete',
            children: 'Leave',
            onClick: () => handleLeaveMemberUser(currentUserId)
          }
        ].filter(Boolean)}
      >
        <CreateModal
          visible={modal}
          setVisible={setModal}>
          <MembersForm shoppingList={shoppingList} setShoppingList={setShoppingList} setModal={setModal}/>
        </CreateModal>
        <MembersList shoppingList={shoppingList} setShoppingList={setShoppingList}/>
      </Uu5Elements.Block>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MembersBlock };
export default MembersBlock;
//@@viewOff:exports
