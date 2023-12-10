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

describe("uuCmd shoppingList/product/add", () => {
   test("hds - add product to shopping list", async () => {
      await TestHelper.login("StandardUsers");

      const createDtoIn = {
         name: "Test Shopping List"
      };
      const createdShoppingList = await TestHelper.executePostCommand("shoppingList/create", createDtoIn);

      const addProductDtoIn = {
         id: createdShoppingList.id,
         product: "New Product"
      };
      const result = await TestHelper.executePostCommand("shoppingList/product/add", addProductDtoIn);

      expect(result.data.id).toEqual(createdShoppingList.id);
      expect(result.data.products).toHaveLength(1);
      expect(result.data.products[0].name).toEqual(addProductDtoIn.product);
      expect(result.data.uuAppErrorMap).toEqual({});
   });

   test("invalid dtoIn - Missing ID", async () => {
      await TestHelper.login("StandardUsers");
      try {
         const addProductDtoIn = {
            product: "New Product"
         };
         await TestHelper.executePostCommand("shoppingList/product/add", addProductDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/addProduct/invalidDtoIn");
         expect(Object.keys(e.paramMap.missingKeyMap).length).toEqual(1);
         expect(e.status).toEqual(400);
      }
   });

   test("shopping list not found", async () => {
      await TestHelper.login("StandardUsers");
      try {
         const addProductDtoIn = {
            id: "655399f0e4778c4144c064a2",
            product: "New Product"
         };
         await TestHelper.executePostCommand("shoppingList/product/add", addProductDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/addProduct/shoppingListDoesNotExist");
         expect(e.status).toEqual(400);
      }
   });

   test("unauthorized user", async () => {
      try {
         const createDtoIn = {
            name: "Test Shopping List"
         };
         const createdShoppingList = await TestHelper.executePostCommand("shoppingList/create", createDtoIn);

         const addProductDtoIn = {
            id: createdShoppingList.id,
            product: "New Product"
         };
         await TestHelper.executePostCommand("shoppingList/product/add", addProductDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/list/userNotAuthorized");
         expect(e.status).toEqual(403);
      }
   });
});
