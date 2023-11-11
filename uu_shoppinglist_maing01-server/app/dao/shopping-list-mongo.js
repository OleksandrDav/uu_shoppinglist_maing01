"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ShoppingListMongo extends UuObjectDao {

  async createSchema(){
    await super.createIndex({ ownerId: 1, memberId: 1, archived: 1 });
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

  async updateArchiveState(shoppingList) {
    let filter = { id: shoppingList.id, awid: shoppingList.awid, revision: shoppingList.revision };
    return await super.findOneAndUpdate(filter, shoppingList, "NONE");
  }

  async updateName(shoppingList) {
    let filter = { id: shoppingList.id, awid: shoppingList.awid, revision: shoppingList.revision };
    return await super.findOneAndUpdate(filter, shoppingList, "NONE");
  }

  async updateMembers(shoppingList) {
    let filter = { id: shoppingList.id, awid: shoppingList.awid, revision: shoppingList.revision };
    let update = { $set: { memberId: shoppingList.memberId } };
    return await super.findOneAndUpdate(filter, update, "NONE");
  }

  async updateProducts(shoppingList) {
    let filter = { id: shoppingList.id, awid: shoppingList.awid, revision: shoppingList.revision };
    let update = { $set: { products: shoppingList.products } };
    return await super.findOneAndUpdate(filter, update, "NONE");
  }

  async removeProduct(shoppingList) {
    let filter = { id: shoppingList.id, awid: shoppingList.awid, revision: shoppingList.revision };
    let update = { $pull: { products: { id: shoppingList.products.id } } };
    return await super.findOneAndUpdate(filter, update, "NONE");
  }

}

module.exports = ShoppingListMongo;
