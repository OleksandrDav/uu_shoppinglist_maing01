//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import { useAlertBus } from "uu5g05-elements";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  text: () => Config.Css.css({
    fontSize: "20px"
  }),
  confirmationContainer: () => Config.Css.css({
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "20px", // Adjust as needed
  }),
  deleteButton: () => Config.Css.css({
    backgroundColor: "red",
    color: "white",
    margin: "0 10px",
    padding: "8px 16px",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  }),
  cancelButton: () => Config.Css.css({
    backgroundColor: "gray",
    color: "white",
    padding: "8px 16px",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const DeleteShop = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "DeleteShop",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ setModal, deleteShop, shoppingListDataList,nextPageIndexRef }) {
    //@@viewOn:private
    const { addAlert } = useAlertBus();

    function showError(error, header = "") {
      addAlert({
        header,
        message: error.message,
        priority: "error",
      });
    }

    async function handleDelete(shoppingListDataObject) {
      try {
        await shoppingListDataObject.handlerMap.delete()
        await shoppingListDataList.handlerMap.load(({pageInfo: { pageSize: nextPageIndexRef.current*3 }}));
        setModal(false)
      } catch (error) {
        showError(error, "Joke delete failed!");
        return;
      }
    }
    
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <div >
        <h1>Confirmation</h1>
        <div
          className={Css.text()}>
          Are you sure you want to delete this shopping list:{" "}
          <strong>{deleteShop && deleteShop.name}</strong>
        </div>
        <div className={Css.confirmationContainer()}>
          <button
            className={Css.deleteButton()}
            onClick={() => handleDelete(deleteShop)}>Delete</button>
          <button
            className={Css.cancelButton()}
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { DeleteShop };
export default DeleteShop;
//@@viewOff:exports
