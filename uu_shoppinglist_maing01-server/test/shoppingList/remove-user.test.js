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

describe("uuCmd shoppingList/user/remove", () => {
  test("hds - remove user from shopping list", async () => {
    await TestHelper.login("StandardUsers");

    const createDtoIn = {
      name: "Test Shopping List"
    };
    const createdShoppingList = await TestHelper.executePostCommand("shoppingList/create", createDtoIn);

    const addUserDtoIn = {
      id: createdShoppingList.id,
      userId: "6-11-6"
    };
    await TestHelper.executePostCommand("shoppingList/user/add", addUserDtoIn);

    const removeUserDtoIn = {
      id: createdShoppingList.id,
      userId: "6-11-6"
    };
    const result = await TestHelper.executePostCommand("shoppingList/user/remove", removeUserDtoIn);

    expect(result.data.id).toEqual(createdShoppingList.id);
    expect(result.data.memberId).not.toContain("6-11-6");
    expect(result.data.uuAppErrorMap).toEqual({});
  });

  test("invalid dtoIn - Missing ID", async () => {
    await TestHelper.login("StandardUsers");
    try {
      const removeUserDtoIn = {
        userId: "6-11-6"
      };
      await TestHelper.executePostCommand("shoppingList/user/remove", removeUserDtoIn);
    } catch (e) {
      expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/removeUser/invalidDtoIn");
      expect(Object.keys(e.paramMap.missingKeyMap).length).toEqual(1);
      expect(e.status).toEqual(400);
    }
  });

  test("shopping list not found", async () => {
    await TestHelper.login("StandardUsers");
    try {
      const removeUserDtoIn = {
        id: "655399f0e4778c4144c064a2",
        userId: "6-11-6"
      };
      await TestHelper.executePostCommand("shoppingList/user/remove", removeUserDtoIn);
    } catch (e) {
      expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/removeUser/shoppingListDoesNotExist");
      expect(e.status).toEqual(400);
    }
  });

  test("unauthorized user", async () => {
    try {
      const createDtoIn = {
        name: "Test Shopping List",
      };
      const createdShoppingList = await TestHelper.executePostCommand("shoppingList/create", createDtoIn);

      const removeUserDtoIn = {
        id: createdShoppingList.id,
        userId: "6-11-6"
      };
      await TestHelper.executePostCommand("shoppingList/user/remove", removeUserDtoIn);
    } catch (e) {
      expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/list/userNotAuthorized");
      expect(e.status).toEqual(403);
    }
  });
});