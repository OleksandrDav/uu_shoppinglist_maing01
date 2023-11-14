"use strict";

const ShoppinglistMainUseCaseError = require("./shoppinglist-main-use-case-error.js");
const SHOPPING_LIST_ERROR_PREFIX = `${ShoppinglistMainUseCaseError.ERROR_PREFIX}shoppingList/`;

const Create = {
  UC_CODE: `${SHOPPING_LIST_ERROR_PREFIX}create/`,
  
  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const List = {
  UC_CODE: `${SHOPPING_LIST_ERROR_PREFIX}list/`,

  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const GetSL = {
  UC_CODE: `${SHOPPING_LIST_ERROR_PREFIX}getSL/`,
  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetSL.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  ShoppinglistMainDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetSL.UC_CODE}shoppinglistMainDoesNotExist`;
      this.message = "UuObject shoppinglistMain does not exist.";
    }
  },
  ShoppinglistMainNotInCorrectState: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetSL.UC_CODE}shoppinglistMainNotInCorrectState`;
      this.message = "UuObject shoppinglistMain is not in correct state.";
    }
  },
  ShoppinglistDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetSL.UC_CODE}shoppinglistDoesNotExist`;
      this.message = "shoppinglist does not exist.";
    }
  },
};

const Delete = {
  UC_CODE: `${SHOPPING_LIST_ERROR_PREFIX}delete/`,
  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  ShoppinglistMainDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}shoppingListMainDoesNotExist`;
      this.message = "UuObject shoppingListMain does not exist.";
    }
  },
  ShoppinglistMainNotInCorrectState: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}shoppingListMainNotInCorrectState`;
      this.message = "UuObject shoppingListMain is not in correct state.";
    }
  },
  ShoppinglistDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}shoppingListDoesNotExist`;
      this.message = "Shopping List does not exist.";
    }
  },
};

const Update = {
  UC_CODE: `${SHOPPING_LIST_ERROR_PREFIX}nameUpdate/`,
  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${NameUpdate.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  ShoppinglistMainDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${NameUpdate.UC_CODE}shoppingListMainDoesNotExist`;
      this.message = "UuObject shoppingListMain does not exist.";
    }
  },
  ShoppinglistMainNotInCorrectState: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${NameUpdate.UC_CODE}shoppingListMainNotInCorrectState`;
      this.message = "UuObject shoppingListMain is not in correct state.";
    }
  },
  ShoppinglistDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${NameUpdate.UC_CODE}shoppingListDoesNotExist`;
      this.message = "Shopping List does not exist.";
    }
  },
};

const AddUser = {
  UC_CODE: `${SHOPPING_LIST_ERROR_PREFIX}addUser/`,
  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddUser.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  ShoppinglistMainDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddUser.UC_CODE}shoppingListMainDoesNotExist`;
      this.message = "UuObject shoppingListMain does not exist.";
    }
  },
  ShoppinglistMainNotInCorrectState: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddUser.UC_CODE}shoppingListMainNotInCorrectState`;
      this.message = "UuObject shoppingListMain is not in correct state.";
    }
  },
  ShoppinglistDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddUser.UC_CODE}shoppingListDoesNotExist`;
      this.message = "Shopping List does not exist.";
    }
  },
};

const RemoveUser = {
  UC_CODE: `${SHOPPING_LIST_ERROR_PREFIX}removeUser/`,
  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${RemoveUser.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  ShoppinglistMainDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${RemoveUser.UC_CODE}shoppingListMainDoesNotExist`;
      this.message = "UuObject shoppingListMain does not exist.";
    }
  },
  ShoppinglistMainNotInCorrectState: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${RemoveUser.UC_CODE}shoppingListMainNotInCorrectState`;
      this.message = "UuObject shoppingListMain is not in correct state.";
    }
  },
  ShoppinglistDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${RemoveUser.UC_CODE}shoppingListDoesNotExist`;
      this.message = "Shopping List does not exist.";
    }
  },
};

const AddProduct = {
  UC_CODE: `${SHOPPING_LIST_ERROR_PREFIX}addProduct/`,
  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddProduct.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  ShoppinglistMainDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddProduct.UC_CODE}shoppingListMainDoesNotExist`;
      this.message = "UuObject shoppingListMain does not exist.";
    }
  },
  ShoppinglistMainNotInCorrectState: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddProduct.UC_CODE}shoppingListMainNotInCorrectState`;
      this.message = "UuObject shoppingListMain is not in correct state.";
    }
  },
  ShoppinglistDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${AddProduct.UC_CODE}shoppingListDoesNotExist`;
      this.message = "Shopping List does not exist.";
    }
  },
};

const RemoveProduct = {
  UC_CODE: `${SHOPPING_LIST_ERROR_PREFIX}removeProduct/`,
  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${RemoveProduct.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  ProductNotFound: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${RemoveProduct.UC_CODE}productNotFound`;
      this.message = "Product not found.";
    }
  },
  ShoppinglistMainDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${RemoveProduct.UC_CODE}shoppingListMainDoesNotExist`;
      this.message = "UuObject shoppingListMain does not exist.";
    }
  },
  ShoppinglistMainNotInCorrectState: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${RemoveProduct.UC_CODE}shoppingListMainNotInCorrectState`;
      this.message = "UuObject shoppingListMain is not in correct state.";
    }
  },
  ShoppinglistDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${RemoveProduct.UC_CODE}shoppingListDoesNotExist`;
      this.message = "Shopping List does not exist.";
    }
  },
};

const CompletedProduct = {
  UC_CODE: `${SHOPPING_LIST_ERROR_PREFIX}completedProduct/`,
  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${CompletedProduct.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  ProductNotFound: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${CompletedProduct.UC_CODE}productNotFound`;
      this.message = "Product not found.";
    }
  },
  ShoppinglistMainDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${CompletedProduct.UC_CODE}shoppingListMainDoesNotExist`;
      this.message = "UuObject shoppingListMain does not exist.";
    }
  },
  ShoppinglistMainNotInCorrectState: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${CompletedProduct.UC_CODE}shoppingListMainNotInCorrectState`;
      this.message = "UuObject shoppingListMain is not in correct state.";
    }
  },
  ShoppinglistDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${CompletedProduct.UC_CODE}shoppingListDoesNotExist`;
      this.message = "Shopping List does not exist.";
    }
  },
};

module.exports = {
  CompletedProduct,
  RemoveProduct,
  AddProduct,
  RemoveUser,
  AddUser,
  Update,
  Delete,
  GetSL,
  List,
  Create
};
