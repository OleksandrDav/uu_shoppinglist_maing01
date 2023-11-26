//@@viewOn:imports
import { createVisualComponent, Utils, Content, useSession, useState } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements, { Input, useAlertBus } from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms";
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

const CreateShopForm = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "CreateShopForm",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ shoppingListDataList, setModal }) {
    //@@viewOn:private
    const [shop, setShop] = useState({ name: "" })
    const { addAlert } = useAlertBus();
    
    async function handleSubmit(shopName) {
      try {
        await shoppingListDataList.handlerMap.create(shopName);
      } catch (error) {
        addAlert({
          header: "Joke creation failed!",
          message: error.message,
          priority: "error",
        });
        return;
      }
      setModal(false)
      setShop({ name: "" })
      shoppingListDataList.handlerMap.load();
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <form>
        <Uu5Forms.Text.Input
          type='text'
          placeholder='Name of the shopping list'
          value={shop.name}
          style={{ marginRight: "10px" }}
          onChange={(e) => { setShop({ ...shop, name: e.target.value }) }} />
        <Uu5Forms.SubmitButton
          disapled={!shop.name.trim()}
          onClick={() => handleSubmit(shop)}>
          Add Shop
        </Uu5Forms.SubmitButton>
      </form>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { CreateShopForm };
export default CreateShopForm;
//@@viewOff:exports
