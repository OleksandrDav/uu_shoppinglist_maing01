/* eslint-disable */

const shoppingListCreateDtoInType = shape({
   name: string(3, 255).isRequired()
})

const shoppingListListByIdentityDtoInType = shape({
   pageInfo: shape({
      pageIndex: integer(),
      pageSize: integer(),
   }),
});

const shoppingListListDtoInType = shape({
   pageInfo: shape({
      pageIndex: integer(),
      pageSize: integer(),
   }),
});

const shoppingListGetDtoInType = shape({
   id: id().isRequired(),
});

const shoppingListDeleteDtoInType = shape({
   id: id().isRequired()
});

const shoppingListUpdateDtoInType = shape({
   id: id().isRequired(),
   name: string(),
   archived: boolean(),
})

const shoppingListAddUserDtoInType = shape({
   id: id().isRequired(),
   userId: string().isRequired()
})

const shoppingListRemoveUserDtoInType  = shape({
   id: id().isRequired(),
   userId: string().isRequired()
})

const shoppingListAddProductDtoInType = shape({
   id: id().isRequired(),
   product: string().isRequired()
})

const shoppingListRemoveProductDtoInType = shape({
   id: id().isRequired(),
   productId: integer().isRequired()
})

const shoppingListCompletedProductDtoInType = shape({
   id: id().isRequired(),
   productId: integer().isRequired(),
   completed: boolean().isRequired(),
})