"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;

const Errors = require("../api/errors/shopping-list-error.js");
const Warnings = require("../api/warnings/shoppinglist-warning.js")


const DEFAULTS = {
  pageIndex: 0,
  pageSize: 100,
};

class ShoppingListAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("shoppingList");
  }

  async list(awid, dtoIn, session, authorizationResult) {
    let uuAppErrorMap = {};

    // Validate input DTO
    const validationResult = this.validator.validate("shoppingListListDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.List.UnsupportedKeys.code,
      Errors.List.InvalidDtoIn
    );

    const shoppingLists = await this.dao.list(awid, dtoIn.pageInfo);

    const dtoOut = {
      shoppingLists,
      uuAppErrorMap,
    };

    return dtoOut;
  }

  async setCompleted(awid, dtoIn, session, authorizationResult) {
    let uuAppErrorMap = {};

    const validationResult = this.validator.validate("shoppingListCompletedProductDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.CompletedProduct.UnsupportedKeys.code,
      Errors.CompletedProduct.InvalidDtoIn
    );

    const shoppingList = await this.dao.get(awid, dtoIn.id);
    if (!shoppingList) {
      throw new Errors.CompletedProduct.ShoppinglistDoesNotExist({ uuAppErrorMap }, { shoppingListId: dtoIn.id });
    }

    const productIndex = shoppingList.products.findIndex((product) => product.id === dtoIn.productId);

    if (productIndex !== -1) {
      shoppingList.products[productIndex].completed = dtoIn.completed;
      await this.dao.update(shoppingList);
    } else {
      throw new Errors.CompletedProduct.ProductNotFound({ uuAppErrorMap }, { productId: dtoIn.productId });
    }

    const dtoOut = {
      shoppingList,
      uuAppErrorMap,
    };

    return dtoOut;
  }

  async removeProduct(awid, dtoIn, session, authorizationResult) {
    let uuAppErrorMap = {};

    // Validate input DTO
    const validationResult = this.validator.validate("shoppingListRemoveProductDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.RemoveProduct.UnsupportedKeys.code,
      Errors.RemoveProduct.InvalidDtoIn
    );

    // Get the shopping list from the DAO
    const shoppingList = await this.dao.get(awid, dtoIn.id);
    if (!shoppingList) {
      throw new Errors.RemoveProduct.ShoppinglistDoesNotExist({ uuAppErrorMap }, { shoppingListId: dtoIn.id });
    }

    // Find the index of the product in the shopping list
    const productIndex = shoppingList.products.findIndex((product) => product.id === dtoIn.productId);

    // If the product is found, remove it
    if (productIndex !== -1) {
      shoppingList.products.splice(productIndex, 1);
      await this.dao.update(shoppingList);
    } else {
      throw new Errors.RemoveProduct.ProductNotFound({ uuAppErrorMap }, { productId: dtoIn.productId });
    }

    const dtoOut = {
      shoppingList,
      uuAppErrorMap,
    };

    return dtoOut;
  }

  async addProduct(awid, dtoIn, session, authorizationResult) {
    let uuAppErrorMap = {};

    const validationResult = this.validator.validate("shoppingListAddProductDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.AddProduct.UnsupportedKeys.code,
      Errors.AddProduct.InvalidDtoIn
    );

    const shoppingList = await this.dao.get(awid, dtoIn.id);
    if (!shoppingList) {
      throw new Errors.AddProduct.ShoppinglistDoesNotExist({ uuAppErrorMap }, { shoppingListId: dtoIn.id });
    }

    const product = {
      id: Date.now(),
      name: dtoIn.product,
      completed: false,
    };

    shoppingList.products.push(product);

    await this.dao.update(shoppingList);

    const dtoOut = {
      shoppingList,
      uuAppErrorMap,
    };

    return dtoOut;
  }

  async removeUser(awid, dtoIn, session, authorizationResult) {
    let uuAppErrorMap = {};

    const validationResult = this.validator.validate("shoppingListRemoveUserDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.RemoveUser.UnsupportedKeys.code,
      Errors.RemoveUser.InvalidDtoIn
    );

    const shoppingList = await this.dao.get(awid, dtoIn.id);
    if (!shoppingList) {
      throw new Errors.RemoveUser.ShoppinglistDoesNotExist({ uuAppErrorMap }, { shoppingListId: dtoIn.id });
    }

    const userIdIndex = shoppingList.memberId.indexOf(dtoIn.userId);
    if (userIdIndex !== -1) {
      shoppingList.memberId.splice(userIdIndex, 1);
      await this.dao.update(shoppingList);
    }

    const dtoOut = {
      shoppingList,
      uuAppErrorMap,
    };

    return dtoOut;
  }

  async addUser(awid, dtoIn, session, authorizationResult) {
    let uuAppErrorMap = {};

    const validationResult = this.validator.validate("shoppingListAddUserDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.AddUser.UnsupportedKeys.code,
      Errors.AddUser.InvalidDtoIn
    );

    const shoppingList = await this.dao.get(awid, dtoIn.id);
    if (!shoppingList) {
      throw new Errors.AddUser.ShoppinglistDoesNotExist({ uuAppErrorMap }, { shoppingListId: dtoIn.id });
    }

    shoppingList.memberId.push(dtoIn.userId);

    await this.dao.update(shoppingList);

    const dtoOut = {
      shoppingList,
      uuAppErrorMap,
    };

    return dtoOut;
  }

  async update(awid, dtoIn, session, authorizationResult) {
    let uuAppErrorMap = {};

    // Validate common fields in both cases
    const validationResult = this.validator.validate("shoppingListUpdateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Update.UnsupportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    const shoppingList = await this.dao.get(awid, dtoIn.id);
    if (!shoppingList) {
      throw new Errors.Update.ShoppinglistDoesNotExist({ uuAppErrorMap }, { shoppingListId: dtoIn.id });
    }


    if (dtoIn.name !== undefined) {
      shoppingList.name = dtoIn.name;
    }
    if (dtoIn.archived !== undefined) {
      shoppingList.archived = dtoIn.archived;
    }
    await this.dao.update(shoppingList);

    const dtoOut = {
      shoppingList,
      uuAppErrorMap,
    };

    return dtoOut;
  }

  async delete(awid, dtoIn, session, authorizationResult) {
    let uuAppErrorMap = {};

    const validationResult = this.validator.validate("shoppingListDeleteDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Delete.UnsupportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    const shoppingList = await this.dao.get(awid, dtoIn.id);
    if (!shoppingList) {
      // 3.1
      throw new Errors.Delete.ShoppinglistDoesNotExist({ uuAppErrorMap }, { shoppingListId: dtoIn.id });
    }

    await this.dao.delete(awid, dtoIn.id);

    const dtoOut = {
      shoppingList,
      uuAppErrorMap,
    };

    return dtoOut;

  }

  async getSL(awid, dtoIn) {
    let uuAppErrorMap = {};

    const validationResult = this.validator.validate("shoppingListGetDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.GetSL.UnsupportedKeys.code,
      Errors.GetSL.InvalidDtoIn
    );

    const shoppingList = await this.dao.get(awid, dtoIn.id);
    if (!shoppingList) {
      // 3.1
      throw new Errors.GetSL.ShoppinglistDoesNotExist(uuAppErrorMap, { shoppingListId: dtoIn.id });
    }

    const dtoOut = {
      ...shoppingList,
      uuAppErrorMap,
    };

    return dtoOut;
  }

  async listByIdentity(awid, dtoIn, session) {
    let uuAppErrorMap = {};

    const validationResult = this.validator.validate("shoppingListListByIdentityDtoInType", dtoIn);

    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.ListByIdentity.UnsupportedKeys.code,
      Errors.ListByIdentity.InvalidDtoIn
    );

    const uuIdentity = session.getIdentity().getUuIdentity();

    if (!dtoIn.pageInfo) dtoIn.pageInfo = {};
    if (!dtoIn.pageInfo.pageSize) dtoIn.pageInfo.pageSize = DEFAULTS.pageSize;
    if (!dtoIn.pageInfo.pageIndex) dtoIn.pageInfo.pageIndex = DEFAULTS.pageIndex;

    const shoppingLists = await this.dao.listByIdentity(awid, uuIdentity, dtoIn.pageInfo);
    const dtoOut = {
      ...shoppingLists,
      uuAppErrorMap,
    };

    return dtoOut;
  }

  async create(awid, dtoIn, session, authorizationResult) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("shoppingListCreateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    // get uuIdentity information
    const uuIdentity = session.getIdentity().getUuIdentity();

    const uuObject = {
      awid,
      ...dtoIn,
      ownerId: uuIdentity,
      memberId: [],
      products: [],
      archived: false
    };

    const shoppingList = await this.dao.create(uuObject);

    const dtoOut = { ...shoppingList, uuAppErrorMap };
    return dtoOut;
  }

}

module.exports = new ShoppingListAbl();
