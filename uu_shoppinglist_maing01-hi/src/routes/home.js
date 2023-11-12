//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi, useRoute, useState, } from "uu5g05";
import Uu5Elements, { Button } from "uu5g05-elements";
import Plus4U5Elements from "uu_plus4u5g02-elements";
import { withRoute } from "uu_plus4u5g02-app";


import Config from "./config/config.js";
import RouteBar from "../core/route-bar.js";
import importLsi from "../lsi/import-lsi.js";
import CreateModal from "../bricks/shopping-list/create-modal.js";
import ShopListItem from "../bricks/home-list/shop-list-item.js";
import CreateShopForm from "../bricks/home-list/create-shop-form.js";
import HomeListProvider from "../bricks/home-list/home-list-provider.js";
import Header from "../bricks/home-list/header.js";
import ShoppingListsFilter from "../bricks/home-list/shopping-lists-filter.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  icon: () =>
    Config.Css.css({
      fontSize: 48,
      lineHeight: "1em",
    }),

  app: () =>
    Config.Css.css({
      maxWidth: "800px",
      margin: "0 auto"
    }),

};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let Home = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Home",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:private

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <div className={Css.app()}>
        <HomeListProvider>
          {({ modal,
            setModal,
            filterShoppingLists,
            setShoppingLists,
            shop,
            setShop,
            addNewShop,
            deleteModal,
            setDeleteModal,
            deleteShoppingList,
            filter,
            setFilter,
            updateArchivedStatus }) => (
            <>
              <Header
                modal={modal}
                setModal={setModal}
                shop={shop}
                setShop={setShop}
                addNewShop={addNewShop} />
              <ShoppingListsFilter
                filter={filter}
                setFilter={setFilter}
              />
              <ShopListItem
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
                filterShoppingLists={filterShoppingLists}
                deleteShoppingList={deleteShoppingList}
                updateArchivedStatus={updateArchivedStatus} />
            </>
          )}
        </HomeListProvider>


      </div>
    );
    //@@viewOff:render
  },
});

Home = withRoute(Home, { authenticated: true });

//@@viewOn:exports
export { Home };
export default Home;
//@@viewOff:exports