//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState } from "uu5g05";
import Config from "./config/config.js";
import Uu5Forms from "uu5g05-forms";
import { Block, Button } from "uu5g05-elements";
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
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ create }) {
    //@@viewOn:private
    const [product, setProduct] = useState({ name: '' });

    const addNewProduct = (e) => {
      e.preventDefault()
      if (product.name.trim() !== '') {
        const newProduct = {
          id: Date.now(),
          ...product,
          completed: false
        }
        create(newProduct)
        setProduct({ name: '' })
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
          placeholder='Name of the product'
          value={product.name}
          onChange={(e) => { setProduct({ ...product, name: e.target.value }) }} />
        <Uu5Forms.SubmitButton
          disapled={!product.name.trim()}
          onClick={addNewProduct}>
          Add Product
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
