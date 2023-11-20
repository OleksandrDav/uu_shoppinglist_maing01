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

describe("uuCmd shoppingList/create", () => {
   test("hds - StandardUser", async () => {
      await TestHelper.login("StandardUserUser");

      const dtoIn = {
         name: "New Shopping List"
      };
      const result = await TestHelper.executePostCommand("shoppingList/create", dtoIn);

      expect(result.data.name).toEqual(dtoIn.name);
      expect(result.data.awid).toEqual(TestHelper.awid);
      expect(result.data.ownerId).toBeDefined();
      expect(result.data.uuAppErrorMap).toEqual({});
   });

   test.skip("invalid dtoIn", async () => {
      expect.assertions(3);
      try {
         await TestHelper.executePostCommand("shoppingList/create", {});
      } catch (e) {
         expect(e.code).toEqual("uu-shoppingList-main/shoppingList/create/invalidDtoIn");
         expect(Object.keys(e.paramMap.missingKeyMap).length).toEqual(1);
         expect(e.status).toEqual(400);
      }
   });
});