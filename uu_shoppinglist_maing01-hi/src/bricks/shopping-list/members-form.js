//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState, useMemo } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements, { Input } from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  userBlock: () => Config.Css.css({
    display: 'flex',
    padding: '15px',
    border: '2px solid teal',
    marginTop: '15px',
    justifyContent: 'space-between',
    alignItems: 'center'
  }),
  userBtns: () => Config.Css.css({
    display: 'flex',
  }),
  myBtn: () => Config.Css.css({
    padding: "5px 15px",
    color: "teal",
    fontSize: "14px",
    backgroundColor: "transparent",
    border: "1px solid teal",
    cursor: "pointer"
  })
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const MembersForm = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "MembersForm",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({addMember, query, setQuery, searchedMembers }) {
    //@@viewOn:private
    

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <div >
        <h1>Find new Member</h1>
        <input 
        placeholder='Search...'
        value={query}
        onChange={e => setQuery(e.target.value)}/>
        {searchedMembers.map(user => (
          <div key={user.id} className={Css.userBlock()}>
            <div>
              {user.name} {user.surname} 
            </div>
            <div className={Css.userBtns()}>
              <button 
              className={Css.myBtn()}
              onClick={() => {addMember(user.id)}}>Add user</button>
            </div>
          </div>
        ))}
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MembersForm };
export default MembersForm;
//@@viewOff:exports
