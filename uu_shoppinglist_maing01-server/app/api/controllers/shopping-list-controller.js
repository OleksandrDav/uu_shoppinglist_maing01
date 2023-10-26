"use strict";
const ShoppingListAbl = require("../../abl/shopping-list-abl.js");

class ShoppingListController {

  create(ucEnv) {
    return ShoppingListAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new ShoppingListController();
