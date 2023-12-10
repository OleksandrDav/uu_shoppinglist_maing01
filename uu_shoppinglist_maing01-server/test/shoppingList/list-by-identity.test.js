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

describe("uuCmd shoppingList/listByIdentity", () => {
   test("hds - list shopping lists by identity", async () => {
      await TestHelper.login("StandardUsers");

      const createDtoIn1 = {
         name: "Shopping List 1"
      };
      const createdList1 = await TestHelper.executePostCommand("shoppingList/create", createDtoIn1);

      const createDtoIn2 = {
         name: "Shopping List 2"
      };
      const createdList2 = await TestHelper.executePostCommand("shoppingList/create", createDtoIn2);

      const listDtoIn = {
         pageInfo: {
            pageIndex: 0,
            pageSize: 10
         }
      };
      const result = await TestHelper.executeGetCommand("shoppingList/listByIdentity", listDtoIn);

      expect(result.data.uuAppErrorMap).toEqual({});
      expect(result.data.itemList).toHaveLength(2);
      expect(result.data.itemList[0].id).toEqual(createdList1.id);
      expect(result.data.itemList[1].id).toEqual(createdList2.id);
      expect(result.data.pageInfo.pageSize).toEqual(listDtoIn.pageInfo.pageSize)
   });

   test("noDtoIn - list shopping lists by identity", async () => {
      await TestHelper.login("StandardUsers");

      const createDtoIn1 = {
         name: "Shopping List 1"
      };
      const createdList1 = await TestHelper.executePostCommand("shoppingList/create", createDtoIn1);

      const createDtoIn2 = {
         name: "Shopping List 2"
      };
      const createdList2 = await TestHelper.executePostCommand("shoppingList/create", createDtoIn2);

      const result = await TestHelper.executeGetCommand("shoppingList/listByIdentity", {});

      expect(result.data.uuAppErrorMap).toEqual({});
      expect(result.data.itemList).toHaveLength(2);
      expect(result.data.itemList[0].id).toEqual(createdList1.id);
      expect(result.data.itemList[1].id).toEqual(createdList2.id);
      expect(result.data.pageInfo.pageSize).toEqual(100)
   });

   test("list shopping lists by Executives", async () => {
      await TestHelper.login("Executives");
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
         await TestHelper.executeGetCommand("shoppingList/listByIdentity", listDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/listByIdentity/userNotAuthorized");
         expect(e.status).toEqual(400);
      }
   });

   test("list shopping lists by Authorities", async () => {
      await TestHelper.login("Authorities");
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
         await TestHelper.executeGetCommand("shoppingList/listByIdentity", listDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/listByIdentity/userNotAuthorized");
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
         await TestHelper.executeGetCommand("shoppingList/listByIdentity", listDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/listByIdentity/userNotAuthorized");
         expect(e.status).toEqual(400);
      }
   });

   test("invalid DtoIn - not full pageInfo", async () => {
      await TestHelper.login("StandardUsers");
      try {
         const listDtoIn = {
               pageSize: 10
         };
         await TestHelper.executeGetCommand("shoppingList/listByIdentity", listDtoIn);
      } catch (e) {
         expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/listByIdentity/invalidDtoIn");
         expect(e.status).toEqual(400);
      }
   });
});
