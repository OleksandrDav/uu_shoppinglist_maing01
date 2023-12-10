const { TestHelper } = require("uu_appg01_server-test");

beforeEach(async () => {
   await TestHelper.setup();
   await TestHelper.initUuSubAppInstance();
   await TestHelper.createUuAppWorkspace();
   await TestHelper.initUuAppWorkspace({ uuAppProfileAuthorities: "urn:uu:GGPLUS4U" });
});

afterEach(async () => {
   await TestHelper.teardown();
});

describe("uuCmd shoppingList/get", () => {
   test("hds - Get Shopping List", async () => {
      await TestHelper.login("StandardUsers");

      const createDtoIn = {
         name: "Test Shopping List"
      };
      const createdShoppingList = await TestHelper.executePostCommand("shoppingList/create", createDtoIn);

      const getDtoIn = {
         id: createdShoppingList.id
      };
      const result = await TestHelper.executeGetCommand("shoppingList/get", getDtoIn);

      expect(result.data.id).toEqual(createdShoppingList.id);
      expect(result.data.name).toEqual(createdShoppingList.name);
      expect(result.data.uuAppErrorMap).toEqual({});
   });

   test("invalid dtoIn - Missing ID", async () => {
      await TestHelper.login("StandardUsers");
      try {
         await TestHelper.executeGetCommand("shoppingList/get", {});
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/getSL/invalidDtoIn");
         expect(Object.keys(e.paramMap.missingKeyMap).length).toEqual(1);
         expect(e.status).toEqual(400);
      }
   });

   test("shopping list not found", async () => {
      await TestHelper.login("StandardUsers");
      try {
         const getDtoIn = {
            id: "655399f0e4778c4144c064a2"
         };
         await TestHelper.executeGetCommand("shoppingList/get", getDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/getSL/shoppinglistDoesNotExist");
         expect(e.status).toEqual(400);
      }
   });

   test("unauthorized user", async () => {
      try {
         const createDtoIn = {
            name: "Test Shopping List"
         };
         const createdShoppingList = await TestHelper.executePostCommand("shoppingList/create", createDtoIn);

         const getDtoIn = {
            id: createdShoppingList.id
         };
         await TestHelper.executeGetCommand("shoppingList/get", getDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/list/userNotAuthorized");
         expect(e.status).toEqual(403);
      }
   });

});
