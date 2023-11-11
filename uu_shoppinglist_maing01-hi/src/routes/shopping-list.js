//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Plus4U5Elements from "uu_plus4u5g02-elements";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import importLsi from "../lsi/import-lsi.js";
import DetailProvider from "../bricks/shopping-list/detail-provider.js";
import MembersBlock from "../bricks/shopping-list/members-block";
import ProductBlock from "../bricks/shopping-list/product-block.js";
import ProductProvider from "../bricks/shopping-list/product-provider.js";
import MemberProvider from "../bricks/shopping-list/member-provider.js";
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
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let ShoppingList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Home",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
        <DetailProvider>
          {({ shoppingList, setShoppingList }) => (
            <>
              <MemberProvider shoppingList={shoppingList} setShoppingList={setShoppingList}>
                {({
                  modal,
                  setModal,
                  shoppingList,
                  setShoppingList,
                  addMember,
                  handleDeleteUser,
                  handleLeaveMemberUser
                }) => (
                  <>
                    <MembersBlock
                      modal={modal}
                      setModal={setModal}
                      shoppingList={shoppingList}
                      setShoppingList={setShoppingList}
                      addMember={addMember}
                      handleDeleteUser={handleDeleteUser}
                      handleLeaveMemberUser={handleLeaveMemberUser}
                    />
                  </>
                )
                }
              </MemberProvider>
              <ProductProvider shoppingList={shoppingList} setShoppingList={setShoppingList}>
                {({
                  modal,
                  setModal,
                  filter,
                  setFilter,
                  shoppingList,
                  filteredProducts,
                  setShoppingList,
                  handleUpdateShopName,
                  addNewProduct,
                  product,
                  setProduct,
                  handleDeleteProduct,
                  handleUpdateProductCompleted,
                  handleUpdateProductName
                }) => (
                  <>
                    <ProductBlock
                      modal={modal}
                      setModal={setModal}
                      filter={filter}
                      setFilter={setFilter}
                      shoppingList={shoppingList}
                      filteredProducts={filteredProducts}
                      setShoppingList={setShoppingList}
                      handleUpdateShopName={handleUpdateShopName}
                      addNewProduct={addNewProduct}
                      product={product}
                      setProduct={setProduct}
                      handleDeleteProduct={handleDeleteProduct}
                      handleUpdateProductCompleted={handleUpdateProductCompleted}
                      handleUpdateProductName={handleUpdateProductName}
                    />
                  </>
                )}

              </ProductProvider>
            </>
          )}
        </DetailProvider>
      </div>
    );
    //@@viewOff:render
  },
});

ShoppingList = withRoute(ShoppingList, { authenticated: true });

//@@viewOn:exports
export { ShoppingList };
export default ShoppingList;
//@@viewOff:exports