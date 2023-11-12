//@@viewOn:imports
import { createVisualComponent, Utils, Content, useRoute, useSession } from "uu5g05";
import Config from "./config/config.js";
import { PersonItem } from "uu_plus4u5g02-elements"
import CreateModal from "../shopping-list/create-modal.js";
import DeleteShop from "./delete-shop.js";
import Uu5Forms from "uu5g05-forms";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  shop: () => Config.Css.css({
    display: 'flex',
    padding: '15px',
    border: '2px solid teal',
    marginTop: '15px',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  shopBtns: () => Config.Css.css({
    display: 'flex',
  }),
  myBtn: () =>
    Config.Css.css({
      padding: '5px 15px',
      color: 'rgb(127, 142, 255)',
      fontSize: '14px',
      backgroundColor: 'transparent',
      border: '1px solid rgb(127, 142, 255)',
      cursor: 'pointer',
    }),
  deleteIcon: () =>
    Config.Css.css({
      cursor: 'pointer',
      width: '14px',
      height: '14px',
      marginTop: "4px"
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ShopListItem = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShopListItem",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({
    deleteModal,
    setDeleteModal,
    filterShoppingLists,
    deleteShoppingList,
    updateArchivedStatus }) {
    //@@viewOn:private
    const [, setRoute] = useRoute();
    const session = useSession()
    const currentUserId = session.identity.uuIdentity
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <div >
        {
          filterShoppingLists.map((shopL) =>
            <div className={Css.shop()}>
              <CreateModal
                visible={deleteModal.isOpen}
                setVisible={setDeleteModal.isOpen}>
                <DeleteShop
                  shop={deleteModal.shop}
                  setDeleteModal={() => setDeleteModal({ isOpen: false, shop: null })}
                  deleteShoppingList={deleteShoppingList} />
              </CreateModal>
              <div style={{ display: "flex" }}>
                <Uu5Forms.Checkbox.Input
                  value={shopL.archived}
                  icon={shopL.archived ? "uugds-check" : undefined}
                  style={{ marginRight: "5px" }}
                  onClick={() => updateArchivedStatus(shopL.id)} />
                <div>
                  <strong
                    style={shopL.archived === true ? { textDecoration: "line-through", color:"red" } : {}}>
                    {shopL.name}
                  </strong>
                  <div style={{ marginTop: "10px" }}>
                    <PersonItem uuIdentity={shopL.ownerId} subtitle="owner" size="m" />
                  </div>
                </div>
              </div>
              <div className={Css.shopBtns()}>
                <button
                  className={Css.myBtn()}
                  style={{ marginRight: "5px" }}
                  onClick={() => setRoute("shoppingList")}>
                  Open
                </button>
                {currentUserId === shopL.ownerId && (
                  <button onClick={() => setDeleteModal({ isOpen: true, shop: shopL })}>
                    <img className={Css.deleteIcon()} src="..//uu_shoppinglist_maing01-hi/mock/img/delete.png" />
                  </button>
                )}
              </div>
            </div>
          )
        }
        {
          filterShoppingLists.length === 0 &&
          <div style={{
            textAlign: 'center',
            fontSize: '20px',
            marginTop: '20px'
          }}>You don't have shopping lists</div>
        }
      </div>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShopListItem };
export default ShopListItem;
//@@viewOff:exports
