//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState } from "uu5g05";
import CreateModal from "../shopping-list/create-modal.js";
import Config from "./config/config.js";
import CreateShopForm from "./create-shop-form.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  btnCreate: () =>
    Config.Css.css({
      padding: '5px 15px',
      color: 'teal',
      fontSize: '18px',
      fontWeight: "bold",
      backgroundColor: 'rgba(0, 128, 128, 0.1)',
      border: '2px solid teal',
      cursor: 'pointer',
    }),
  header: () =>
    Config.Css.css({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: "10px"
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Header = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Header",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(
    { shoppingListDataList }
  ) {
    //@@viewOn:private
    const [modal, setModal] = useState(false)
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <div className={Css.header()}>
        <h1>Shopping Lists</h1>
        <button
          className={Css.btnCreate()}
          onClick={() => setModal(true)}>
          Create
        </button>
        <CreateModal
          visible={modal}
          setVisible={setModal}>
          <CreateShopForm
            shoppingListDataList={shoppingListDataList}
            setModal={setModal} />
        </CreateModal>
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Header };
export default Header;
//@@viewOff:exports
