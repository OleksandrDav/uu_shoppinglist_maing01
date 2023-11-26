//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState, useEffect, useSession, PropTypes } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import { PersonItem } from "uu_plus4u5g02-elements"
import Calls from "calls"
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

const MembersList = createVisualComponent({
  //@@viewOn:statics
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ shoppingList, setShoppingList }) {
    //@@viewOn:private
    const session = useSession()
    const currentUserId = session.identity.uuIdentity

    async function handleDeleteUser(userId) {
      try {
        await Calls.ShoppingList.memberDelete({
          id: shoppingList.id,
          userId: userId
        })
        const updatedShoppingList = { ...shoppingList }
        updatedShoppingList.memberId = updatedShoppingList.memberId.filter(user => user !== userId)
        setShoppingList(updatedShoppingList)
      } catch (error) {
        console.error("Error fetching shopping list:", error);
      }
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <Uu5Elements.Grid rowGap={8}>
        <Uu5Elements.ListItem
          key={shoppingList?.owner}>
          <Uu5Elements.Grid flow='column' alignItems='center'>
            <PersonItem uuIdentity={shoppingList?.ownerId} subtitle="Owner" size="l" />
          </Uu5Elements.Grid>
        </Uu5Elements.ListItem>
        {shoppingList?.memberId.map((user) => {
          return (
            <Uu5Elements.ListItem
              key={user}
              actionList={[
                shoppingList?.ownerId === currentUserId
                  ? {
                    icon: 'uugds-delete',
                    children: 'Delete',
                    onClick: () => handleDeleteUser(user)
                  } : {}
              ]}>
              <Uu5Elements.Grid flow='column' alignItems='center'>
                <PersonItem uuIdentity={user} subtitle="member" size="m" />
              </Uu5Elements.Grid>
            </Uu5Elements.ListItem>
          )
        })}
      </Uu5Elements.Grid>
    );

    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MembersList };
export default MembersList;
//@@viewOff:exports
