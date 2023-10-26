//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  myModal: () => Config.Css.css({
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: 'none',
    background: 'rgba(0, 0, 0, 0.5)',
  }),

  myModalContent: () => Config.Css.css({
    padding: '25px',
    background: 'white',
    borderRadius: '16px',
    minWidth: '250px',
  }),

  active: () => Config.Css.css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  })
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const CreateModal = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "CreateModal",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render({ children, visible, setVisible }) {
    //@@viewOn:private
      const rootClasses = [Css.myModal()]
      if (visible) {
        rootClasses.push(Css.active());
      }
      //@@viewOff:private

      //@@viewOn:interface
      //@@viewOff:interface

      //@@viewOn:render

      return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
          <div className={Css.myModalContent()} onClick={(e) => { e.stopPropagation() }}>
            {children}
          </div>
        </div>
      );
      //@@viewOff:render
    },
  });

//@@viewOn:exports
export { CreateModal };
export default CreateModal;
//@@viewOff:exports
