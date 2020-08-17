//Fuction For adding selected Product to cart.

export const AddParticularProductToCart = (oldstate, nextaction) => {
  console.log(oldstate, "OldState");
  console.log(nextaction.Data._id, "Incoming Data Id");

  const existingcartItem = oldstate.find(data => {
    return data.Data._id === nextaction.Data._id;
  });

  console.log(existingcartItem);

  if (existingcartItem) {
    return oldstate.map(caritem =>
      caritem.Data._id === nextaction.Data._id
        ? { ...caritem, quantity: caritem.quantity + 1 }
        : caritem
    );
  }
  return [...oldstate, { ...nextaction, quantity: 1 }];
};

export const addQuantity = (oldstate, addQuantityProduct) => {
  //console.log(oldstate);
  //console.log(addQuantityProduct);

  const findProductToAddQuantity = oldstate.find(data => {
    return data.Data._id === addQuantityProduct;
  });
  console.log(findProductToAddQuantity);
  if (findProductToAddQuantity) {
    return oldstate.map(caritem =>
      caritem.Data._id === addQuantityProduct
        ? { ...caritem, quantity: caritem.quantity + 1 }
        : caritem
    );
  }
};

export const removeQuantity = (oldState, removeQuantityProduct) => {
  //console.log(oldState);
  //console.log(removeQuantityProduct);
  const findProductToAddQuantity = oldState.find(data => {
    return data.Data._id === removeQuantityProduct;
  });
  console.log(findProductToAddQuantity);
  if (findProductToAddQuantity.quantity <= 1) {
    return oldState.filter(
      caritem => caritem.Data._id !== removeQuantityProduct
    );
  } else {
    findProductToAddQuantity.quantity -= 1;
    return [...oldState];
  }
};
