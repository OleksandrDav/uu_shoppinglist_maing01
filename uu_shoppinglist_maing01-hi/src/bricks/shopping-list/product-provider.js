//@@viewOn:imports
import { createComponent, useMemo, useState, PropTypes } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const ProductProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ProductProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    shoppingList: PropTypes.object.isRequired,
    setShoppingList: PropTypes.func.isRequired,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    shoppingList: {},
    setShoppingList: () => { },
  },
  //@@viewOff:defaultProps

  render({ shoppingList, setShoppingList, children }) {

    //@@viewOn:private
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState('all');
    const [product, setProduct] = useState({ name: '' });

    const addNewProduct = (e) => {
      e.preventDefault()
      if (product.name.trim() !== '') {
        const newProduct = {
          id: Date.now(),
          ...product,
          completed: false
        }
        createProduct(newProduct)
        setProduct({ name: '' })
      }
    }

    const filteredProducts = useMemo(() => {
      return shoppingList.products.filter(product => {
        if (filter === 'all') {
          return true;
        } else if (filter === 'completed') {
          return product.completed;
        } else {
          return !product.completed;
        }
      });
    }, [filter, shoppingList.products])


    function handleUpdateShopName(value) {
      const updatedShoppingList = { ...shoppingList }
      updatedShoppingList.name = value
      setShoppingList(updatedShoppingList)
    }
    function createProduct(newProduct) {
      const updatedShoppingList = { ...shoppingList };
      const updatedProducts = [...shoppingList.products];
      updatedProducts.push(newProduct);
      updatedShoppingList.products = updatedProducts;
      setShoppingList(updatedShoppingList);

      setModal(false)
    }

    function handleDeleteProduct(id) {
      const updatedProducts = shoppingList.products.filter((product) => product.id !== id)
      setShoppingList({ ...shoppingList, products: updatedProducts })
    }
    function handleUpdateProductCompleted(id) {
      const updatedShoppingList = { ...shoppingList };
      const updatedProducts = updatedShoppingList.products.map((product) => {
        if (product.id === id) {
          return { ...product, completed: !product.completed };
        }
        return product;
      });

      updatedShoppingList.products = updatedProducts;
      setShoppingList(updatedShoppingList);
    }

    function handleUpdateProductName(id, value) {
      setShoppingList(prevShoppingList => {
        const updatedProducts = prevShoppingList.products.map(product => {
          if (product.id === id) {
            return { ...product, name: value };
          }
          return product;
        });
    
        return {
          ...prevShoppingList,
          products: updatedProducts 
        };
      });
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const value = {
      modal,
      setModal,
      createProduct,
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
    }
    return typeof children === "function" ? children(value) : children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ProductProvider };
export default ProductProvider;
//@@viewOff:exports
