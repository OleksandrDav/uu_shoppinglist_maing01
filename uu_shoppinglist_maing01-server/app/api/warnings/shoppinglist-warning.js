const Errors = require("../errors/shopping-list-error.js");

const Warnings = {
   Create: {
      UnsupportedKeys: {
         code: `${Errors.Create.UC_CODE}unsupportedKeys`,
      },
   },
   List: {
      UnsupportedKeys: {
         code: `${Errors.List.UC_CODE}unsupportedKeys`,
      },
   },
   GetSL: {
      UnsupportedKeys: {
         code: `${Errors.GetSL.UC_CODE}unsupportedKeys`,
      },
   },
   Delete: {
      UnsupportedKeys: {
         code: `${Errors.Delete.UC_CODE}unsupportedKeys`,
      },
   },
   Update: {
      UnsupportedKeys: {
         code: `${Errors.Update.UC_CODE}unsupportedKeys`,
      },
   },
   AddUser: {
      UnsupportedKeys: {
         code: `${Errors.AddUser.UC_CODE}unsupportedKeys`,
      },
   },
   RemoveUser: {
      UnsupportedKeys: {
         code: `${Errors.RemoveUser.UC_CODE}unsupportedKeys`,
      },
   },
   AddProduct: {
      UnsupportedKeys: {
         code: `${Errors.AddProduct.UC_CODE}unsupportedKeys`,
      },
   },
   RemoveProduct: {
      UnsupportedKeys: {
         code: `${Errors.RemoveProduct.UC_CODE}unsupportedKeys`,
      },
   },
   CompletedProduct: {
      UnsupportedKeys: {
         code: `${Errors.CompletedProduct.UC_CODE}unsupportedKeys`,
      },
   },
}

module.exports = Warnings;