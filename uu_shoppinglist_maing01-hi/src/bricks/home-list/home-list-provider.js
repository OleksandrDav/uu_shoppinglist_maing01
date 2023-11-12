//@@viewOn:imports
import { createComponent, useMemo, useSession, useState } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
const initShoppingLists = [
  {
    id: '5fb2458d4b9e561',
    name: 'Shoppping List Name',
    ownerId: '7389-360-836-0000',
    memberId: ['5626-3282-9969-0000', '1132-8212-4841-0000'],
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
  },
  {
    id: '5fb2458d4b9e562',
    name: 'Shoppping List Name 2',
    ownerId: '7389-360-836-0000',
    memberId: ['5626-3282-9969-0000', '1132-8212-4841-0000'],
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
  },
  {
    id: '5fb2458d4b9e563',
    name: 'Shoppping List Name 3',
    ownerId: '5626-3282-9969-0000',
    memberId: ['1132-8212-4841-0000', '7389-360-836-0000'],
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
    archived: true
  }
]
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const HomeListProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "HomeListProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ children }) {
    //@@viewOn:private
    const [shoppingLists, setShoppingLists] = useState(initShoppingLists)
    const [modal, setModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState({ isOpen: false, shop: null })
    const [shop, setShop] = useState({ name: '' });
    const [filter, setFilter] = useState("all");

    const filterShoppingLists = useMemo(() => {
      return shoppingLists.filter(list => {
        if (filter === 'all') {
          return true;
        } else if (filter === 'completed') {
          return !list.archived;
        } else {
          return list.archived;
        }
      });
    }, [filter, shoppingLists]);

    const addNewShop = (e) => {
      e.preventDefault()
      if (shop.name.trim() !== '') {
        const newShop = {
          id: Date.now(),
          ...shop,
          ownerId: currentUserId,
          memberId: [],
          products: [],
          archived: false
        }
        createNewShop(newShop);
        setShop({ name: '' })
      }
    }
    const updateArchivedStatus = (listId) => {
      setShoppingLists((prevLists) => {
        return prevLists.map((list) => {
          if (list.id === listId) {
            return { ...list, archived: !list.archived };
          }
          return list;
        });
      });
    };
    

    const deleteShoppingList = (listId) => {
      setShoppingLists(shoppingLists.filter((list) => list.id !== listId))
      setDeleteModal({ isOpen: false, shop: null })
    }

    const createNewShop = (newShop) => {
      setShoppingLists([...shoppingLists, newShop])
      setModal(false)
    }

    const session = useSession()
    const currentUserId = session.identity.uuIdentity
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const value = {
      modal,
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
      updateArchivedStatus
    }
    return typeof children === "function" ? children(value) : children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { HomeListProvider };
export default HomeListProvider;
//@@viewOff:exports
