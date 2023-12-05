//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState, PropTypes, Lsi } from "uu5g05";
import Config from "./config/config.js";
import Uu5Forms from "uu5g05-forms";
import { Block, Button } from "uu5g05-elements";
import Calls from "calls"
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

const ProductForm = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ProductForm",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    addNewProduct: PropTypes.func.isRequired,
    product: PropTypes.shape({
    }).isRequired,
    setProduct: PropTypes.func.isRequired
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    addNewProduct: () => { },
    product: {},
    setProduct: () => { }
  },
  //@@viewOff:defaultProps

  render({ product, setProduct, shoppingListId, shoppingList, setShoppingList, setModal }) {
    //@@viewOn:private
    async function handleSubmit() {
      try {
        await Calls.ShoppingList.productAdd({ id: shoppingListId, product: product.name });
        const updatedShoppingList = { ...shoppingList };
        const updatedProducts = [...shoppingList.products];
        updatedProducts.push({id: Date.now(), ...product, completed:false})
        updatedShoppingList.products = updatedProducts;
        setShoppingList(updatedShoppingList);
        setProduct({ name: '' });
        setModal(false)
      } catch (error) {
        console.error("Error fetching shopping list:", error);
      }
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <form>
        <Uu5Forms.Text.Input
          type='text'
          placeholder={{ cs: "Název produktu", en: "Name of the product" }}
          value={product.name}
          onChange={(e) => { setProduct({ ...product, name: e.target.value }) }} />
        <Uu5Forms.SubmitButton
          disapled={!product.name.trim()}
          onClick={handleSubmit}>
          <Lsi lsi={{ cs: "Přidat produkt", en: "Add Product" }} />
        </Uu5Forms.SubmitButton>
      </form>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ProductForm };
export default ProductForm;
//@@viewOff:exports
