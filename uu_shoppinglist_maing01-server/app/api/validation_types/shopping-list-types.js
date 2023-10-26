/* eslint-disable */
const shoppingListCreateDtoInSchema = shape({
   id: string().isRequired(),
   name: string(3, 255).isRequired(),
   ownerId: string().isRequired(),
   memberId: array(uuIdentity(), 100),
   products: array(shape({
      productId: mongoId().isRequired(),
      productName: string(3, 255).isRequired(),
      completed: boolean()
   }), 1000),
   archived: boolean()
});
