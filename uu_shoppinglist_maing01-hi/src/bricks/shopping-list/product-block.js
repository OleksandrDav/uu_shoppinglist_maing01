//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState, PropTypes, useMemo, useSession, useRoute, useEffect } from "uu5g05";
import Uu5Elements, { Input } from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms";
import Config from "./config/config.js";
import CreateModal from "./create-modal.js";
import ProductForm from "./product-form.js";
import ProductList from "./product-list.js";
import Calls from "calls"
//@@viewOff:imports

//@@viewOn:constants
const user = {
  id: '345id678',
  name: 'Petr',
  surname: 'Bondar',
  login: 'o.test@gmail.com',
  password: '12345678'
}
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ProductBlock = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ProductBlock",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({}) {
    //@@viewOn:private
    const session = useSession()
    const currentUserId = session.identity.uuIdentity
    const [route] = useRoute()
    const [shoppingList, setShoppingList] = useState(null);
    const [modal, setModal] = useState(false)
    const [product, setProduct] = useState({ name: '' });

    useEffect(() => {
      if (route.params?.id) {

        const shoppingListId = route.params.id;

        Calls.ShoppingList.get({ id: shoppingListId })
          .then((result) => {
            setShoppingList(result);
          })
          .catch((error) => {
            console.error("Error fetching shopping list:", error);
          });
      }
      
    }, [route.params?.id, shoppingList]);
   
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <Uu5Elements.Block
        card="full"
        headerSeparator
        header={currentUserId === shoppingList?.ownerId
          ? <Uu5Forms.Text.Input
            value={shoppingList?.name}
            significance='subdued'
            onChange={(e) => handleUpdateShopName(e.target.value)}
          />
          : shoppingList?.name}
        headerType="heading"
        level={5}
        actionList={[
          {
            icon: "uugds-plus",
            children: "Create",
            primary: true,
            onClick: () => setModal(true)
          }
        ]}
      >
        
        <CreateModal
          visible={modal}
          setVisible={setModal}>
          <ProductForm
            product={product}
            setProduct={setProduct}
            shoppingListId={shoppingList?.id}
            shoppingList={shoppingList}
            setShoppingList={setShoppingList}
            setModal={setModal} />
        </CreateModal>
        <ProductList
          shoppingList={shoppingList}
          setShoppingList={setShoppingList} />
      </Uu5Elements.Block>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ProductBlock };
export default ProductBlock;
//@@viewOff:exports
