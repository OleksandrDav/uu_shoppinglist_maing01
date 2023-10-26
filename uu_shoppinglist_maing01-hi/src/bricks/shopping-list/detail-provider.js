//@@viewOn:imports
import { createComponent, useState } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
const initialShoppingList = {
  id: '5fb2458d4b9e56',
  name: 'Shoppping List Name',
  ownerId: '345id678',
  memberId: ['345id679', '345id680'],
  products: [
    {
      id: 'un123',
      name: 'Tomato',
      completed: true
    },
    {
      id: 'un124',
      name: 'Milk',
      completed: false
    },
    {
      id: 'un125',
      name: 'Carrot',
      completed: false
    }
  ],
  archived: false
}

const users = [
  {
    id: '345id678',
    name: 'Petr',
    surname: 'Levytskyi',
    login: 'o.test@gmail.com',
    password: '12345678'
  },
  {
    id: '345id679',
    name: 'Valik',
    surname: 'Reznik',
    login: 'o.test@gmail.com',
    password: '12345678'
  },
  {
    id: '345id680',
    name: 'Palik',
    surname: 'Bondar',
    login: 'o.test@gmail.com',
    password: '12345678'
  },
  {
    id: '345id681',
    name: 'Jalik',
    surname: 'Loper',
    login: 'o.test@gmail.com',
    password: '12345678'
  },
  {
    id: '345id682',
    name: 'Nalik',
    surname: 'Koper',
    login: 'o.test@gmail.com',
    password: '12345678'
  },
  {
    id: '345id683',
    name: 'Balik',
    surname: 'Black',
    login: 'o.test@gmail.com',
    password: '12345678'
  }
]
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const DetailProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "DetailProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({children}) {
    //@@viewOn:private
    const [shoppingList, setShoppingList] = useState(initialShoppingList)
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const value = {shoppingList, setShoppingList, users}
    return typeof children === "function" ? children(value) : children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { DetailProvider };
export default DetailProvider;
//@@viewOff:exports
