"use strict";
const ShoppingListAbl = require("../../abl/shopping-list-abl.js");

class ShoppingListController {

  list(ucEnv) {
    return ShoppingListAbl.list(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getAuthorizationResult()
      );
  }

  setCompleted(ucEnv) {
    return ShoppingListAbl.setCompleted(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getAuthorizationResult()
      );
  }

  removeProduct(ucEnv) {
    return ShoppingListAbl.removeProduct(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getAuthorizationResult()
      );
  }

  addProduct(ucEnv) {
    return ShoppingListAbl.addProduct(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getAuthorizationResult()
      );
  }

  removeUser(ucEnv) {
    return ShoppingListAbl.removeUser(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getAuthorizationResult()
      );
  }

  addUser(ucEnv) {
    return ShoppingListAbl.addUser(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getAuthorizationResult()
      );
  }

  update(ucEnv) {
    return ShoppingListAbl.update(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getAuthorizationResult()
      );
  }

  delete(ucEnv) {
    return ShoppingListAbl.delete(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getAuthorizationResult()
      )
  }

  getSL(ucEnv) {
    return ShoppingListAbl.getSL(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getAuthorizationResult()
      )
  }

  listByIdentity(ucEnv) {
    return ShoppingListAbl.listByIdentity(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getSession(),
      ucEnv.getAuthorizationResult()
      );
  }

  create(ucEnv) {
    return ShoppingListAbl.create(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getSession(),
      ucEnv.getAuthorizationResult()
      );
  }

}

module.exports = new ShoppingListController();
