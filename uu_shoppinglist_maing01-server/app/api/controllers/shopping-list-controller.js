"use strict";
const ShoppingListAbl = require("../../abl/shopping-list-abl.js");

class ShoppingListController {

  removeProduct(ucEnv) {
    return ShoppingListAbl.removeProduct(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getSession(),
      ucEnv.getAuthorizationResult()
      );
  }

  addProduct(ucEnv) {
    return ShoppingListAbl.addProduct(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getSession(),
      ucEnv.getAuthorizationResult()
      );
  }

  removeUser(ucEnv) {
    return ShoppingListAbl.removeUser(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getSession(),
      ucEnv.getAuthorizationResult()
      );
  }

  addUser(ucEnv) {
    return ShoppingListAbl.addUser(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getSession(),
      ucEnv.getAuthorizationResult()
      );
  }

  nameUpdate(ucEnv) {
    return ShoppingListAbl.nameUpdate(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getSession(),
      ucEnv.getAuthorizationResult()
      );
  }

  archiveUpdate(ucEnv) {
    return ShoppingListAbl.archiveUpdate(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getSession(),
      ucEnv.getAuthorizationResult()
      );
  }

  delete(ucEnv) {
    return ShoppingListAbl.delete(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getSession(),
      ucEnv.getAuthorizationResult()
      )
  }

  getSL(ucEnv) {
    return ShoppingListAbl.getSL(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn());
  }

  list(ucEnv) {
    return ShoppingListAbl.list(
      ucEnv.getUri().getAwid(), 
      ucEnv.getDtoIn(),
      ucEnv.getSession()
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
