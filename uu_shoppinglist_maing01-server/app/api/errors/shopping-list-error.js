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

module.exports = {
  Create
};
