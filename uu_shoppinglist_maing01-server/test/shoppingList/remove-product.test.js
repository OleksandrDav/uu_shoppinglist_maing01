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

describe("uuCmd shoppingList/product/remove", () => {
   test("hds - remove product from shopping list", async () => {
      await TestHelper.login("StandardUsers");

      const createDtoIn = {
         name: "Test Shopping List"
      };
      const createdShoppingList = await TestHelper.executePostCommand("shoppingList/create", createDtoIn);

      const addProductDtoIn = {
         id: createdShoppingList.id,
         product: "New Product"
      };
      const addedProductList = await TestHelper.executePostCommand("shoppingList/product/add", addProductDtoIn);

      const removeProductDtoIn = {
         id: createdShoppingList.id,
         productId: addedProductList.data.products[0].id
      };
      const result = await TestHelper.executePostCommand("shoppingList/product/remove", removeProductDtoIn);

      expect(result.data.id).toEqual(createdShoppingList.id);
      expect(result.data.products).toHaveLength(0);
      expect(result.data.uuAppErrorMap).toEqual({});
   });

   test("invalid dtoIn - Missing ID", async () => {
      await TestHelper.login("StandardUsers");
      try {
         const removeProductDtoIn = {
            productId: 123
         };
         await TestHelper.executePostCommand("shoppingList/product/remove", removeProductDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/removeProduct/invalidDtoIn");
         expect(Object.keys(e.paramMap.missingKeyMap).length).toEqual(1);
         expect(e.status).toEqual(400);
      }
   });

   test("shopping list not found", async () => {
      await TestHelper.login("StandardUsers");
      try {
         const removeProductDtoIn = {
            id: "655399f0e4778c4144c064a2",
            productId: 123
         };
         await TestHelper.executePostCommand("shoppingList/product/remove", removeProductDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/removeProduct/shoppingListDoesNotExist");
         expect(e.status).toEqual(400);
      }
   });

   test("product not found in shopping list", async () => {
      await TestHelper.login("StandardUsers");
      try {
         const createDtoIn = {
            name: "Test Shopping List"
         };
         const createdShoppingList = await TestHelper.executePostCommand("shoppingList/create", createDtoIn);

         const removeProductDtoIn = {
            id: createdShoppingList.id,
            productId: 123
         };
         await TestHelper.executePostCommand("shoppingList/product/remove", removeProductDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/removeProduct/productNotFound");
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
         const addedProductList = await TestHelper.executePostCommand("shoppingList/product/add", addProductDtoIn);

         const removeProductDtoIn = {
            id: createdShoppingList.id,
            productId: addedProductList.data.products[0].id
         };
         await TestHelper.executePostCommand("shoppingList/product/remove", removeProductDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/list/userNotAuthorized");
         expect(e.status).toEqual(403);
      }
   });
});
