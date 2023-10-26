//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Plus4U5Elements from "uu_plus4u5g02-elements";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import WelcomeRow from "../bricks/welcome-row.js";
import RouteBar from "../core/route-bar.js";
import importLsi from "../lsi/import-lsi.js";
import Detail from "../bricks/shopping-list/detail.js";
//@@viewOff:imports

//@@viewOn:constants
const shoppingList = {
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

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
        <Detail users={users} data={shoppingList} />
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