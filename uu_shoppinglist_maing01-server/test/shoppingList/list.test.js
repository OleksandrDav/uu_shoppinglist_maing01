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

describe("uuCmd shoppingList/list", () => {
   test("hds - list shopping lists by Executives", async () => {
      await TestHelper.login("Executives");

      const createDtoIn1 = {
         name: "Shopping List 1"
      };
      await TestHelper.executePostCommand("shoppingList/create", createDtoIn1);

      const createDtoIn2 = {
         name: "Shopping List 2"
      };
      await TestHelper.executePostCommand("shoppingList/create", createDtoIn2);

      const listDtoIn = {
         pageInfo: {
            pageIndex: 0,
            pageSize: 10
         }
      };
      const result = await TestHelper.executeGetCommand("shoppingList/list", listDtoIn);

      expect(result.data.uuAppErrorMap).toEqual({});
      expect(result.data.itemList).toHaveLength(2);
   });

   test("hds - list shopping lists by Authorities", async () => {
      await TestHelper.login("Authorities");

      const createDtoIn1 = {
         name: "Shopping List 1"
      };
      await TestHelper.executePostCommand("shoppingList/create", createDtoIn1);

      const createDtoIn2 = {
         name: "Shopping List 2"
      };
      await TestHelper.executePostCommand("shoppingList/create", createDtoIn2);

      const listDtoIn = {
         pageInfo: {
            pageIndex: 0,
            pageSize: 10
         }
      };
      const result = await TestHelper.executeGetCommand("shoppingList/list", listDtoIn);

      expect(result.data.uuAppErrorMap).toEqual({});
      expect(result.data.itemList).toHaveLength(2);
   });

   test("missing pageInfo - list shopping lists by Authorities", async () => {
      await TestHelper.login("Authorities");

      const createDtoIn1 = {
         name: "Shopping List 1"
      };
      await TestHelper.executePostCommand("shoppingList/create", createDtoIn1);

      const createDtoIn2 = {
         name: "Shopping List 2"
      };
      await TestHelper.executePostCommand("shoppingList/create", createDtoIn2);

      const result = await TestHelper.executeGetCommand("shoppingList/list", {});

      expect(result.data.uuAppErrorMap).toEqual({});
      expect(result.data.itemList).toHaveLength(2)
      expect(result.data.pageInfo.pageSize).toEqual(1000)
   });

   test("list shopping lists by StandardUsers", async () => {
      await TestHelper.login("StandardUsers");
      try {
         const createDtoIn1 = {
            name: "Shopping List 1"
         };
         await TestHelper.executePostCommand("shoppingList/create", createDtoIn1);
   
         const listDtoIn = {
            pageInfo: {
               pageIndex: 0,
               pageSize: 10
            }
         };
         await TestHelper.executeGetCommand("shoppingList/list", listDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/list/userNotAuthorized");
         expect(e.status).toEqual(400);
      }
   });

   test("unauthorized user", async () => {
      try {
         const listDtoIn = {
            pageInfo: {
               pageIndex: 0,
               pageSize: 10
            }
         };
         await TestHelper.executeGetCommand("shoppingList/list", listDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/list/userNotAuthorized");
         expect(e.status).toEqual(400);
      }
   });

   test("invalid DtoIn - not full pageInfo", async () => {
      await TestHelper.login("Authorities");
      try {
         const listDtoIn = {
               pageSize: 10
         };
         await TestHelper.executeGetCommand("shoppingList/list", listDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/list/invalidDtoIn");
         expect(e.status).toEqual(400);
      }
   });
});
