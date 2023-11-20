"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ShoppingListMongo extends UuObjectDao {

  async createSchema() {
    await super.createIndex({awid: 1, ownerId: 1});
    await super.createIndex({awid: 1, memberId: 1});
  }

  async create(shoppingList) {
    return await super.insertOne(shoppingList);
  }

  async list(awid, uuIdentity, pageInfo) {
    const query = {
      awid,
      $or: [
        { ownerId: uuIdentity },
        { memberId: uuIdentity },
      ],
    };

    return await super.find(query, pageInfo);
  }

  async get(awid, id) {
    return await super.findOne({ id, awid });
  }

  async delete(awid, id) {
    await super.deleteOne({ awid, id });
  }

  async update(shoppingList) {
    let filter = { id: shoppingList.id, awid: shoppingList.awid, revision: shoppingList.revision };
    return await super.findOneAndUpdate(filter, shoppingList, "NONE");
  }
}

module.exports = ShoppingListMongo;
