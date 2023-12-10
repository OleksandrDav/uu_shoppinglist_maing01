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

describe("uuCmd shoppingList/update", () => {
  test("hds - update shopping list name", async () => {
    await TestHelper.login("StandardUsers");

    const createDtoIn = {
      name: "Original Shopping List",
    };
    const createdShoppingList = await TestHelper.executePostCommand("shoppingList/create", createDtoIn);

    const updateDtoIn = {
      id: createdShoppingList.id,
      name: "Updated Shopping List",
    };
    const result = await TestHelper.executePostCommand("shoppingList/update", updateDtoIn);

    expect(result.data.id).toEqual(createdShoppingList.id);
    expect(result.data.name).toEqual(updateDtoIn.name);
    expect(result.data.uuAppErrorMap).toEqual({});
  });

  test("hds - update shopping list archived status", async () => {
    await TestHelper.login("StandardUsers");

    const createDtoIn = {
      name: "Original Shopping List",
    };
    const createdShoppingList = await TestHelper.executePostCommand("shoppingList/create", createDtoIn);

    const updateDtoIn = {
      id: createdShoppingList.id,
      archived: true,
    };
    const result = await TestHelper.executePostCommand("shoppingList/update", updateDtoIn);

    expect(result.data.id).toEqual(createdShoppingList.id);
    expect(result.data.archived).toEqual(updateDtoIn.archived);
    expect(result.data.uuAppErrorMap).toEqual({});
  });

  test("invalid dtoIn - Missing ID", async () => {
    await TestHelper.login("StandardUsers");
    try {
      await TestHelper.executePostCommand("shoppingList/update", {});
    } catch (e) {
      expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/update/invalidDtoIn");
      expect(Object.keys(e.paramMap.missingKeyMap).length).toEqual(1);
      expect(e.status).toEqual(400);
    }
  });

  test("shopping list not found", async () => {
    await TestHelper.login("StandardUsers");
    try {
      const updateDtoIn = {
        id: "655399f0e4778c4144c064a2",
        name: "Updated Shopping List",
      };
      await TestHelper.executePostCommand("shoppingList/update", updateDtoIn);
    } catch (e) {
      expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/update/shoppingListDoesNotExist");
      expect(e.status).toEqual(400);
    }
  });

  test("unauthorized user", async () => {
    try {
      const createDtoIn = {
        name: "Test Shopping List",
      };
      const createdShoppingList = await TestHelper.executePostCommand("shoppingList/create", createDtoIn);

      const updateDtoIn = {
        id: createdShoppingList.id,
        name: "Updated Shopping List",
      };
      await TestHelper.executePostCommand("shoppingList/update", updateDtoIn);
    } catch (e) {
      expect(e.code).toEqual("uu-shoppinglist-main/shoppingList/list/userNotAuthorized");
      expect(e.status).toEqual(403);
    }
  });
});