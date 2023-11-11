/* eslint-disable */

const shoppingListCreateDtoInType = shape({
   name: string(3, 255).isRequired()
})

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

const shoppingListArchiveUpdateDtoInType = shape({
   id: id().isRequired(),
   archived: boolean().isRequired(),
});

const shoppingListNameUpdateDtoInType = shape({
   id: id().isRequired(),
   name: string().isRequired(),
});

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