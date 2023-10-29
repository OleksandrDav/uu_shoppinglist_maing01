//@@viewOn:imports
import { createVisualComponent, Utils, Content, PropTypes } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms";
import Config from "./config/config.js";
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

const ProductList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ProductList",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    filteredProducts: PropTypes.array.isRequired,
    handleDeleteProduct: PropTypes.func.isRequired,
    handleUpdateProductCompleted: PropTypes.func.isRequired,
    handleUpdateProductName: PropTypes.func.isRequired
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    filteredProducts: [],
    handleDeleteProduct: () => { },
    handleUpdateProductCompleted: () => { },
    handleUpdateProductName: () => { }
  },
  //@@viewOff:defaultProps

  render({
    filteredProducts,
    handleDeleteProduct,
    handleUpdateProductCompleted,
    handleUpdateProductName
  }) {
    //@@viewOn:private

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <Uu5Elements.Grid rowGap={8}>
        {filteredProducts.map((product) => {
          return (
            <Uu5Elements.ListItem
              key={product.id}
              actionList={[{
                icon: 'uugds-delete',
                children: 'Delete',
                onClick: () => handleDeleteProduct(product.id)
              }]}>
              <Uu5Elements.Grid flow='column' alignItems='center'>
                <Uu5Forms.Checkbox.Input
                  value={product.completed}
                  icon={product.completed ? "uugds-check" : undefined}
                  onClick={() => handleUpdateProductCompleted(product.id)} />
                <Uu5Forms.Text.Input
                  value={product.name}
                  significance='subdued'
                  onChange={(e) => handleUpdateProductName(product.id, e.target.value)}
                />
              </Uu5Elements.Grid>
            </Uu5Elements.ListItem>
          )
        })}
      </Uu5Elements.Grid>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ProductList };
export default ProductList;
//@@viewOff:exports
