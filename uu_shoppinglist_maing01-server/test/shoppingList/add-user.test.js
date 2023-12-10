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

describe("uuCmd shoppingList/user/add", () => {
   test("hds - add user to shopping list", async () => {
      await TestHelper.login("StandardUsers");

      const createDtoIn = {
         name: "Test Shopping List"
      };
      const createdShoppingList = await TestHelper.executePostCommand("shoppingList/create", createDtoIn);

      const addUserDtoIn = {
         id: createdShoppingList.id,
         userId: "6-11-6"
      };
      const result = await TestHelper.executePostCommand("shoppingList/user/add", addUserDtoIn);

      expect(result.data.id).toEqual(createdShoppingList.id);
      expect(result.data.memberId).toContain("6-11-6");
      expect(result.data.uuAppErrorMap).toEqual({});
   });

   test("invalid dtoIn - Missing ID", async () => {
      await TestHelper.login("StandardUsers");
      try {
         const addUserDtoIn = {
            userId: "6-11-6"
         };
         await TestHelper.executePostCommand("shoppingList/user/add", addUserDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/addUser/invalidDtoIn");
         expect(Object.keys(e.paramMap.missingKeyMap).length).toEqual(1);
         expect(e.status).toEqual(400);
      }
   });

   test("shopping list not found", async () => {
      await TestHelper.login("StandardUsers");
      try {
         const addUserDtoIn = {
            id: "654f60fc8dfb6b4584595441",
            userId: "6-11-6"
         };
         await TestHelper.executePostCommand("shoppingList/user/add", addUserDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/addUser/shoppingListDoesNotExist");
         expect(e.status).toEqual(400);
      }
   });

   test("unauthorized user", async () => {
      try {
         const createDtoIn = {
            name: "Test Shopping List",
         };
         const createdShoppingList = await TestHelper.executePostCommand("shoppingList/create", createDtoIn);

         const addUserDtoIn = {
            id: createdShoppingList.id,
            userId: "6-11-6"
         };
         await TestHelper.executePostCommand("shoppingList/user/add", addUserDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/list/userNotAuthorized");
         expect(e.status).toEqual(403);
      }
   });
});
