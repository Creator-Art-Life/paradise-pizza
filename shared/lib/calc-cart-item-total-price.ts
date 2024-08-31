import { CartItemDTO } from "../services/dto/cart.dto";

export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
    const ingredientsPrice = item.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0);

    return parseFloat((((ingredientsPrice / 100) + item.productItem.price) * item.quantity).toFixed(2));
};

