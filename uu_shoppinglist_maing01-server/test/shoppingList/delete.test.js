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

describe("uuCmd shoppingList/delete", () => {
   test("hds - delete shopping list", async () => {
      await TestHelper.login("StandardUsers");

      const createDtoIn = {
         name: "Test Shopping List"
      };
      const createdShoppingList = await TestHelper.executePostCommand("shoppingList/create", createDtoIn);

      const deleteDtoIn = {
         id: createdShoppingList.id
      };
      const result = await TestHelper.executePostCommand("shoppingList/delete", deleteDtoIn);

      expect(result.data.id).toEqual(createdShoppingList.id);
      expect(result.data.uuAppErrorMap).toEqual({});
   });

   test("invalid dtoIn", async () => {
      await TestHelper.login("StandardUsers");
      try {
         await TestHelper.executePostCommand("shoppingList/delete", {});
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/delete/invalidDtoIn");
         expect(Object.keys(e.paramMap.missingKeyMap).length).toEqual(1);
         expect(e.status).toEqual(400);
      }
   });

   test("shopping list not found", async () => {
      await TestHelper.login("StandardUsers");
      try {
         const deleteDtoIn = {
            id: "655399f0e4778c4144c064a2"
         };
         await TestHelper.executePostCommand("shoppingList/delete", deleteDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/delete/shoppingListDoesNotExist");
         expect(e.status).toEqual(400);
      }
   });

   test("unauthorized user - cannot delete shopping list", async () => {
      try {
         const createDtoIn = {
            name: "Test Shopping List"
         };
         const createdShoppingList = await TestHelper.executePostCommand("shoppingList/create", createDtoIn);
   
         const deleteDtoIn = {
            id: createdShoppingList.id
         };
   
         await TestHelper.executePostCommand("shoppingList/delete", deleteDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/delete/userNotAuthorized");
         expect(e.status).toEqual(403);
      }
   });
   
});
