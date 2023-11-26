//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState, useMemo, PropTypes } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements, { Input } from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms";
import { Environment } from "uu_plus4u5g02";
import Calls from "calls"
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {

};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const MembersForm = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "MembersForm",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
  },
  //@@viewOff:defaultProps

  render({ shoppingList, setShoppingList, setModal }) {
    //@@viewOn:private
    async function addUser(userId) {
      try {
        await Calls.ShoppingList.memberAdd({
          id: shoppingList.id,
          userId: userId
        })
        const updatedShoppingList = { ...shoppingList };
        updatedShoppingList.memberId.push(userId)
        setShoppingList(updatedShoppingList)
        setModal(false)
      } catch (error) {
        console.error("Error fetching shopping list:", error);
      }
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const comp = {
      uu5Tag: "UuPlus4UPeople.Bricks.SearchWithResult",
      props: {
        baseUri: Environment.peopleBaseUri,
        onPersonSelected: ({ uuIdentity }) => addUser(uuIdentity)
      }
    }

    const uu5StringSearchPerson = new Utils.Uu5String(comp)

    return (
      <div >
        {uu5StringSearchPerson.toChildren()}
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MembersForm };
export default MembersForm;
//@@viewOff:exports
