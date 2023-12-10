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

const ListByIdentity = {
  UC_CODE: `${SHOPPING_LIST_ERROR_PREFIX}listByIdentity/`,

  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListByIdentity.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  UserNotAuthorized: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ListByIdentity.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
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
  ShoppinglistDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}shoppingListDoesNotExist`;
      this.message = "Shopping List does not exist.";
    }
  },
};

const Update = {
  UC_CODE: `${SHOPPING_LIST_ERROR_PREFIX}update/`,
  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  ShoppinglistDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}shoppingListDoesNotExist`;
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
  ShoppinglistDoesNotExist: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${CompletedProduct.UC_CODE}shoppingListDoesNotExist`;
      this.message = "Shopping List does not exist.";
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
  UserNotAuthorized: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}userNotAuthorized`;
      this.message = "User not authorized.";
    }
  },
};

module.exports = {
  List,
  CompletedProduct,
  RemoveProduct,
  AddProduct,
  RemoveUser,
  AddUser,
  Update,
  Delete,
  GetSL,
  ListByIdentity,
  Create
};
