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
   ArchiveUpdate: {
      UnsupportedKeys: {
         code: `${Errors.ArchiveUpdate.UC_CODE}unsupportedKeys`,
      },
   },
   NameUpdate: {
      UnsupportedKeys: {
         code: `${Errors.NameUpdate.UC_CODE}unsupportedKeys`,
      },
   },
   AddUser: {
      UnsupportedKeys: {
         code: `${Errors.NameUpdate.UC_CODE}unsupportedKeys`,
      },
   },
   RemoveUser: {
      UnsupportedKeys: {
         code: `${Errors.NameUpdate.UC_CODE}unsupportedKeys`,
      },
   },
   AddProduct: {
      UnsupportedKeys: {
         code: `${Errors.NameUpdate.UC_CODE}unsupportedKeys`,
      },
   },
   RemoveProduct: {
      UnsupportedKeys: {
         code: `${Errors.NameUpdate.UC_CODE}unsupportedKeys`,
      },
   },
}

module.exports = Warnings;