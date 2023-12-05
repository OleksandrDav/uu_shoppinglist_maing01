//@@viewOn:imports
import { createVisualComponent, Utils, Content, PropTypes, useState, useMemo, Lsi } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms";
import Calls from "../../calls.js";
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
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ shoppingList, setShoppingList }) {
    //@@viewOn:private
    const [filter, setFilter] = useState('all');
    const filteredProducts = useMemo(() => {
      return shoppingList?.products.filter(product => {
        if (filter === 'all') {
          return true;
        } else if (filter === 'completed') {
          return product.completed;
        } else {
          return !product.completed;
        }
      });
    }, [filter, shoppingList?.products])

    async function handleDeleteProduct(productId) {
      try {
        await Calls.ShoppingList.productDelete({
          id: shoppingList.id,
          productId: productId
        })
        const updatedProducts = shoppingList.products.filter((product) => product.id !== productId)
        setShoppingList({ ...shoppingList, products: updatedProducts })
      } catch (error) {
        console.error("Error fetching shopping list:", error);
      }
    }

    async function handleUpdateProductCompleted(productId, productCompleted) {
      try {
        await Calls.ShoppingList.productUpdate({
          id: shoppingList.id,
          productId: productId,
          completed: !productCompleted
        })
        const updatedShoppingList = { ...shoppingList };
        const updatedProducts = updatedShoppingList.products.map((product) => {
          if (product.id === productId) {
            return { ...product, completed: !productCompleted };
          }
          return product;
        });

        updatedShoppingList.products = updatedProducts;
        setShoppingList(updatedShoppingList);
      } catch (error) {
        console.error("Error fetching shopping list:", error);
      }
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <>
        <div>
          <label><Lsi lsi={{ cs: "Filtrovat podle dokončeno", en: "Filter by completed" }} /></label>
          <select
            style={{ marginBottom: "15px" }}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="notCompleted">Not Completed</option>
          </select>
        </div>
        <Uu5Elements.Grid rowGap={8}>
          {filteredProducts?.map((product) => {
            return (
              <Uu5Elements.ListItem
                key={product.id}
                actionList={[{
                  icon: 'uugds-delete',
                  children: <Lsi lsi={{ cs: "Smazat", en: "Delete" }} />,
                  onClick: () => handleDeleteProduct(product.id)
                }]}>
                <Uu5Elements.Grid flow='column' alignItems='center'>
                  <Uu5Forms.Checkbox.Input
                    value={product.completed}
                    icon={product.completed ? "uugds-check" : undefined}
                    onClick={() => handleUpdateProductCompleted(product.id, product.completed)} />
                  <p 
                  onChange={(e) => handleUpdateProductName(product.id, e.target.value)}>
                    {product.name}</p>
                </Uu5Elements.Grid>
              </Uu5Elements.ListItem>
            )
          })}
        </Uu5Elements.Grid>
      </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ProductList };
export default ProductList;
//@@viewOff:exports
