//@@viewOn:imports
import { createVisualComponent, Utils, Content, useRoute, useSession, useRef, useState, useMemo, Lsi } from "uu5g05";
import Config from "./config/config.js";
import { PersonItem } from "uu_plus4u5g02-elements"
import CreateModal from "../shopping-list/create-modal.js";
import DeleteShop from "./delete-shop.js";
import Uu5Forms from "uu5g05-forms";
import { Button, Pending, useAlertBus } from "uu5g05-elements";
import PieChartList from "./pie-chart-list.js";
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
  loadBtn: () => Config.Css.css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "15px 0px",
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
    shoppingListDataList, filterShoppingList }) {
    //@@viewOn:private
    const [, setRoute] = useRoute();
    const [modal, setModal] = useState(false);
    const [deleteShop, setDeleteShop] = useState(null);
    const session = useSession()
    const currentUserId = session.identity.uuIdentity
    const { addAlert } = useAlertBus();
    const nextPageIndexRef = useRef(1);
    const [filter, setFilter] = useState("all")

    function modalDelete(shop) {
      setModal(true)
      setDeleteShop(shop)
    }

    function showError(error, header = "") {
      addAlert({
        header,
        message: error.message,
        priority: "error",
      });
    }

    async function handleLoadNext() {
      try {
        await shoppingListDataList.handlerMap.loadNext({ pageInfo: { pageIndex: nextPageIndexRef.current } });
        nextPageIndexRef.current++;
      } catch (error) {
        showError(error, "Page loading failed!");
      }
    }

    async function handleToggleArchived(shoppingListDataObject) {
      const { id, data } = shoppingListDataObject;
      try {
        await shoppingListDataObject.handlerMap.update({ id, archived: !data.archived });
        await shoppingListDataList.handlerMap.load({ pageInfo: { pageSize: nextPageIndexRef.current * 3 } });
      } catch (error) {
        showError(error, "Toggle archived status failed!");
      }
    }

    const shoppingListList = shoppingListDataList?.data?.filter((item) => item !== undefined) || [];

    const filteredShoppingList = useMemo(() => filterShoppingList(shoppingListList, filter), [filter, shoppingListList]);
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <div >
        <div style={{ marginLeft: "12px" }}>
          <label><Lsi lsi={{cs: "Filtrovat podle archivovaných", en: "Filter by archived"}}/></label>
          <select
            style={{ marginLeft: "10px" }}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="archived">Archived</option>
            <option value="nonArchived">Non archived</option>
          </select>
        </div>
        {
          filteredShoppingList.map((shopL) =>
            <div className={Css.shop()}>
              <CreateModal
                visible={modal}
                setVisible={setModal}>
                <DeleteShop
                  setModal={setModal}
                  deleteShop={deleteShop}
                  shoppingListDataList={shoppingListDataList}
                  nextPageIndexRef={nextPageIndexRef}
                />
              </CreateModal>
              <div style={{ display: "flex" }}>
                <Uu5Forms.Checkbox.Input
                  value={shopL.data.archived}
                  icon={shopL.data.archived ? "uugds-check" : undefined}
                  style={{ marginRight: "5px" }}
                  onClick={() => handleToggleArchived(shopL)} />
                <div>
                  <strong
                    style={shopL.data.archived === true ? { textDecoration: "line-through", color: "red" } : {}}>
                    {shopL.data.name}
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
                  onClick={() => setRoute(`shoppingList/detail`, { id: shopL.data.id })}>
                  <Lsi lsi={{cs: "Otevřít", en: "Open"}}/>
                </button>
                {currentUserId === shopL.data.ownerId && (
                  <button onClick={() => modalDelete(shopL)}>
                    <img className={Css.deleteIcon()} src="./mock/img/delete.png" />
                  </button>
                )}
              </div>
            </div>
          )
        }
        <PieChartList shoppingLists = {filteredShoppingList}/>
        <div className={Css.loadBtn()}>
          {shoppingListDataList?.state !== "pending" && (
            <Button colorScheme="primary" onClick={handleLoadNext}>
              <Lsi lsi={{cs: "Načíst další 3 nákupní seznamy", en: "Load next 3 shopping lists"}}/>
            </Button>
          )}
          {shoppingListDataList?.state === "pending" && <Pending />}
        </div>
      </div>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShopListItem };
export default ShopListItem;
//@@viewOff:exports
