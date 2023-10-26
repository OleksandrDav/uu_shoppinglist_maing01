"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/shopping-list-error.js");

const Warnings = require("../api/warnings/shopping-list-warning.js");

class ShoppingListAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("shoppingList");
  }

  async create(awid, dtoIn) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListCreateDtoInSchema", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    // prepare and return dtoOut
    const dtoOut = { ...dtoIn };
    dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }

}

module.exports = new ShoppingListAbl();
