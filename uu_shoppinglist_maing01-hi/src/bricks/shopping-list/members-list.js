//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState, useEffect } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
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

  render({ owner, shopUsers, handleDeleteUser}) {
    //@@viewOn:private
    
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <Uu5Elements.Grid rowGap={8}>
        <Uu5Elements.ListItem
          key={owner.id}>
          <Uu5Elements.Grid flow='column' alignItems='center'>
            <p>{owner.name} {owner.surname} - I'm the owner</p>
          </Uu5Elements.Grid>
        </Uu5Elements.ListItem>
        {shopUsers.map((user) => {
          return (
            <Uu5Elements.ListItem
              key={user.id}
              actionList={[{
                icon: 'uugds-delete',
                children: 'Delete',
                onClick: () => handleDeleteUser(user.id)
              }]}>
              <Uu5Elements.Grid flow='column' alignItems='center'>
                <p>{user.name} {user.surname}</p>
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
